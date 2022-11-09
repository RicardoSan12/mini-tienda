import * as React from 'react';

const Phone = ({ features }) => {
  const { title, price, phoneImg, send, star, resume, colors } = features;

  return (
    <div className="Phone">
      <div className="favorite"></div>
      <picture className="movil">
        <img src={phoneImg[0]} alt="" />
      </picture>
      <div className="PhoneInfo">
        <h2>{title}</h2>
        <div>
          <div>
            <h3>Precio $ {price}</h3>
            <h5>{send}</h5>
          </div>
          <div>
            <div>
              <span>{star} Estrellas</span>
              <span> {resume} reseñas</span>
            </div>
            <span>Displonible en {colors.length} colores</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
// {
//   "id": 1,
//   "title": "samsumg A3",
//   "price": "",
//   "phoneImg": "",
//   "send":"",
//   "star": "",
//   "resume": "",
//   "colors": ""
// }
