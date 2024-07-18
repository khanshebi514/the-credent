import { Poppins } from "next/font/google";
import "./globals.css";
import "../../public/css/user.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const poppins = Poppins(
  { 
    subsets: ["latin"],
    weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'] 
  }
);

export const metadata = {
  title: "The Credentialing",
  description: "Credentialing is an international app for MedsNexus Emplyes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} >
        <Navigation/>
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
