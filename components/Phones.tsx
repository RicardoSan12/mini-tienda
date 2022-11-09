import * as React from 'react';
import Phone from './Phone';
import phonesData from '../phones.json';

import PhoneDetail from './PhoneDetail';

interface PhoneProps {
  id: number | string;
  title: string;
  price: number;
  phoneImg: Array<string>;
  send: string;
  star: number;
  resume: number;
  colors: Array<string>;
}

const Phones = () => {
  return (
    <div className="Phones">
      {/* {phonesData.map((phone: PhoneProps) => (
        <Phone key={phone.id} features={phone} />
      ))} */}
      <PhoneDetail />
    </div>
  );
};

// {phonesData.map((phone) => (
//   <h4>{phone.title}</h4>
// ))}

export default Phones;
