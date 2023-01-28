import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { pages } from '../../pages/pages'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header>
      <nav className="navbar">
        <Link to='/' className="text-3xl font-black font-monospace">
          <h1>ConvertET</h1>
        </Link>
        {window.innerWidth < 769 &&
        <>
          <button className={`menu-btn ${showMenu && 'menu-btn-active'}`} onClick={() => setShowMenu(!showMenu)}>
            <span></span><span></span><span></span>
          </button>
          <div className={`menu ${showMenu && 'menu-active'}`}>
            {pages.map(page => (
              <NavLink 
                key={page.id}
                to={`/${page.id}`}
                className={({isActive}) => `menu-link ${isActive && "text-yellow-500 font-bold"}`}
                onClick={() => setShowMenu(false)}>
                <i className={`w-8 h-8 flex items-center justify-center flex-none fa-solid fa-${page.icon}`}></i>
                <h3>{page.title}</h3>
              </NavLink>
            ))}
          </div>
        </>}
      </nav>
    </header>
  )
}
