import { NavLink } from "react-router-dom"
import { pages } from '../../pages/pages'

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      {pages.map(page => (
        <NavLink 
        key={page.id} 
        to={`/${page.id}`}
        className={({isActive}) => `sidebar-link ${isActive && 'bg-yellow-400 text-white hover:text-white'}`}
        >
          <i className={`fa-solid fa-${page.icon}`}></i>
          <h3>{page.title}</h3>
        </NavLink>
      ))}
    </aside>
  )
}
