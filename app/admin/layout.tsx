'use client'
import { AppSidebar } from "@/app/components/sidebar/app-sidebar"
import { useRouter } from "next/navigation"
import { LogoutMenuItem } from "@/app/admin/lagout-menu-item"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  async function handleLogout() {
    try {
  const response = await fetch("/api/logout", {
    method: "POST",
  })

  if (!response.ok) {
    throw new Error("Logout gagal")
  }

  router.replace("/login")
  router.refresh()
} catch (error) {
  console.error("Logout error:", error)
  alert("Gagal logout. Silakan coba lagi.")
}
  }
  return (
    <SidebarProvider>

      <AppSidebar />
      <SidebarInset>
        <header className="flex items-center justify-between p-4">
          <SidebarTrigger />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <LogoutMenuItem/>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}