import { NavLink } from "@remix-run/react";
import { Menu, X } from "react-feather";

import { useState } from "react";

import { AnimatePresence } from "motion/react";
import { navlist } from "~/lib/navlist";
import DropDownMenu from "./DropDownMenu";

const MainNav = () => {
    const [openMenu, setOpenMenu]= useState(false);
    function handleMenuOpen() {
        setOpenMenu(open=>!open)
    }
  return (
    <header className="fixed top-0 left-0 right-0 bottom-auto z-10">
        <nav className="container flex items-center justify-between gap-10 mx-auto px-5 py-5 md:py-10 md:px-10 lg:px-12">
            {/* logo */}
            <h2>Logo</h2>
            {/* navitem */}
            <ul className="hidden md:inline-flex gap-6 ">
                {
                    navlist.map((navitem, i)=>(
                        <li key={i}>
                            <NavLink to={navitem.path} >{navitem.nav_item}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <button className="rounded-full p-2 md:hidden" onClick={handleMenuOpen}>
                {
                    openMenu?
                    <X/>:
                <Menu/>}
            </button>
            <AnimatePresence>
            {

                openMenu&&(
                    <DropDownMenu handleClose={handleMenuOpen} navitems={navlist}/>
                )
            }
            </AnimatePresence>
        </nav>
    </header>
  )
}

export default MainNav