"use client"

import { Sidebar } from "@/components/layouts/sidebar"
import { ModeToggle } from "@/components/mode-toggle"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b flex items-center justify-end px-4">
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>
  )
} 