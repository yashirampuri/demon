import React from 'react'
import styles from "./Navigation.module.css";
const Navigation = () => {
console.log(styles);

  return (
 <nav className={`${styles.navigation} container`}>    
  {/* // .navigation ek class name he or hum ne ise access kiya he */}
        <div className="logo" >
           <img src='images/lotus.png' alt=' do some coding' style={{width: 30 ,height:35 ,padding: 20}}  />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
  )
}

export default Navigation;