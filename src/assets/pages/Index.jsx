import logo from "../img/ReciclaTlogo.png";

const Index = () => {
  return (
    <div className="text-center mb-64 ">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="logo" width="700px"></img>
      </div>
      <div>
        <p className="text-xl m-3">Este es un proyecto colaborativo y completamente gratuito.</p>
        <p className="text-xl m-3">Ayudanos a rellenar todos los puntos de tu ciudad <a className='text-green-600 font-bold' href="/puntos"> aqui.</a></p>
        <p className="text-xl m-3">Aprende sobre como y que puedes reciclar en cada tarro.</p>
      </div>
    </div>
  );
};

export default Index;
