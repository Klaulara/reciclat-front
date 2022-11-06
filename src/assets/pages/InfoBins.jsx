import { useLoaderData } from "react-router-dom";
import image from '../img/blog.png'

const url = "http://localhost:5173/infoBins.json";
const getData = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data.bins;
};

export const loader = async ({ params }) => {
  const infoBins = await getData();
  const data = infoBins.filter((bin) => {
    return bin.id == params.id;
  });
  return data;
};

const InfoBins = () => {
  const data = useLoaderData();

  return (
    <div>
      <img src={image} alt="imagen" width="200px"></img>
      <p className="text-justify indent-8 m-8">{data[0].parrafo1}</p>
      <p className="text-justify indent-8 m-8">{data[0].parrafo2}</p>
      <p className="text-justify indent-8 m-8">{data[0].parrafo3}</p>
      <p className="text-justify indent-8 m-8">{data[0].parrafo4}</p>
    </div>
  );
};
export default InfoBins;
