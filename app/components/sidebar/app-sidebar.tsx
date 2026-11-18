import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Circle, CircleUser, FileText, GraduationCap, House, Landmark, List, MenuIcon, NotebookTabs, UserRound } from "lucide-react"
import { Graduate } from "next/font/google"

const listMenu = [
  { 
    "name" : "Dashboard",
    "url" : "/admin",
    "icon" : House
  },  
  { 
    "name" : "User Management",
    "url" : "/admin/user-management",
    "icon" : UserRound
  },  
  { 
    "name" : "Category",
    "url" : "/admin/category",
    "icon" : List
  } , 
  { 
    "name" : "Jurusan",
    "url" : "/admin/jurusan",
    "icon" : NotebookTabs
  } , 
  { 
    "name" : "Article",
    "url" : "/admin/article",
    "icon" : FileText
  } ,
  { 
    "name" : "Profile",
    "url" : "/admin/profile",
    "icon" : CircleUser
  } , 
  
  
]

export function AppSidebar() {
  return (
    <Sidebar>

      <SidebarHeader>
        <SidebarMenu>

          <SidebarMenuItem>
           
          </SidebarMenuItem>

        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent >
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
            {listMenu.map((menu) => (
              <SidebarMenuItem key={menu.name}>
                <SidebarMenuButton asChild>
                  <a href={menu.url}>
                    <menu.icon/>
                    <span>{menu.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          </SidebarGroupContent>

        </SidebarGroup>
      </SidebarContent> 
      <SidebarFooter/>
    </Sidebar>
  )
}