import React from "react";
import "./globals.css";

export const metadata = {
  title: "Latido & Lambida",
  icons: {
    icon:"/icon/favicon.ico"
  },
  description: "Descubra diversas raças de cachorro e suas características.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}