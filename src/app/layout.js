import "./globals.css";
import { Inter, Syne } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const metadata = {
  title: "Espacio TEC",
  description: "Museo de Informática",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
