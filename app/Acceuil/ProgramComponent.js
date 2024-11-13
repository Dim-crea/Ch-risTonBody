import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image";
import Zumba from "@/app/Assets/RAW02463 1.png"
import Yoga from "@/app/Assets/Yoga.png"
import Brunch from "@/app/Assets/Brunch.png"
import EmojiDanse from "@/app/Assets/danse.png"
import EmojiBrunch from "@/app/Assets/EmojiBrunch.png"
import EmojiYoga from "@/app/Assets/EmojiYoga.png"
import { TriangleAlert } from "lucide-react";

export default function ProgramComponent() {
    return (
        <div className="mx-4 mt-6 mb-10 ">
            <p className="text-center">Un programme qui rassemble :</p>
            <Carousel className="mt-4 ">
                <CarouselContent>
                    <CarouselItem>
                        <div className="rounded-3xl bg-fondCard bg-opacity-60 p-4 flex flex-col">
                            <h2 className="font-semibold text-center py-2 flex justify-center">Zumba pour se défouler <Image src={EmojiDanse}/></h2>
                            <Image 
                            src={Zumba}
                            className="place-self-center"
                            />
                            <p className="text-center my-4">
                            On démarre avec une session de zumba pour bien se réveiller et faire le plein de bonne humeur ! Peu importe ton niveau on est là pour bouger : 
                            <br></br>l’important c’est de s’amuser et de partager ce moment ensemble.
                            </p>
                            <p className="text-center my-2">de <span className="font-semibold">10h</span> à <span className="font-semibold">10h45</span></p>
                            <div className="flex justify-center">
                            <TriangleAlert className="mx-2 text-accentuationColor"/><p className="pt-1 text-accentuationColor">Baskets obligatoire</p>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        <div className="rounded-3xl  bg-fondCard bg-opacity-60 px-6 flex flex-col">
                            <h2 className="font-semibold text-center py-2 flex justify-center">Brunch pour se régaler <Image src={EmojiBrunch}/></h2>
                            <Image 
                            src={Brunch}
                            className="place-self-center"
                            />
                            <p className="text-center my-4 mb-6">
                                Recharge tes batteries avec notre brunch, placé entre les cours de Zumba et de Yoga ! Profite d’une pause gourmande et équilibrée pour savourer des plats délicieux, partager un moment convivial et préparer ton corps à une journée de détente totale. Un dimanche sous le signe du plaisir et de la vitalité!
                            </p>
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        <div className="rounded-3xl bg-fondCard bg-opacity-60 p-4 flex flex-col">
                            <h2 className="font-semibold text-center py-2 flex justify-center">Yoga pour se ressourcer <Image src={EmojiYoga}/></h2>
                            <Image 
                            src={Yoga}
                            className="place-self-center"
                            />
                            <p className="text-center my-4">
                                On termine par un moment de reconnexion avec notre cours de yoga ouvert à tous les niveaux ! Que tu sois débutant ou confirmé, profite de postures adaptées afin de relâcher les tensions, gagner en souplesse et retrouver ton énergie. Rejoins-nous pour un instant de calme et de revitalisation !
                            </p>
                            <p className="text-center my-2">de <span className="font-semibold">10h</span> à <span className="font-semibold">10h45</span></p>
                            <div className="flex justify-center">
                            <TriangleAlert className="mx-2 text-accentuationColor"/><p className="pt-1 text-accentuationColor">Tapis obligatoire</p>
                            </div>
                        </div>
                    </CarouselItem>
                    
                </CarouselContent>
            </Carousel>
        </div>
        
    )
}