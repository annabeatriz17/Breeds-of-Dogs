import "./globals.css";

export const metadata = {
  title: "Breeds of Dog",
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