import React from 'react';

const WhatsappButton = ({message}) => {
  const phoneNumber = '6287764444343'; // Ganti dengan nomor WhatsApp yang diinginkan
  const messageq = {message};
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageq)}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <img src="/whatsapp.png" alt="WhatsApp" className="w-12 h-12" />
    </a>
  );
};

export default WhatsappButton;