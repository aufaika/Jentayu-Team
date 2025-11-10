import "./globals.css";

import { Montserrat } from "next/font/google";

import Navbar from "./navbar";
import ContactUsFooter from "./components/ContactUsFooter";

export const metadata = {
  title: "Jentayu Team",
  description: "UAV Research Team Diponegoro University",
};

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <ContactUsFooter />
      </body>
    </html>
  );
}
