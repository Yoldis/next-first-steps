import Link from "next/link"
import { ActiveLink } from "../activeLink/ActiveLink"


const navItems = [
    {path:'/about', text:'About'},
    {path:'/pricing', text:'Pricing'},
    {path:'/contact', text:'Contact'},
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 rounded p-2 m-2">

        
        <Link href={'/'}>Home</Link>

        <div className="flex flex-1"></div>

        {
            navItems.map(item => (
                <ActiveLink key={item.path} {...item}/>
            ))
        }
    </nav>
  )
}
