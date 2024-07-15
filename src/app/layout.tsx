import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./global.sass"
import NavBar from "@/componens/NavBar/NavBar";
import Footer from "@/componens/Footer/Footer";
import {StoreProvider} from "@/store/StoreProvider";
import Error from "@/componens/Error/Error";

const inter = Jost({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: {
      default: "Новий порох",
      template: "%s - Новий порох"
  },
  description: "Продаж військових товарів, РЕБ індивідульний, Електронна розтяжка,  Ініціатор поверхневого підриву, Ініціатор підриву за зміною магнітного поля",
  keywords: "РЕБ, РЕБ індивідульний, РЕБ купити, Електронна розтяжка, Елетронна розтяжка купити, Індикатор поверхневого підриву, Індикатор поверхневого підриву купити, Ініціатор підриву за зміною магнітного поля купити",
  icons: "image/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <StoreProvider>
          <html lang="en">
          <body className={inter.className}>
          <NavBar/>
          <Error/>
          {children}
          <Footer/>
          </body>
          </html>
      </StoreProvider>
  );
}
