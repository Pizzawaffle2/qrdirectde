"use client"

import React from "react"
import {
  ArrowRight,
  Bell,
  ChevronRight,
  Home,
  Mail,
  Search,
  Settings,
  Star,
  User
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { RippleButton } from "@/components/ui/ripple-button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FloatingBackground, GradientBackground } from "@/components/ui/floating-background"
import { HeroBadgeWithIcon } from "@/components/ui/hero-badge"
import { StatCard, GradientStatCard } from "@/components/ui/stat-card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Breadcrumb, BreadcrumbItem, BreadcrumbEllipsis } from "@/components/ui/breadcrumb"
import { Pagination, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@/components/ui/pagination"
import { toast, Toaster } from "@/components/ui/toast"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Progress, AnimatedProgress } from "@/components/ui/progress"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerBody, DrawerFooter } from "@/components/ui/drawer"
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from "@/components/ui/table"
import { List, ListItem, ListItemContainer, ListItemIcon, ListItemContent, ListItemTitle, ListItemDescription, ListItemAction } from "@/components/ui/list"
import { Timeline, TimelineItem, TimelineDot, TimelineCenteredDot, TimelineContent, TimelineTitle, TimelineDescription, TimelineTime, TimelineItemContainer } from "@/components/ui/timeline"
import { Input } from "@/components/ui/input"
import { FloatingLabelInput } from "@/components/ui/floating-label-input"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxGroup } from "@/components/ui/checkbox-group"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { FormSelect } from "@/components/ui/form-select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FormRadioGroup } from "@/components/ui/form-radio-group"

