// src/components/ServiceList.jsx
import React from 'react';
import {
  LuShirt,
  LuCloudDrizzle,
  // FaShoePrints,
  LuShoppingBag,
  LuPackage,
  LuBaby,
  LuHardHat,
  LuBrush,
  // LuHammer,
  LuWaves,
//   LuBabyCarriage,
  LuTent
} from 'react-icons/lu';
import { FaShoePrints, FaBlackTie  } from "react-icons/fa";
import { GiRolledCloth } from "react-icons/gi";

const services = [
  { icon: <LuShirt />, label: 'Dry Clean' },
  { icon: <LuCloudDrizzle />, label: 'Wet Clean' },
  { icon: <FaShoePrints />, label: 'Laundry Sepatu' },
  { icon: <LuShoppingBag />, label: 'Laundry Tas' },
  { icon: <LuPackage />, label: 'Laundry Kiloan' },
  { icon: <LuBaby />, label: 'Laundry Perlengkapan Bayi' },
  { icon: <LuHardHat />, label: 'Laundry Helm' },
  { icon: <LuBrush />, label: 'Semir Sepatu' },
  { icon: <LuWaves />, label: 'Laundry Peralatan Diving' },
  { icon: <FaBlackTie  />, label: 'Laundry Ja' },
//   { icon: <LuBabyCarriage />, label: 'Laundry Stroller' },
  { icon: <LuTent />, label: 'Laundry Peralatan Gunung' },
  { icon: <GiRolledCloth   />, label: 'Laundry Karpet' },
];

const ServiceList = () => {
  return (
    <div id='Service' className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Laundry Terdekat & Terlengkap Wash Station Laundry
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <div className="text-4xl text-blue-600 mb-2">{service.icon}</div>
            <p className="text-center text-sm font-medium">{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
