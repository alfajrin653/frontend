import React from 'react'
import fmesin from '../img/mesin.png'

export default function herosection() {

  const phoneNumber = '6285258887671'; // Ganti dengan nomor WhatsApp yang diinginkan
  const messageq = 'Halo, saya tertarik dengan layanan laundry dari Wash Tation, bisa bantu saya?';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageq)}`;

  const handleClick = () => {
    window.open(whatsappLink, '_blank');
  }

  return (
    
      <div className='pt-10 flex flex-col md:flex-row justify-center items-center h-full  gap-3 mx-10 mt-10'> 
      <div className='flex  flex-col justify-center items-start lg:w-1/2 p-6 '>
        <h1 className='text-2xl md:text-5xl  lg:text-7xl font-extrabold md:mb-4'>Welcome to Our Laundry Service</h1>
        <p className='text-sm md:text-2xl md:mb-6'>Your clothes deserve the best care.</p>
        <button onClick={handleClick} className='px-6 py-2 mt-5 bg-blue-500 text-white rounded-full hover:bg-blue-300 transition ease-in-out duration-300'>
          Contact Us
        </button>
      </div>
      <img src={fmesin} alt="Laundry Service" className='' />
      <div>

      </div>
      
    </div>
 
  )
}
