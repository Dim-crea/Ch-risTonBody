import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Montserrat = localFont({
  src: 'fonts/Montserrat-VariableFont_wght.ttf',
  display: 'swap'
})

const Kaushan = localFont({
  src: 'fonts/KaushanScript-Regular.ttf',
  display: 'swap',
})

export const metadata = {
  title: "Chéris ton Body",
  description: "Bienvenue sur le site de Mélanie votre coach de cours collectifs. Vous retrouverez ici les différents évènement qui seront mis en place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
