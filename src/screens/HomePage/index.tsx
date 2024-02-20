import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";


import styles from './HomePage.module.css'


const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <HeroSection/>

        <AboutMe/>
      </main>
    </div>
  )
};

export default HomePage;
