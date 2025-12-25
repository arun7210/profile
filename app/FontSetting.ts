import localFont from "next/font/local";

const lufga = localFont({
  src: [
    {
      path: "../public/fonts/LufgaRegular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/LufgaLight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/LufgaMedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/LufgaBold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
  display: "swap",
});

export { lufga };