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
      {/* <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head> */}
      <body className={poppins.className} >
        <Navigation/>
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
