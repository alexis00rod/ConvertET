import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../";

export const Layout = () => {
  const {pathname} = useLocation()

  return (
    <div className="layout">
      <main>
        {pathname !== '/' && window.innerWidth > 769 && <Sidebar />}
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  )
}
