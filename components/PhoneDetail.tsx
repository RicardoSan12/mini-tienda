import * as React from 'react';

const movil = {
  id: 2,
  title: 'Realme 9i Dual SIM 128 GB prism blue 4 GB RAM',
  price: 4199,
  phoneImg: [
    'https://http2.mlstatic.com/D_Q_NP_2X_656268-MLA49263826968_032022-AB.webp',
  ],
  send: 'Envio por $ 399',
  star: 4.5,
  resume: 803,
  colors: ['azul', 'rojo'],
  detail: {
    internalMemory: 32,
    ramMemory: 4,
    productTotal: 20,
  },
};

const PhoneDetail = () => {
  const { title, price, phoneImg, send, star, resume, colors, detail } = movil;

  return (
    <div className="PhoneDetail">
      <h2>{title}</h2>
      <p>
        <span>{star} Estrellas</span>
        <span> {resume} reseñas</span>
      </p>
      <div className="PhoneDetail-container">
        <picture>
          <img src={phoneImg[0]} alt="" />
          <div className="PhoneDetail-numberImg"></div>
        </picture>
        <div className="PhoneDetail-content">
          <div className="PhoneDetail__btns">
            <button>
              Memoria interna: <br /> <span>{detail.internalMemory} GB</span>
            </button>
            <button>
              Memoria RAM: <br /> <span>{detail.ramMemory} GB</span>
            </button>
            <button>
              Color: <br /> <span>{colors[0]}</span>
            </button>
          </div>
          <h3>Precio $ {price}</h3>
          <div className="PhoneDetail__total">
            <label>
              <span>Cantidad:</span>
              <input
                type="number"
                placeholder="(20 Disponibles)"
                min="1"
                max="20"
              />
            </label>
          </div>
          <button className="shopping">Agregar al carrito</button>
          <button className="favorite-button">
            <span>3</span> Añadir a favoritos{' '}
          </button>
        </div>
      </div>
      <h3>Mas Caracteristicas</h3>
    </div>
  );
};

export default PhoneDetail;

{
  /* <div className="PhoneInfo">
        <h2>{title}</h2>
        <div>
          <div>
            <h5>Precio $ {price}</h5>
            <h4>{send}</h4>
          </div>
          <div>
            <div>
              <span>{star} Estrellas</span>
              <span> {resume} reseñas</span>
            </div>
            <span>Displonible en {colors.length} colores</span>
          </div>
        </div>
      </div> */
}

let movil2 = {
  id: 2,
  title: 'Realme 9i Dual SIM 128 GB prism blue 4 GB RAM',
  price: 4199,
  phoneImg: [
    'https://http2.mlstatic.com/D_Q_NP_2X_656268-MLA49263826968_032022-AB.webp',
  ],
  send: 'Envio por $ 399',
  star: 4.5,
  resume: 803,
  colors: ['azul', 'rojo'],
  detail: {
    memory: { internal: [128], ram: [4], max: '1 TB', typeTarjet: 'Micro-SD' },
    tarjetSim: 'Dua SIM',
    origin: { date: 'Marzo 2022', country: 'Vietnam' },
    operatingSystem: 'Android-12',
    screen: {
      size: 6.6,
      resolution: '1200x2408',
      screenType: 'HDF',
      displayTech: 'Gorilla Glass',
      refresh: '120Hz',
    },
    camera: {
      mainResolution: '50MP',
      videoResolution: 'UHD 4K (3840 x 2160) | @30fps',
      camFront: '8 Mpx',
      mainFeatures: [
        'Autoenfoque',
        'Flash LED',
        'Panorámica',
        'Foto HDR',
        'Boken',
      ],
      numberCam: 3,
      videoResolutionFront: '1920 px x 1080 px',
      zoom: '10x',
    },
    battery: {
      capacity: '5000mAh',
      type: 'lithium polymer',
      fashCharging: true,
      talkTime: 44,
    },
    connect: {
      red: '5G',
      typeConnector: 'Micro USB',
      gps: true,
      tvTuner: false,
    },
    processor: {
      model: 'Snapdragon 750G 5G',
      cpu: '2x2.2GHz Kryo 570,6x1.8GHz Kryo 570',
      cores: 8,
      speed: '2.2GHz',
    },
    productTotal: 20,
  },
};
