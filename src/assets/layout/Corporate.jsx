import React from 'react';

const CorporatePage = () => {
  
  const phoneNumber = '+6285810625557'; // Ganti dengan nomor WhatsApp yang diinginkan
  const messageq = 'Halo, saya tertarik dengan layanan laundry corporate dari Wash Tation. Apakah Anda dapat memberikan informasi lebih lanjut tentang layanan.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageq)}`;

  const handleClick = () => {
    window.open(whatsappLink, '_blank');
  }

  return (
    <div id='corporate' className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Layanan Laundry Corporate</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Wash Station Laundry hadir untuk mendukung kebutuhan laundry skala besar Anda, mulai dari kantor, hotel, restoran, hingga institusi dengan layanan profesional dan terpercaya.
        </p>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Mengapa Pilih Wash Station Corporate?</h2>
        <p className="mb-6">
          Kami memahami bahwa kebersihan adalah representasi dari kualitas bisnis Anda. Dengan pengalaman dan tenaga ahli di bidang laundry, kami menawarkan solusi yang cepat, higienis, dan efisien untuk kebutuhan laundry dalam skala besar.
        </p>

        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✓</span>
            Penjemputan & Pengantaran Tepat Waktu
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✓</span>
            Proses Pencucian dengan Standar Kualitas Tinggi
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✓</span>
            Pelayanan Ramah dan Profesional
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✓</span>
            Sistem Tagihan dan Laporan yang Transparan
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✓</span>
            Dapat Disesuaikan Sesuai Kebutuhan Perusahaan Anda
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-10 px-6 text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Tertarik bekerja sama dengan kami?</h3>
        <p className="mb-6 text-gray-600">
          Hubungi tim kami untuk mendapatkan penawaran khusus dan informasi lebih lanjut mengenai layanan laundry corporate.
        </p>
        <button
        onClick={handleClick} 
        className='px-6 py-3 mt-5 bg-blue-500 text-white rounded-full hover:bg-blue-300 transition'>
          Hubungi via WhatsApp
        </button>
      </section>
    </div>
  );
};

export default CorporatePage;
