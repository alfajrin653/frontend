import React from "react";
import LaundryImage from "../img/about.png"; // ganti dengan path gambar kamu

const AboutUs = () => {
  return (
<div id="about" className=" bg-[#0099ff]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5"  d="M0,256L8.9,229.3C17.8,203,36,149,53,149.3C71.1,149,89,203,107,186.7C124.4,171,142,85,160,53.3C177.8,21,196,43,213,85.3C231.1,128,249,192,267,229.3C284.4,267,302,277,320,250.7C337.8,224,356,160,373,122.7C391.1,85,409,75,427,96C444.4,117,462,171,480,181.3C497.8,192,516,160,533,154.7C551.1,149,569,171,587,192C604.4,213,622,235,640,229.3C657.8,224,676,192,693,181.3C711.1,171,729,181,747,181.3C764.4,181,782,171,800,170.7C817.8,171,836,181,853,192C871.1,203,889,213,907,186.7C924.4,160,942,96,960,96C977.8,96,996,160,1013,160C1031.1,160,1049,96,1067,106.7C1084.4,117,1102,203,1120,202.7C1137.8,203,1156,117,1173,112C1191.1,107,1209,181,1227,202.7C1244.4,224,1262,192,1280,176C1297.8,160,1316,160,1333,160C1351.1,160,1369,160,1387,133.3C1404.4,107,1422,53,1431,26.7L1440,0L1440,0L1431.1,0C1422.2,0,1404,0,1387,0C1368.9,0,1351,0,1333,0C1315.6,0,1298,0,1280,0C1262.2,0,1244,0,1227,0C1208.9,0,1191,0,1173,0C1155.6,0,1138,0,1120,0C1102.2,0,1084,0,1067,0C1048.9,0,1031,0,1013,0C995.6,0,978,0,960,0C942.2,0,924,0,907,0C888.9,0,871,0,853,0C835.6,0,818,0,800,0C782.2,0,764,0,747,0C728.9,0,711,0,693,0C675.6,0,658,0,640,0C622.2,0,604,0,587,0C568.9,0,551,0,533,0C515.6,0,498,0,480,0C462.2,0,444,0,427,0C408.9,0,391,0,373,0C355.6,0,338,0,320,0C302.2,0,284,0,267,0C248.9,0,231,0,213,0C195.6,0,178,0,160,0C142.2,0,124,0,107,0C88.9,0,71,0,53,0C35.6,0,18,0,9,0L0,0Z"></path></svg>
    <section className=" py-12 px-6 md:px-20" id="about-us">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Bagian Kiri: Teks */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-bold text-white mb-4">Why Wash Station</h2>
        <p className="text-lg text-white mb-6">
          Laundry Wash Station hadir sebagai solusi laundry profesional yang mengutamakan kualitas, ketepatan waktu, dan pelayanan maksimal—baik untuk kebutuhan korporat seperti hotel, restoran, dan kantor, maupun untuk individu yang ingin layanan cepat, bersih, dan terpercaya. Dengan sistem terintegrasi, proses higienis, serta layanan antar-jemput, kami pastikan setiap cucian ditangani dengan standar terbaik, tanpa repot.
        </p>
     
        </div>

        {/* Bagian Kanan: Gambar */}
        <div className="md:w-1/2">
          <img
            src={LaundryImage}
            alt="About Bhilas Laundry"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>

</div>

  );
};

export default AboutUs;
