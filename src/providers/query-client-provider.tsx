"use client"

import { QueryClient, QueryClientProvider as TanstackQueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react"

interface QueryClientProviderProps {
  children: ReactNode
}

/**
 * Provider component that initializes and provides the React Query client
 * 
 * This provider should be placed high in the component tree, typically in a layout component
 * or in the root layout, to ensure all components have access to the query client.
 */
export function QueryClientProvider({ children }: QueryClientProviderProps) {
  // Create a new QueryClient instance for each session to avoid shared state between users
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Default query options
            staleTime: 60 * 1000, // 1 minute
            gcTime: 5 * 60 * 1000, // 5 minutes
            retry: 1,
            refetchOnWindowFocus: process.env.NODE_ENV === "production",
          },
          mutations: {
            // Default mutation options
            retry: 1,
          },
        },
      })
  )

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
    </TanstackQueryClientProvider>
  )
}