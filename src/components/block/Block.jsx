import React from 'react'
import styles from './block.module.css'
import logo from "./logo.svg"

function Block() {
  return (
   <section className={styles.block}>
     <section className={styles.blockLeft}>
       <img src={logo} alt="" className={styles.logo} />
       <div className={styles.info}>
         <h3> Analyzing User Data</h3>
         <p>Who are you developing for? How will they use your design? Building user personas can answer these.</p>
       </div>
     </section>

     <section className={styles.doubleButton}>
       
     </section>

   </section>
  )
}

export default Block