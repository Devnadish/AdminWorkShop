import localFont from "next/font/local";

const Tajwal = localFont({
  src: [
    {
      path: "../fonts/tajwal/Tajawal-Regular.ttf",
      //   style: "normal",
    },
  ],
  variable: "--font-Tajwal",
});



const Amiri = localFont({
  src: [
    {
      path: "../fonts/amiri/Amiri-Regular.ttf",
      //   style: "normal",
    },
  ],
  variable: "--font-amiri",
});


export { Tajwal, Amiri };
