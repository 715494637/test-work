"use client"
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes"
import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}
