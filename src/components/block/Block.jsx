import React from 'react'
import styles from './block.module.css'
import logo from "./logo.svg"

function Block({text}) {
  return (
   <section className={styles.block}>
     <section className={styles.blockLeft}>
       <img src={logo} alt="" className={styles.logo} />
       <div className={styles.info}>
         <h3> Analyzing User Data</h3>
         {/* <div className={styles.test}>
         Who are you developing for? How will they use your design? Building user personas can answer these.
         </div> */}
         
         <p>Who are you developing for? How will they use your design? Building user personas can answer these.</p>
         
       </div>
     </section>

     <section className={styles.doubleButton}>
       <p>6 videos</p>
       <p>4.5 hours</p>
     </section>

   </section>
  )
}

export default Block