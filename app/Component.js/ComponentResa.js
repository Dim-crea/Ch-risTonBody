import React from "react";
import { ChevronRight, Link } from "lucide-react";


export default function BoutonRésa({children, props}){
    
    return(
        <div className="bg-white my-3 py-2 rounded-xl">
            <a href={props} className="w-full flex justify-evenly">
            <div className="w-full flex justify-between">
                {children}
            </div>
            <ChevronRight/>
            </a>
        </div>
        
    )
}