export default function ComponentsPage() {
  // State for interactive components
  const [activeTab, setActiveTab] = React.useState("buttons")
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [progress, setProgress] = React.useState(50)

  // Show toast example
  const showToast = () => {
    toast({
      title: "Success",
      description: "Your action was completed successfully.",
      variant: "success",
    })
  }

  return (
    <FloatingBackground className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <HeroBadgeWithIcon 
            icon={<Star className="h-4 w-4" />} 
            variant="teal"
          >
            Creator-First Design System
          </HeroBadgeWithIcon>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-2">
            Component Showcase
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive showcase of all the UI components built with the Creator-First Design System.
          </p>
        </header>

        {/* Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList variant="pills" className="flex flex-wrap justify-center mb-8">
            <TabsTrigger value="buttons" variant="pills">Buttons</TabsTrigger>
            <TabsTrigger value="cards" variant="pills">Cards</TabsTrigger>
            <TabsTrigger value="navigation" variant="pills">Navigation</TabsTrigger>
            <TabsTrigger value="feedback" variant="pills">Feedback</TabsTrigger>
            <TabsTrigger value="modals" variant="pills">Modals</TabsTrigger>
            <TabsTrigger value="data" variant="pills">Data Display</TabsTrigger>
            <TabsTrigger value="forms" variant="pills">Forms</TabsTrigger>
          </TabsList>

          {/* Buttons Tab */}
          <TabsContent value="buttons">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>
                  Button components with various styles and animations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Standard Buttons</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Gradient Buttons</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="gradient">Gradient</Button>
                    <Button variant="warm">Warm</Button>
                    <Button variant="sage">Sage</Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Button Sizes</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra Large</Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Ripple Effect Buttons</h3>
                  <div className="flex flex-wrap gap-4">
                    <RippleButton>Default</RippleButton>
                    <RippleButton variant="gradient">Gradient</RippleButton>
                    <RippleButton variant="warm">Warm</RippleButton>
                    <RippleButton variant="sage">Sage</RippleButton>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Icon Buttons</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button>
                      <Mail className="mr-2 h-4 w-4" /> Email
                    </Button>
                    <Button variant="outline">
                      Settings <Settings className="ml-2 h-4 w-4" />
                    </Button>
                    <RippleButton variant="gradient">
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </RippleButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cards Tab */}
          <TabsContent value="cards">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>A standard card component</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the content of the card. You can put any content here.</p>
                </CardContent>
                <CardFooter>
                  <Button>Action</Button>
                </CardFooter>
              </Card>

              <Card variant="hover">
                <CardHeader>
                  <CardTitle>Hover Card</CardTitle>
                  <CardDescription>A card with hover effect</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Hover over this card to see the effect.</p>
                </CardContent>
                <CardFooter>
                  <Button>Action</Button>
                </CardFooter>
              </Card>

              <GradientBackground className="rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Gradient Background</h3>
                <p className="text-white/80">A component with gradient background.</p>
              </GradientBackground>

              <Card variant="glass" className="border-white/10 bg-primary/5">
                <CardHeader>
                  <CardTitle>Glass Card</CardTitle>
                  <CardDescription>A card with glass effect</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This card has a glass morphism effect.</p>
                </CardContent>
                <CardFooter>
                  <Button>Action</Button>
                </CardFooter>
              </Card>

              <StatCard 
                title="Statistics Card" 
                value="1,234" 
                icon={<Star className="h-6 w-6" />}
                description="A card for displaying statistics"
              />

              <GradientStatCard 
                title="Gradient Stat Card" 
                value="5,678" 
                icon={<Bell className="h-6 w-6" />}
                trend={{ value: 25, isPositive: true }}
                variant="teal"
              />
            </div>
          </TabsContent>

          {/* Navigation Tab */}
          <TabsContent value="navigation">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Tabs</CardTitle>
                  <CardDescription>Tab components with various styles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Default Tabs</h3>
                    <Tabs defaultValue="tab1">
                      <TabsList>
                        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                      </TabsList>
                      <TabsContent value="tab1">Content for Tab 1</TabsContent>
                      <TabsContent value="tab2">Content for Tab 2</TabsContent>
                      <TabsContent value="tab3">Content for Tab 3</TabsContent>
                    </Tabs>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Underline Tabs</h3>
                    <Tabs defaultValue="tab1">
                      <TabsList variant="underline">
                        <TabsTrigger value="tab1" variant="underline">Tab 1</TabsTrigger>
                        <TabsTrigger value="tab2" variant="underline">Tab 2</TabsTrigger>
                        <TabsTrigger value="tab3" variant="underline">Tab 3</TabsTrigger>
                      </TabsList>
                      <TabsContent value="tab1">Content for Tab 1</TabsContent>
                      <TabsContent value="tab2">Content for Tab 2</TabsContent>
                      <TabsContent value="tab3">Content for Tab 3</TabsContent>
                    </Tabs>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Pills Tabs</h3>
                    <Tabs defaultValue="tab1">
                      <TabsList variant="pills">
                        <TabsTrigger value="tab1" variant="pills">Tab 1</TabsTrigger>
                        <TabsTrigger value="tab2" variant="pills">Tab 2</TabsTrigger>
                        <TabsTrigger value="tab3" variant="pills">Tab 3</TabsTrigger>
                      </TabsList>
                      <TabsContent value="tab1">Content for Tab 1</TabsContent>
                      <TabsContent value="tab2">Content for Tab 2</TabsContent>
                      <TabsContent value="tab3">Content for Tab 3</TabsContent>
                    </Tabs>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Cards Tabs</h3>
                    <Tabs defaultValue="tab1">
                      <TabsList variant="cards">
                        <TabsTrigger value="tab1" variant="cards">Tab 1</TabsTrigger>
                        <TabsTrigger value="tab2" variant="cards">Tab 2</TabsTrigger>
                        <TabsTrigger value="tab3" variant="cards">Tab 3</TabsTrigger>
                      </TabsList>
                      <TabsContent value="tab1">Content for Tab 1</TabsContent>
                      <TabsContent value="tab2">Content for Tab 2</TabsContent>
                      <TabsContent value="tab3">Content for Tab 3</TabsContent>
                    </Tabs>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Breadcrumbs</CardTitle>
                  <CardDescription>Breadcrumb navigation components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Default Breadcrumbs</h3>
                    <Breadcrumb>
                      <BreadcrumbItem href="/">
                        <Home className="h-4 w-4" />
                        Home
                      </BreadcrumbItem>
                      <BreadcrumbItem href="/components">Components</BreadcrumbItem>
                      <BreadcrumbItem isCurrent>Breadcrumbs</BreadcrumbItem>
                    </Breadcrumb>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">With Ellipsis</h3>
                    <Breadcrumb>
                      <BreadcrumbItem href="/">Home</BreadcrumbItem>
                      <BreadcrumbEllipsis />
                      <BreadcrumbItem href="/components">Components</BreadcrumbItem>
                      <BreadcrumbItem isCurrent>Breadcrumbs</BreadcrumbItem>
                    </Breadcrumb>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Pills Variant</h3>
                    <Breadcrumb>
                      <BreadcrumbItem href="/">Home</BreadcrumbItem>
                      <BreadcrumbItem href="/components">Components</BreadcrumbItem>
                      <BreadcrumbItem isCurrent>Breadcrumbs</BreadcrumbItem>
                    </Breadcrumb>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pagination</CardTitle>
                  <CardDescription>Pagination components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Default Pagination</h3>
                    <Pagination>
                      <PaginationPrevious />
                      <PaginationItem isActive>1</PaginationItem>
                      <PaginationItem>2</PaginationItem>
                      <PaginationItem>3</PaginationItem>
                      <PaginationEllipsis />
                      <PaginationItem>10</PaginationItem>
                      <PaginationNext />
                    </Pagination>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Rounded Pagination</h3>
                    <Pagination variant="rounded">
                      <PaginationPrevious variant="rounded" />
                      <PaginationItem variant="rounded" isActive>1</PaginationItem>
                      <PaginationItem variant="rounded">2</PaginationItem>
                      <PaginationItem variant="rounded">3</PaginationItem>
                      <PaginationEllipsis />
                      <PaginationItem variant="rounded">10</PaginationItem>
                      <PaginationNext variant="rounded" />
                    </Pagination>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Outline Pagination</h3>
                    <Pagination variant="outline">
                      <PaginationPrevious variant="outline" />
                      <PaginationItem variant="outline" isActive>1</PaginationItem>
                      <PaginationItem variant="outline">2</PaginationItem>
                      <PaginationItem variant="outline">3</PaginationItem>
                      <PaginationEllipsis />
                      <PaginationItem variant="outline">10</PaginationItem>
                      <PaginationNext variant="outline" />
                    </Pagination>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Alerts</CardTitle>
                  <CardDescription>Alert components for different states</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertTitle>Default Alert</AlertTitle>
                    <AlertDescription>This is a default alert component.</AlertDescription>
                  </Alert>

                  <Alert variant="success">
                    <AlertTitle>Success Alert</AlertTitle>
                    <AlertDescription>Your action was completed successfully.</AlertDescription>
                  </Alert>

                  <Alert variant="info">
                    <AlertTitle>Info Alert</AlertTitle>
                    <AlertDescription>Here&apos;s some information you should know.</AlertDescription>
                  </Alert>

                  <Alert variant="warning">
                    <AlertTitle>Warning Alert</AlertTitle>
                    <AlertDescription>Be careful with this action.</AlertDescription>
                  </Alert>

                  <Alert variant="error">
                    <AlertTitle>Error Alert</AlertTitle>
                    <AlertDescription>There was an error processing your request.</AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress</CardTitle>
                  <CardDescription>Progress indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Default Progress</h3>
                    <Progress value={progress} className="mb-2" />
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => setProgress(p => Math.max(0, p - 10))}
                      >
                        Decrease
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={() => setProgress(p => Math.min(100, p + 10))}
                      >
                        Increase
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Progress Variants</h3>
                    <div className="space-y-4">
                      <Progress value={75} variant="default" />
                      <Progress value={75} variant="gradient" />
                      <Progress value={75} variant="success" />
                      <Progress value={75} variant="info" />
                      <Progress value={75} variant="warning" />
                      <Progress value={75} variant="error" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Progress Sizes</h3>
                    <div className="space-y-4">
                      <Progress value={75} size="sm" />
                      <Progress value={75} size="default" />
                      <Progress value={75} size="lg" />
                      <Progress value={75} size="xl" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Indeterminate Progress</h3>
                    <Progress indeterminate />
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Progress with Value</h3>
                    <Progress value={75} showValue />
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Animated Progress</h3>
                    <AnimatedProgress value={75} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Toast</CardTitle>
                  <CardDescription>Toast notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={showToast}>Show Toast</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Modals Tab */}
          <TabsContent value="modals">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Dialog</CardTitle>
                  <CardDescription>Dialog components for modal interactions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                      <DialogTrigger asChild>
                        <Button>Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Dialog Title</DialogTitle>
                          <DialogDescription>
                            This is a dialog component for modal interactions.
                          </DialogDescription>
                        </DialogHeader>
                        <p className="py-4">Dialog content goes here.</p>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={() => setDialogOpen(false)}>
                            Continue
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Wide Dialog</Button>
                      </DialogTrigger>
                      <DialogContent variant="wide">
                        <DialogHeader>
                          <DialogTitle>Wide Dialog</DialogTitle>
                          <DialogDescription>
                            This is a wider dialog component.
                          </DialogDescription>
                        </DialogHeader>
                        <p className="py-4">Dialog content goes here.</p>
                        <DialogFooter>
                          <Button variant="outline">Cancel</Button>
                          <Button>Continue</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary">Sheet Dialog</Button>
                      </DialogTrigger>
                      <DialogContent variant="sheet">
                        <DialogHeader>
                          <DialogTitle>Sheet Dialog</DialogTitle>
                          <DialogDescription>
                            This is a sheet-style dialog component.
                          </DialogDescription>
                        </DialogHeader>
                        <p className="py-4">Dialog content goes here.</p>
                        <DialogFooter>
                          <Button variant="outline">Cancel</Button>
                          <Button>Continue</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Drawer</CardTitle>
                  <CardDescription>Drawer components for side panels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <Button onClick={() => setDrawerOpen(true)}>
                      Open Drawer
                    </Button>

                    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                      <DrawerContent side="right" onClose={() => setDrawerOpen(false)}>
                        <DrawerHeader>
                          <DrawerTitle>Drawer Title</DrawerTitle>
                          <DrawerDescription>
                            This is a drawer component for side panels.
                          </DrawerDescription>
                        </DrawerHeader>
                        <DrawerBody>
                          <p>Drawer content goes here.</p>
                        </DrawerBody>
                        <DrawerFooter>
                          <Button variant="outline" onClick={() => setDrawerOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={() => setDrawerOpen(false)}>
                            Save
                          </Button>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Data Display Tab */}
          <TabsContent value="data">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Table</CardTitle>
                  <CardDescription>Table components for displaying data</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table variant="default" rounded>
                    <TableCaption>A list of users</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow isSelected>
                        <TableCell>John Doe</TableCell>
                        <TableCell>john@example.com</TableCell>
                        <TableCell>Admin</TableCell>
                        <TableCell>Active</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell>jane@example.com</TableCell>
                        <TableCell>User</TableCell>
                        <TableCell>Active</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Bob Johnson</TableCell>
                        <TableCell>bob@example.com</TableCell>
                        <TableCell>User</TableCell>
                        <TableCell>Inactive</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell>3 users</TableCell>
                      </TableRow>
                    </TableFooter>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>List</CardTitle>
                  <CardDescription>List components for displaying items</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Default List</h3>
                    <List>
                      <ListItem>
                        <ListItemContainer>
                          <ListItemIcon>
                            <User className="h-5 w-5" />
                          </ListItemIcon>
                          <ListItemContent>
                            <ListItemTitle>John Doe</ListItemTitle>
                            <ListItemDescription>john@example.com</ListItemDescription>
                          </ListItemContent>
                          <ListItemAction>
                            <Button variant="ghost" size="sm">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </ListItemAction>
                        </ListItemContainer>
                      </ListItem>
                      <ListItem active>
                        <ListItemContainer>
                          <ListItemIcon>
                            <User className="h-5 w-5" />
                          </ListItemIcon>
                          <ListItemContent>
                            <ListItemTitle>Jane Smith</ListItemTitle>
                            <ListItemDescription>jane@example.com</ListItemDescription>
                          </ListItemContent>
                          <ListItemAction>
                            <Button variant="ghost" size="sm">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </ListItemAction>
                        </ListItemContainer>
                      </ListItem>
                      <ListItem>
                        <ListItemContainer>
                          <ListItemIcon>
                            <User className="h-5 w-5" />
                          </ListItemIcon>
                          <ListItemContent>
                            <ListItemTitle>Bob Johnson</ListItemTitle>
                            <ListItemDescription>bob@example.com</ListItemDescription>
                          </ListItemContent>
                          <ListItemAction>
                            <Button variant="ghost" size="sm">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </ListItemAction>
                        </ListItemContainer>
                      </ListItem>
                    </List>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Separated List</h3>
                    <List variant="separated">
                      <ListItem variant="separated">
                        <ListItemContainer>
                          <ListItemIcon>
                            <User className="h-5 w-5" />
                          </ListItemIcon>
                          <ListItemContent>
                            <ListItemTitle>John Doe</ListItemTitle>
                            <ListItemDescription>john@example.com</ListItemDescription>
                          </ListItemContent>
                        </ListItemContainer>
                      </ListItem>
                      <ListItem variant="separated">
                        <ListItemContainer>
                          <ListItemIcon>
                            <User className="h-5 w-5" />
                          </ListItemIcon>
                          <ListItemContent>
                            <ListItemTitle>Jane Smith</ListItemTitle>
                            <ListItemDescription>jane@example.com</ListItemDescription>
                          </ListItemContent>
                        </ListItemContainer>
                      </ListItem>
                      <ListItem variant="separated">
                        <ListItemContainer>
                          <ListItemIcon>
                            <User className="h-5 w-5" />
                          </ListItemIcon>
                          <ListItemContent>
                            <ListItemTitle>Bob Johnson</ListItemTitle>
                            <ListItemDescription>bob@example.com</ListItemDescription>
                          </ListItemContent>
                        </ListItemContainer>
                      </ListItem>
                    </List>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Cards List</h3>
                    <List variant="cards">
                      <ListItem variant="cards">
                        <ListItemContainer>
                          <ListItemIcon>
                            <User className="h-5 w-5" />
                          </ListItemIcon>
                          <ListItemContent>
                            <ListItemTitle>John Doe</ListItemTitle>
                            <ListItemDescription>john@example.com</ListItemDescription>
                          </ListItemContent>
                        </ListItemContainer>
                      </ListItem>
                      <ListItem variant="cards">
                        <ListItemContainer>
                          <ListItemIcon>
                            <User className="h-5 w-5" />
                          </ListItemIcon>
                          <ListItemContent>
                            <ListItemTitle>Jane Smith</ListItemTitle>
                            <ListItemDescription>jane@example.com</ListItemDescription>
                          </ListItemContent>
                        </ListItemContainer>
                      </ListItem>
                      <ListItem variant="cards">
                        <ListItemContainer>
                          <ListItemIcon>
                            <User className="h-5 w-5" />
                          </ListItemIcon>
                          <ListItemContent>
                            <ListItemTitle>Bob Johnson</ListItemTitle>
                            <ListItemDescription>bob@example.com</ListItemDescription>
                          </ListItemContent>
                        </ListItemContainer>
                      </ListItem>
                    </List>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Timeline</CardTitle>
                  <CardDescription>Timeline components for displaying events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Default Timeline</h3>
                    <Timeline>
                      <TimelineItem>
                        <TimelineDot />
                        <TimelineItemContainer>
                          <TimelineTitle>Account Created</TimelineTitle>
                          <TimelineDescription>Your account was created successfully.</TimelineDescription>
                          <TimelineTime>January 1, 2023</TimelineTime>
                        </TimelineItemContainer>
                      </TimelineItem>
                      <TimelineItem active>
                        <TimelineDot className="bg-primary border-primary" />
                        <TimelineItemContainer>
                          <TimelineTitle>Profile Updated</TimelineTitle>
                          <TimelineDescription>You updated your profile information.</TimelineDescription>
                          <TimelineTime>February 15, 2023</TimelineTime>
                        </TimelineItemContainer>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineDot />
                        <TimelineItemContainer>
                          <TimelineTitle>Subscription Renewed</TimelineTitle>
                          <TimelineDescription>Your subscription was renewed automatically.</TimelineDescription>
                          <TimelineTime>March 30, 2023</TimelineTime>
                        </TimelineItemContainer>
                      </TimelineItem>
                    </Timeline>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Centered Timeline</h3>
                    <Timeline variant="centered">
                      <TimelineItem variant="centered" position="left">
                        <TimelineContent>
                          <TimelineTitle>Account Created</TimelineTitle>
                          <TimelineDescription>Your account was created successfully.</TimelineDescription>
                          <TimelineTime>January 1, 2023</TimelineTime>
                        </TimelineContent>
                        <TimelineCenteredDot />
                        <TimelineContent />
                      </TimelineItem>
                      <TimelineItem variant="centered" position="right">
                        <TimelineContent />
                        <TimelineCenteredDot className="bg-primary border-primary" />
                        <TimelineContent>
                          <TimelineTitle>Profile Updated</TimelineTitle>
                          <TimelineDescription>You updated your profile information.</TimelineDescription>
                          <TimelineTime>February 15, 2023</TimelineTime>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem variant="centered" position="left">
                        <TimelineContent>
                          <TimelineTitle>Subscription Renewed</TimelineTitle>
                          <TimelineDescription>Your subscription was renewed automatically.</TimelineDescription>
                          <TimelineTime>March 30, 2023</TimelineTime>
                        </TimelineContent>
                        <TimelineCenteredDot />
                        <TimelineContent />
                      </TimelineItem>
                    </Timeline>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Forms Tab */}
          <TabsContent value="forms">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Input Components</CardTitle>
                  <CardDescription>Text input components for user input</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Standard Input</h3>
                    <div className="space-y-4 max-w-md">
                      <Input placeholder="Default input" />
                      <Input placeholder="With icon" icon={<Mail className="h-4 w-4" />} />
                      <Input placeholder="With error" error="This field is required" />
                      <Input placeholder="Minimal style" variant="minimal" />
                      <Input placeholder="Search input" variant="search" icon={<Search className="h-4 w-4" />} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Floating Label Input</h3>
                    <div className="space-y-4 max-w-md">
                      <FloatingLabelInput 
                        id="floating-input-1" 
                        label="Email" 
                      />
                      <FloatingLabelInput 
                        id="floating-input-2" 
                        label="Password" 
                        type="password" 
                      />
                      <FloatingLabelInput 
                        id="floating-input-3" 
                        label="Username" 
                        error="Username is already taken" 
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Selection Components</CardTitle>
                  <CardDescription>Components for selecting options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Checkbox</h3>
                    <div className="space-y-4 max-w-md">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Accept terms and conditions
                        </label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="newsletter" variant="card" />
                        <label
                          htmlFor="newsletter"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Subscribe to newsletter
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Checkbox Group</h3>
                    <div className="max-w-md">
                      <CheckboxGroup
                          label="Select your interests"
                          options={[
                            {id: "design", label: "Design", value: "design"},
                            {id: "development", label: "Development", value: "development"},
                            {id: "marketing", label: "Marketing", value: "marketing"},
                          ]}
                          orientation="vertical" 
                          value={[]} 
                          onChange={() => {
                            // Handle checkbox group change
                          }}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Radio Group</h3>
                    <div className="max-w-md">
                      <RadioGroup defaultValue="default">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="default" id="r1" />
                          <label htmlFor="r1">Default</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="comfortable" id="r2" />
                          <label htmlFor="r2">Comfortable</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="compact" id="r3" />
                          <label htmlFor="r3">Compact</label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Form Radio Group</h3>
                    <div className="max-w-md">
                      <FormRadioGroup
                        label="Select a plan"
                        options={[
                          { id: "free", value: "free", label: "Free" },
                          { id: "pro", value: "pro", label: "Pro" },
                          { id: "enterprise", value: "enterprise", label: "Enterprise" },
                        ]}
                        orientation="vertical"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dropdown Components</CardTitle>
                  <CardDescription>Components for dropdown selection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Select</h3>
                    <div className="max-w-md">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="orange">Orange</SelectItem>
                          <SelectItem value="grape">Grape</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Form Select</h3>
                    <div className="max-w-md">
                      <FormSelect
                          label="Country"
                          placeholder="Select your country"
                          options={[
                            {value: "us", label: "United States"},
                            {value: "ca", label: "Canada"},
                            {value: "uk", label: "United Kingdom"},
                            {value: "au", label: "Australia"},
                          ]} id={""}                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            Creator-First Design System - QR Direct Platform
          </p>
        </div>
      </footer>

      {/* Toast container */}
      <Toaster />
    </FloatingBackground>
  )
}
