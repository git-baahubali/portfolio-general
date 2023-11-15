import React from 'react'



  
function Contact() {
  function WhatsAppButton() {
    const phoneNumber = '8106501965'; // Replace with your phone number
    const message = encodeURIComponent('Hello, I am interested in your services!'); // Optional pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
    
  }
  return (
    <div>
            <button onClick={WhatsAppButton} className='text-black'>whatsapp</button>

    </div>
  )
}

export default Contact