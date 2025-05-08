import { useState } from 'react'
import styles from "./ContactForm.module.css"
import Button  from '../Button/Button'
import { LuMessageSquareMore } from "react-icons/lu";
import { MdAddIcCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";


const ContactForm = () => {
        
  const [name , setName] = useState("Anshu");
  const [email , setEmail] = useState("yashirampuri@gmail.com");
  const [text , setText] = useState("Submit to this channel");
 
  
 
 


  const onSubmit = (event) => {

    event.preventDefault();

   
     

setName(event.target[0].value);

setEmail(event.target[1].value);
setText (event.target[2].value);



  };
 
  return (
    <section className={styles.container}>

<div className={styles.contact_form}>
  <div className={styles.top_btn}>
  <Button 
 
  text=" VIA SUPPORT CHAT" icon={<LuMessageSquareMore fontSize="24px"/>}/>
  <Button text=" VIA CALL" icon={<MdAddIcCall fontSize="24px" />}/>
  </div>
  <Button 
  isOutline={true}
  text=" VIA EMAIL FORM" icon={<AiOutlineMail  fontSize="24px" />}/>
 <form onSubmit={onSubmit}>
 <div className={styles.form_control}>
 <label htmlFor='name'>Name</label>
 <input type='text ' name='name'/>


 </div>
 <div className={styles.form_control}>
 <label htmlFor='email'>E-Mail</label>
 <input type='email ' name='email'/>
 </div>

 <div className={styles.form_control}>
 <label htmlFor='text'>Text</label>
 <textarea  name='text'  rows="8"/>
 </div>

 <div style={{
   display : "flex",
   justifyContent : "end", // ise end kiya taki ye end me dikhe
 }

 
 }>
 <Button 
//  ise div me is liye rkha he kyu ki button ki width jada bta rhi thi
//  is liye div me rkha he
  text="SUBMIT BUTTON"  />
 </div>
 <div>
  {name + " " + email+ " " + text }
 </div>
</form>

</div>
<div className={styles.contact_image}>

  <img src='images/contact.jpg' alt=' contact img'  />
</div>
    </section>
  )
}

export default ContactForm