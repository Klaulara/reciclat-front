import { useLoaderData } from "react-router-dom";
import Bins from "../components/Bins";
import Logo from "../components/Logo";

const Information = () => {
  const recicleLibrary = useLoaderData();

  return (
    <>
      <div className="mb-20">
        <Logo />
        <div className="m-10">
          <p className="text-2xl text-green-600 uppercase font-bold">
            Informacion sobre reciclaje
          </p>
        </div>

        <div className="grid justify-center items-center md:grid-cols-3 xl:grid-cols-6">
          {recicleLibrary.map((recicle) => (
            <Bins recicle={recicle} key={recicle.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Information;
