"use client"

import { useUserPreferencesStore } from "@/stores"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

/**
 * Example component demonstrating the use of the user preferences store with selectors
 * 
 * This component only re-renders when the specific state it uses changes,
 * thanks to the selectors pattern implemented in the store.
 */
export function UserPreferencesDemo() {
  // Use selectors to only re-render when specific state changes
  const theme = useUserPreferencesStore.use.theme()
  const fontSize = useUserPreferencesStore.use.fontSize()
  const reducedMotion = useUserPreferencesStore.use.reducedMotion()
  
  // Get actions from the store
  const setTheme = useUserPreferencesStore.use.setTheme()
  const setFontSize = useUserPreferencesStore.use.setFontSize()
  const setReducedMotion = useUserPreferencesStore.use.setReducedMotion()
  const resetPreferences = useUserPreferencesStore.use.resetPreferences()
  
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Preferences</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Theme</h3>
          <div className="flex gap-2">
            <Button 
              variant={theme === 'light' ? 'default' : 'outline'} 
              onClick={() => setTheme('light')}
            >
              Light
            </Button>
            <Button 
              variant={theme === 'dark' ? 'default' : 'outline'} 
              onClick={() => setTheme('dark')}
            >
              Dark
            </Button>
            <Button 
              variant={theme === 'system' ? 'default' : 'outline'} 
              onClick={() => setTheme('system')}
            >
              System
            </Button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Font Size</h3>
          <div className="flex gap-2">
            <Button 
              variant={fontSize === 'small' ? 'default' : 'outline'} 
              onClick={() => setFontSize('small')}
            >
              Small
            </Button>
            <Button 
              variant={fontSize === 'medium' ? 'default' : 'outline'} 
              onClick={() => setFontSize('medium')}
            >
              Medium
            </Button>
            <Button 
              variant={fontSize === 'large' ? 'default' : 'outline'} 
              onClick={() => setFontSize('large')}
            >
              Large
            </Button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Reduced Motion</h3>
          <Button 
            variant={reducedMotion ? 'default' : 'outline'} 
            onClick={() => setReducedMotion(!reducedMotion)}
          >
            {reducedMotion ? 'Enabled' : 'Disabled'}
          </Button>
        </div>
        
        <div className="pt-4 border-t">
          <Button variant="destructive" onClick={resetPreferences}>
            Reset All Preferences
          </Button>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-muted rounded-md">
        <h3 className="text-lg font-medium mb-2">Current Settings</h3>
        <pre className="text-sm">
          {JSON.stringify({ theme, fontSize, reducedMotion }, null, 2)}
        </pre>
      </div>
    </Card>
  )
}