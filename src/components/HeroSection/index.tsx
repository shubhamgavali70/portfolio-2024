import React from 'react';
import styles from './HeroSection.module.css';


const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <div className={styles.designation}>Shubham gavali</div>

        <div className={styles.firstName}>
          Software
        </div>

        <div className={styles.lastName}>
          Engineer<span>.</span>
        </div>

        <div className={styles.scrollDown}>
          ↓
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
