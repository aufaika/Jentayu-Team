import "./globals.css";

import { Montserrat } from "next/font/google";

import Navbar from "./navbar";
import ContactUsFooter from "../components/ContactUsFooter";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="pt-16">{children}</div>
      <ContactUsFooter />
    </div>
  );
}
