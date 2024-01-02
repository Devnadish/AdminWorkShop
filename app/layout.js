import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Tajawal, Amiri } from "next/font/google";
import DashBoardMenu from "@/components/pagecomponent/back/dashboard/MenuSide";
import Provider, { AuthProvider } from "provider/Provider";
const amiri = Amiri({
  weight: "400",
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
});
const tajawal = Tajawal({
  weight: "400",
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal",
});

export const metadata = {
  title: "مركز الصحفي",
  description: "مركز الصحفي لصيانة السيارات",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`flex flex-col items-center justify-center w-full m-auto bg-slate-800 ${amiri.variable} ${tajawal.variable}`}
      >
        <AuthProvider>
          <div id="navmenu" className="w-full">
            <DashBoardMenu />
          </div>
          <main className="relative flex w-full items-center justify-center w-full text-white">
            {children}
          </main>
        </AuthProvider>

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
