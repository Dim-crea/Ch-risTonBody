import IntroComponent from "./Acceuil/IntroComponent"
import ProgramComponent from "./Acceuil/ProgramComponent"
import ReservComponent from "./Acceuil/ReservComponent"
import BrochureSnip from "./Snippets/BrochureSnip";

export default function Home() {
  return (
    <div>
      <IntroComponent />
      <ProgramComponent />
      <ReservComponent />
      {/* <BrochureSnip /> */}
      <div className="flex flex-col text-center my-10 ">
        <a>Mentions légales</a>
        <a>Politique de cookies</a>
        <a>Politique de confidentialités</a>
      </div>
    </div>
  );
}
