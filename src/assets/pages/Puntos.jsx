import FormRecicle from "../components/FormRecicle";

const Puntos = () => {
  return (
    <form method="post" action="https://formsubmit.co/contacto@reciclat.live">
      <div className="text-center text-2xl">
        <div>
          <label>Region: </label>
          <input className="" id="region" type="text" name="region"></input>
        </div>
        <div>
          <label>Comuna: </label>
          <input id="comuna" type="text" name="comuna"></input>
        </div>
        <div>
          <label>Direccion: </label>
          <input id="direccion" type="text" name="direccion"></input>
        </div>
        <div>
          <label>Que reciben?: </label>
          <input id="reciclaje" type="text" name="reclaje"></input>
        </div>
        <button
          type="submit"
          className="bg-green-700 m-5 p-2 rounded-lg text-white"
        >
          Enviar punto de reciclaje
        </button>


        <p>
          Al correo:{" "}
          <a
            className="text-green-600 font-bold"
            href="mailto:contacto@reciclat.live"
          >
            contacto@reciclat.live{" "}
          </a>
        </p>
        <p className="mb-32">O unete a nuestro discord.</p>
      </div>
    </form>
  );
};

export default Puntos;
