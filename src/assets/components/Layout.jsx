import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {

    const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-green-600 px-5 py-10">
        <h2 className="text-4xl font-black text-white text-center">
          MENU
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              location.pathname === "/" ? "text-teal-900" : "text-white"
            } text-2xl block mt-4 hover:text-teal-800 text-white text-center`}
            to="/"
          >
            Inicio
          </Link>
          <Link
            className={`${
              location.pathname === "/blog" ? "text-teal-900" : "text-white"
            } text-2xl block mt-4 hover:text-teal-800 text-white text-center`}
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className={`${
              location.pathname === "/informacion" ? "text-teal-900" : "text-white"
            } text-2xl block mt-4 hover:text-teal-800 text-white text-center`}
            to="/informacion"
          >
            Info
          </Link>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 text-center md:h-screen overflow-scroll">
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}

export default Layout