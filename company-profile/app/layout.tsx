import "./globals.css";

import { Montserrat } from "next/font/google";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
