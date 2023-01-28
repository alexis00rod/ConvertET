import { useEffect } from "react"
import { Link } from "react-router-dom"
import { pages } from '../pages.js'

export const Home = () => {
  useEffect(() => {
    document.title = 'ConvertET'
  },[])

  return (
    <div className="w-full h-max grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pages.map(page => (
        <Link key={page.id} to={`/${page.id}`} 
          className='w-full h-40 px-2 py-2 flex flex-col items-center justify-center flex-none text-center bg-yellow-300 text-lg text-white font-black duration-300
          hover:bg-yellow-500'>
          <i className={`text-4xl fa-solid fa-${page.icon}`}></i>
          {page.title}
        </Link>
      ))}
    </div>
  )
}
