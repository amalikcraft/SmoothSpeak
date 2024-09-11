import type { Metadata } from "next";
import { IBM_Plex_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/home/header";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster";
import { ORIGIN_URL } from "@/lib/constants";

const fontSans = FontSans({ 
    subsets: ["latin"], 
    weight: ["300", "400", "500", "700"],
    variable: "--font-sans",
   
});

export const metadata: Metadata = {
  title: "SmoothSpeak",
  description: "Convert your video into a Blog Post in seconds wit the power of AI!",
  metadataBase: new URL(ORIGIN_URL),
  alternates: {
    canonical: ORIGIN_URL,
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body 
        className={cn(
          
        "min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r font-sans antialiased",
        fontSans.variable
        )}
        >
          <Header></Header>
         
          <main>{children}</main>
          <Toaster/>
        </body>
    </html>
    </ClerkProvider>
     
      
     
    
  );
}
