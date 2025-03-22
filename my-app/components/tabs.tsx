"use client"

import * as React from "react"

// Create the utility function
const cn = (...inputs: any[]) => {
  return inputs.filter(Boolean).join(" ")
}

// Define the context once at the top level
const TabsContext = React.createContext<{
  activeTab: string | undefined
  setActiveTab: React.Dispatch<React.SetStateAction<string | undefined>>
}>({
  activeTab: undefined,
  setActiveTab: () => {},
})

// Define the Tabs component
const Tabs = ({
  defaultValue,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  defaultValue?: string
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

// Define the TabsList component
const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500",
        className
      )}
      {...props}
    />
  )
})
TabsList.displayName = "TabsList"

// Define the TabsTrigger component
const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    value: string
  }
>(({ className, value, ...props }, ref) => {
  // Use the shared context
  const { activeTab, setActiveTab } = React.useContext(TabsContext)
  
  const isActive = activeTab === value

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        isActive
          ? "bg-white text-gray-900 shadow-sm"
          : "text-gray-500 hover:text-gray-900",
        className
      )}
      onClick={() => setActiveTab(value)}
      {...props}
    />
  )
})
TabsTrigger.displayName = "TabsTrigger"

// Define the TabsContent component
const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: string
  }
>(({ className, value, ...props }, ref) => {
  // Use the shared context
  const { activeTab } = React.useContext(TabsContext)
  
  const isActive = activeTab === value

  if (!isActive) return null

  return (
    <div
      ref={ref}
      className={cn("mt-2 ring-offset-white focus-visible:outline-none", className)}
      {...props}
    />
  )
})
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }