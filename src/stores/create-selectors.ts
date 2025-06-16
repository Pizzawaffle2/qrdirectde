import { StoreApi, UseBoundStore } from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

/**
 * Creates selectors for a Zustand store to optimize renders
 * 
 * This utility creates a `use` object with a selector for each property in the store state.
 * Using these selectors ensures that components only re-render when the specific state they
 * use changes, rather than on any state change.
 * 
 * @example
 * // Create a store with selectors
 * const useCounterStore = createSelectors(create<CounterState>()((set) => ({
 *   count: 0,
 *   increment: () => set((state) => ({ count: state.count + 1 })),
 * })))
 * 
 * // In a component, use a selector to only re-render when count changes
 * const count = useCounterStore.use.count()
 * const increment = useCounterStore.use.increment()
 */
export function createSelectors<S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
): WithSelectors<S> {
  const store = _store as WithSelectors<S>
  store.use = {}
  
  // Get all keys from the store state
  const storeState = store.getState()
  
  // Create a selector for each key
  Object.keys(storeState).forEach((key) => {
    const selector = (state: typeof storeState) => state[key as keyof typeof storeState]
    
    // @ts-ignore - We're dynamically creating selectors
    store.use[key] = () => store(selector)
  })
  
  return store
}