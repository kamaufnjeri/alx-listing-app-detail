import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { PLACEHOLDER_IMAGE, PROPERTYLISTINGSAMPLE } from '../constants';
import HeroSection from '@/components/common/HeroSection';
import FilterSection from '@/components/common/FilterSection';



const Home = () => {
  return (
    <div className="p-6 flex flex-col gap-2 items-center justify-between">
      <HeroSection />
      <FilterSection/>


      <h1 className="text-3xl font-bold mb-4">ALX Listing App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {PROPERTYLISTINGSAMPLE.map((property) => (
          <Card key={property.name} property={property} />
        ))}
      </div>
      <div className="mt-4">
        <Button label="View More Listings" onClick={() => alert('Coming Soon!')} />
      </div>
    </div>
  );
};

export default Home;
