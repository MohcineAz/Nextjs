import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import CustomLink from "./CustomLink";
export default function MenuBar() {
    return <NavigationMenu>
    <NavigationMenuList>
        <CustomLink href="/login">            
            Login
        </CustomLink>
        <CustomLink href="/logout">
            Logout
        </CustomLink>
        <CustomLink href="/register">
            Register
        </CustomLink>
    </NavigationMenuList>
  </NavigationMenu>;
}
