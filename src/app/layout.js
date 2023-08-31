
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/provider/AuthProvider";
import Toaster from "@/components/Shared/ToasterComponent/ToasterComponent";

import '../styles/aos.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JobLinker",
  description: "Generated by Team Chameleons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
           <AuthProvider>
              
              <div className="container mx-auto">{children}</div>
              
            </AuthProvider> 
        <Toaster />
      </body>
    </html>
  );
}
