import Footer from "./components/Footer";
import { StyledContainer } from "./components/ui/ReactToast";
import "react-toastify/dist/ReactToastify.min.css";
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
      <body className="bg-black">
        {children}
        <Footer />
        <StyledContainer
          position="bottom-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
