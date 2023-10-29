import "~/styles/globals.css";

import ClientProvider from "./_components/ClientProvider";
import Header from "./_components/Header";
import { Inter } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "LaunchTrade",
  description: "Specialty tools for traders",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      <html lang="en">
        <body
          className={`font-sans ${inter.variable} flex min-h-screen flex-col overflow-hidden`}
        >
          <TRPCReactProvider headers={headers()}>
            <Header />
            {children}
          </TRPCReactProvider>
        </body>
      </html>
    </ClientProvider>
  );
}
