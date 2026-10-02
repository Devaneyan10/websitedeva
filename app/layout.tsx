import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Devaneyan Muniandy | AI / Machine Learning Engineer",
  description: "Portfolio of Devaneyan Muniandy — AI / Machine Learning Engineer focused on GenAI, Agentic AI, AI automation and full-stack solutions."
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
