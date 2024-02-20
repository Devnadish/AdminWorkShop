import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import ThemeProvider from "@/provider/ThemeProvider";

import { Toaster as Sonnar } from "@/components/ui/sonner";
import DashBoardMenu from "@/app/dashboard/dashboard/_component/MenuSide";
import Provider, { AuthProvider } from "@/provider/Provider";
import { Tajwal, Amiri } from "@/lib/fonts";

export const metadata = {
  title: "مركز الصحفي",
  description: "مركز الصحفي لصيانة السيارات",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`relative flex flex-col items-center justify-center w-full m-auto bg-background ${Tajwal.variable} ${Amiri.variable}`}
        // suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <div id="navmenu" className="w-full sticky top-0 z-50">
              <DashBoardMenu />
            </div>
            <main className="relative flex w-full items-center justify-center ">
              {children}
            </main>
          </AuthProvider>
        </ThemeProvider>
        <Sonnar richColors position="bottom-right" closeButton  />

        <Analytics />
      </body>
    </html>
  );
}
