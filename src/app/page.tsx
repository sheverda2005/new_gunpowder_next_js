import Header from "@/componens/HomePage/Header/Header";
import OurAdvantages from "@/componens/HomePage/OurAdvantages/OurAdvantages";
import SaleBanner from "@/componens/HomePage/SaleBanner/SaleBanner";
import CatalogOfGoods from "@/componens/HomePage/CatalogOfGoods/GatalogOfGoods";
import HitGoods from "@/componens/HomePage/HitGoods/HitGoods";

export default function Home() {
  return (
      <div className={"home_page"}>
          <Header/>
          <main>
              <OurAdvantages/>
              <CatalogOfGoods/>
              <SaleBanner/>
              <HitGoods/>
          </main>
      </div>
  );
}
