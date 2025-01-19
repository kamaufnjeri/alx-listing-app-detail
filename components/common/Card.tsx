import React from 'react';
import { PropertyProps } from '../../interfaces';

const Card: React.FC<{ property: PropertyProps}> = ({ property }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={property.image} alt={property.name} className="w-full h-56 object-cover rounded-t-lg" />
      <div className="mt-4">
        <h2 className="font-semibold">{property.name}</h2>
        <p>{property.address.city}, {property.address.country}</p>
        <p>Rating: {property.rating}</p>
        <p>Price: ${property.price}</p>
      </div>
    </div>
  );
};

export default Card;
