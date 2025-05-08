import React from 'react'

import styles from "./Button.module.css";

const Button = ({isOutline,icon,text , ...rest} ) => {//yha par destructuring ki he
  

  
  return (
    <button 
    {...rest}

    
    className={isOutline ? styles.outline_btn : styles.primary_btn }>

       {icon}
       {text}
       
        </button>
  )
}

export default Button