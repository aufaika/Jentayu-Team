import "./globals.css";
import Navbar from "./navbar";

export const metadata = {
  title: "Jentayu Team",
  description: "UAV Research Team Diponegoro University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
