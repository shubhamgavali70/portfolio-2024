'use client';

import { useEffect } from 'react';

import { gsap } from 'gsap';

import { TextPlugin } from 'gsap/TextPlugin';

import SplitText from 'split-text-js';

import styles from './HomePage.module.css';



const HomePage = () => {

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);


    let tl = gsap.timeline()
    const text = document.querySelector('#quote')
    const epicNess = document.querySelector('.epicNess');
    let mySplitText = new SplitText(text, { type: "words,chars" })
    let chars = mySplitText.chars; //an array of all the divs that wrap each character

    gsap.set("#quote", { perspective: 400 });

    console.log(chars);

    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01
    });

    tl.fromTo(chars, {
      scale: 1
    }, {
      scale: 1.1,
      textShadow: '0px 0px 15px rgba(128, 128, 128, 1)'
    }).to(chars, {
      scale: 1,
      textShadow: 'none'
    })

  }, [])

  return (
    <div className={styles.container}>

      <div id="quote" className={styles.quote}>
        I&apos;m so busy slaying code dragons that I haven&apos;t finished building this website yet. Stay tuned for <span className='epicNess'>epicness!</span>
      </div>
      <div className={`${styles.myName} name`}>- Shubham Gavali</div>
    </div>
  );
};

export default HomePage;
