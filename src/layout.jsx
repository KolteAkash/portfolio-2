import "./globals.css";
import { Inter } from "next/font/google";
import ChatBot from "../components/ChatBot";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akash Kolte - Software Developer Portfolio",
  description:
    "Portfolio website of Akash Kolte, a passionate software developer specializing in Java, Spring Boot, and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
    