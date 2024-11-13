import react from "react";
import BoutonRésa from "../Component.js/ComponentResa";

const ResaCoursBrunch = [
    {
        id: 1,
        offre:"Zumba + Brunch + Yoga",
        prix:"36€",
        link:"https://square.link/u/4iJYhJUm",
    },
    {
        id: 2,
        offre:"Zumba + Brunch",
        prix:"32€",
        link:"https://square.link/u/JpQxyPLK",
    },
    {
        id: 3,
        offre:"Brunch + Yoga",
        prix:"32€",
        link:"https://square.link/u/asuKspEi",
    },
    
]

const ResaCours = [
    {
        id: 1,
        offre:"Cours de Zumba",
        prix:"7€",
        link:"https://square.link/u/VZgwJJuN",
    },
    {
        id: 2,
        offre:"Cours de Yoga",
        prix:"7€",
        link:"https://square.link/u/Co8NB0bY",
    },
    {
        id: 3,
        offre:"Zumba + Yoga",
        prix:"11€",
        link:"https://square.link/u/C736DPsM",
    },
]

export default function IntroComponent (){

    return(
        <div className="rounded-3xl bg-fondCard bg-opacity-70 px-4 mx-4 py-4">
           <h2 className="text-center pb-4 font-bold">Réservation</h2>
            {ResaCoursBrunch.map((res, index) => (
                <BoutonRésa key={index} props={res.link}>
                    <h3 className="ml-4">{res.offre}</h3>
                    <p className="mr-4">{res.prix}</p>
                </BoutonRésa>
            ))}

            <p><span className="font-bold ml-5">ou</span> sans le brunch</p>

            {ResaCours.map((res, index) => (
                <BoutonRésa key={index} props={res.link}>
                    <h3 className="ml-4">{res.offre}</h3>
                    <p className="mr-4">{res.prix}</p>
                </BoutonRésa>
            ))}
        </div>
    )
}