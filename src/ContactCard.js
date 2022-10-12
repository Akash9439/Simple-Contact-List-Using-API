import React,{useState} from 'react'

function ContactCard(props) {
  const [showAge, setShowAge]=useState(false);
  return (
    <div className="contact-card">
      <img src={props.avatarURL} alt="profile"></img>
      <div className="user-details">
        <p>Name:{props.Name}</p>
        <p>Email:{props.Email}</p>
        <button onClick={()=>setShowAge(!showAge)}></button>
        {showAge && <p>{props.Age}</p>}
      </div>
    </div>
  )
}

export default ContactCard;
