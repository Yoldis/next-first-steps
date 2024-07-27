"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC } from "react"


interface Props {
    path:string,
    text:string
}

export const ActiveLink:FC<Props> = ({path, text}) => {

    const pathName = usePathname();
    
  return (
    <Link className={
        `mr-2 ${pathName === path && 'text-blue-500'} hover:underline transition-all` 
    } href={path}>{text}</Link>
  )
}
