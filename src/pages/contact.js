import Header from '@/app/components/Header';
import React from 'react'
import '../styles/contact.css'



function Contact() {
  function WhatsAppButton() {
    const phoneNumber = '8106501965'; // Replace with your phone number
    const message = encodeURIComponent('Hello, I am interested in your services!'); // Optional pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');

  }
  return (
    <div className='p-4'>
      <Header />

      <div className='not-header mt-32 shadow-2xl border-2 rounded-lg'>
        <button onClick={WhatsAppButton} className='text-black'></button>
        <div className='contact-details  flex flex-col justify-center items-center border-0 border-sky-950  shadow-2xl p-2'>
          <p className='contact-card'>Phone: 8106501965

          </p>
          <p className='contact-card'>Mail: 
          <span>balaji.dasari2103@gmail.com</span>
          </p>
          <a className='contact-card' href='https://www.linkedin.com/in/balaji-dasari02/' target='_blank'>linkedin.com/in/balaji-dasari02/</a>
        </div>
      </div>

    </div>
  )
}

export default Contact