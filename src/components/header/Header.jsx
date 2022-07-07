import React from 'react'
import styles from './header.module.css'

function Header() {
  return (
   <section className={styles.header}>
     <h2> What you’ll learn</h2>
     {/* <div className={styles.test} > Create beautiful webflow sites with flowbase. Clone for
free and get started building a site today.</div> */}
     <p>Create beautiful webflow sites with flowbase. Clone for
free and get started building a site today.</p>
   </section>
  )
}

export default Header