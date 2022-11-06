import IconoElectro from "../img/Electro.png";
import IconoMetal from "../img/Metal.png";
import IconoOrganico from "../img/Organico.png";
import IconoPapel from "../img/Papel.png";
import IconoPlastico from "../img/Plastico.png";
import IconoVidrio from "../img/Vidrio.png";

export function loader() {
  const recicleLibrary = [
    {
      id: 1,
      name: "Papel",
      image: IconoPapel,
    },
    {
      id: 2,
      name: "Vidrio",
      image: IconoVidrio,
    },
    {
      id: 3,
      name: "Organico",
      image: IconoOrganico,
    },
    {
      id: 4,
      name: "Electro",
      image: IconoElectro,
    },
    {
      id: 5,
      name: "Metal",
      image: IconoMetal,
    },
    {
      id: 6,
      name: "Plastico",
      image: IconoPlastico,
    },
  ];
  return recicleLibrary;
}