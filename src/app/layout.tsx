import { ReactNode } from "react";
import "./globals.scss";

export const metadata = {
  title: "FUERST.ONE",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark overflow-x-hidden bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
