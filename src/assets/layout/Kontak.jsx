// src/App.jsx
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function kontak() {
  return (
    <div id='contact' className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-white p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Bagian Kiri - Lokasi */}
        <div className="bg-blue-600 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Laundry Wash Station</h2>
          <p className="mb-6">Kami siap membantu menjaga pakaian Anda tetap bersih, rapi, dan harum.</p>

          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Alamat:</h3>
            <p>Jl.taruma negara 19 A RT.001/010, Pisangan, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15415</p>
            <p>Telp: +6285258887671</p>
          </div>
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.389551215064!2d106.76612727475133!3d-6.315590493673758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef0035d2d0d5%3A0xfd5ceeb29d9d0cd9!2swash%20station%20Tangsel!5e1!3m2!1sid!2sid!4v1756545588322!5m2!1sid!2sid"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Bagian Kanan - Contact Form */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Hubungi Kami</h2>
           <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <p>Jl.taruma negara 19 A RT.001/010, Pisangan, Kec. Ciputat Tim., Kota Tangerang Selatan</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <p>+6285258887671</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <p>washstationberkah@gmail.com</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
