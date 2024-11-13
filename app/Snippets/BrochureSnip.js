import React from "react";
import { Download } from "lucide-react";

export default function BrochureSnip(){

    return(
        <a href="@/app/Assets/FlyerSportyBrunchA4.png" download>
        <div className=" text-center py-2 my-4 mx-4 bg-fondCard bg-opacity-70 rounded-xl flex justify-between">
            <p className="text-xl ml-10 text-accentuationColor">Télécharger la brochure</p>
            <Download className="mr-4"/>
        </div>
        </a>
    )
}

