import { Figtree } from "next/font/google";
import "./globals.css";
import { PageLayout } from "./components/layout/PageLayout";
import Link from "next/link";
import { Header } from "./components/navigation/Header";
import { Footer } from "./components/navigation/Footer";

const inter = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Sabines test next.js side",
  description: "Sabines test next.js side",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <PageLayout>
          {children}
        </PageLayout>
        <Footer />
      </body>
    </html>
  );
}
