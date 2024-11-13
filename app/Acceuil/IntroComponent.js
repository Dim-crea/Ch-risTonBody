import react from "react";

export default function IntroComponent (){
    return(
        <div>
            <div className="flex flex-col text-center mt-10">
                <p className="text-lg">Dimanche 1er décembre</p>
                <p className="text-lg">de 10h à 14h45</p>
                <p className="text-lg">à l'Eden Lounge</p>
                <h1 className="text-4xl my-4 text-accentuationColor">Sporty Brunch</h1>
            </div>
            <div className="mt-6 mx-10 text-center">
                <p>
                    Besoin de <span className="font-semibold">décompresser</span>, de prendre <span className="font-semibold">soin de toi</span> et de <span className="font-semibold">rencontrer de nouvelles personnes</span> dans une ambiance détendue ? Rejoins-nous le dimanche 1er décembre pour une matinée qui allie énergie, plaisir et relaxation dans un cadre accueillant !
                </p>
            </div>
        </div>
    )
}