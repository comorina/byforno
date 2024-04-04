"use client";
import NavabarComponent from "./component/Navabar/navbar";
import HomeComponent from "./pages/HomeComponent/homeComponent.tsx";
import AboutComponent from "./pages/About/about";
import styles from "./page.module.css";
import FooterComponent from "./component/Footer/footerComponent";
import ServicesComponent from "./pages/Services/servicesComponent";
import WorksComponent from "./pages/Works/worksComponent";

export default function Home() {
  return (
    <div className={styles.rootContainer}>
      <NavabarComponent />
      <div className={styles.component}>
        <HomeComponent />
        <AboutComponent />
        <ServicesComponent />
        <WorksComponent />
        <FooterComponent />
      </div>
    </div>
  );
}
