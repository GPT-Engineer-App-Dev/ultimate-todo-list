import { Outlet } from "react-router-dom";
import { navItems } from "../App";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <nav className="flex space-x-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {item.icon}
              <span className="ml-2">{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;