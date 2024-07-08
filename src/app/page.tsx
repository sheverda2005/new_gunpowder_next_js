import Header from "@/componens/HomePage/Header/Header";
import OurAdvantages from "@/componens/HomePage/OurAdvantages/OurAdvantages";
import SaleBanner from "@/componens/HomePage/SaleBanner/SaleBanner";

export default function Home() {
  return (
      <div className={"home_page"}>
          <Header/>
          <main>
              <OurAdvantages/>
              <SaleBanner/>
          </main>
      </div>
  );
}
