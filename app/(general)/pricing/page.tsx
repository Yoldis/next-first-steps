import { type Metadata } from "next";

export const metadata:Metadata = {
    title:"Princing Page",
    description:"Princing Descripcion"
}


export default function PrincingPage (){
    return (
        <div className="text-5xl">Princing Page</div>
    )
}