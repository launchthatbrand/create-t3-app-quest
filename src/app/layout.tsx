import "~/styles/globals.css";

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
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex min-h-screen`}>
        {/* <Header /> */}
        <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
