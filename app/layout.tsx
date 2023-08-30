import Footer from "./components/Footer";
import "./globals.css";

import { Russo_One } from "next/font/google";

export const metadata = {
  title: "Xron Trix",
  description: "Portfolio of Xron Trix",
};

const inter = Russo_One({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
