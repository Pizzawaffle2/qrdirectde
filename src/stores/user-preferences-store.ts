import { create } from 'zustand'
import { createSelectors } from './create-selectors'
import { persist } from 'zustand/middleware'

// Define the store state type
interface UserPreferencesState {
  theme: 'light' | 'dark' | 'system'
  fontSize: 'small' | 'medium' | 'large'
  reducedMotion: boolean
  
  // Actions
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  setFontSize: (size: 'small' | 'medium' | 'large') => void
  setReducedMotion: (enabled: boolean) => void
  resetPreferences: () => void
}

// Default state
const defaultState = {
  theme: 'system' as const,
  fontSize: 'medium' as const,
  reducedMotion: false,
}

// Create the store with persist middleware for local storage
const useUserPreferencesStoreBase = create<UserPreferencesState>()(
  persist(
    (set) => ({
      // Initial state
      ...defaultState,
      
      // Actions
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
      setReducedMotion: (reducedMotion) => set({ reducedMotion }),
      resetPreferences: () => set(defaultState),
    }),
    {
      name: 'user-preferences', // Local storage key
    }
  )
)

// Create a store with selectors for optimized renders
export const useUserPreferencesStore = createSelectors(useUserPreferencesStoreBase)

// Example usage:
// const theme = useUserPreferencesStore.use.theme()
// const setTheme = useUserPreferencesStore.use.setTheme()