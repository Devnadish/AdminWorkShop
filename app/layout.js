import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Toaster as Sonnar} from "@/components/ui/sonner";
import DashBoardMenu from "@/app/dashboard/_component/MenuSide";
import Provider, { AuthProvider } from "provider/Provider";
import { Tajwal, Amiri } from "@/lib/fonts";

export const metadata = {
  title: "مركز الصحفي",
  description: "مركز الصحفي لصيانة السيارات",
};

export default function RootLayout({ children }) {

  return (
    <html lang="ar" dir="rtl">
      <body
        className={`relative flex flex-col items-center justify-center w-full m-auto bg-slate-800 ${Tajwal.variable} ${Amiri.variable}`}
        // suppressHydrationWarning={true}
      >
        <AuthProvider>
          <div id="navmenu" className="w-full sticky top-0 z-50">
            <DashBoardMenu />
          </div>
          <main className="relative flex w-full items-center justify-center w-full text-white">
            {children}
          </main>
        </AuthProvider>
        <Sonnar richColors  position="bottom-center" />

        <Toaster
          position="bottom-center "
          toastOptions={{
            className: "",
            style: {
              border: "1px solid green",
              borderRight: "15px solid green",
              padding: "2rem",
              color: "#713200",
              fontSize: "1rem",
              fontWeight: "bold",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
