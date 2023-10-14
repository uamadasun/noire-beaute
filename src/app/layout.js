import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import {
  Dancing_Script,
  Inter,
  M_PLUS_Rounded_1c,
  Montserrat,
  Noto_Serif,
  Oswald,
  Roboto_Mono,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const noto_serif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Noire Beaute by J",
  description: "Natural hair artist based in the Atlanta, GA metro area",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${noto_serif.variable} ${montserrat.variable}  ${dancingScript.variable}`}
    >
      <body className={inter.className}>
        <NavBar />
        {children}
        <div className="h-10 mb-2"></div>
        <Footer />
      </body>
    </html>
  );
}
