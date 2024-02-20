import React from 'react';
import styles from './AboutMe.module.css';


const AboutMe = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h2>Who Am I?<span className={styles.underline}></span></h2>

        <p>I enjoy taking complex UI designs and turning them out into simple and beautiful interfaces. I sometimes play with Figma to make awesome prototypes and convert them into front-end using HTML, CSS, and JavaScript the backend as well. I always look for new challenges, opportunities, and new people to meet. Don&apos;t hesitate to drop me a line!.</p>
      </section>
    </div>
  );
};

export default AboutMe;
