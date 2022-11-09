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
      parrafo1: "Nulla velit sapien, finibus eget sapien quis, vestibulum convallis elit. Sed facilisis ex ante, et lacinia orci euismod vel. Maecenas quis lacinia diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc id fringilla metus. Nulla facilisi. Maecenas pulvinar venenatis nisl et suscipit. Vivamus ligula risus, porta ut egestas quis, pharetra id urna. Sed ac tortor a eros luctus pellentesque id at urna. Phasellus volutpat iaculis ipsum in interdum.",
      parrafo2: "Praesent sed fringilla erat, non efficitur turpis. Aliquam non rutrum neque. Pellentesque id vehicula leo, quis tincidunt nisi. Nunc vel elit ante. Donec orci ex, condimentum id commodo vel, tincidunt nec lacus. In eu lectus faucibus, rutrum lorem convallis, elementum justo. Vestibulum vel metus in leo facilisis gravida quis vitae nunc. Maecenas at facilisis turpis, sit amet aliquet magna. Etiam blandit nec nibh nec euismod.",
      parrafo3: "Suspendisse congue eget arcu vitae bibendum. Nulla at iaculis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ante enim, mattis id lectus ut, dapibus laoreet erat. Suspendisse efficitur venenatis arcu id elementum. Mauris faucibus facilisis lorem in faucibus. Nunc iaculis nulla ac sapien tempus egestas. Sed pulvinar eleifend lectus, ut suscipit magna blandit ut.",
      parrafo4: "Integer dictum odio a odio euismod consectetur. Sed commodo efficitur sapien quis sollicitudin. Ut eget diam congue, suscipit est non, hendrerit magna. Donec velit urna, elementum ut tincidunt a, maximus ut mauris. Praesent sit amet vehicula diam. Maecenas ac mi nec mi accumsan ullamcorper. Pellentesque dolor ex, euismod ut maximus dignissim, tempus sit amet nunc. Aenean non dignissim ligula.",
      imagen: "./src/assets/img/blog.PNG"
    },
    {
      id: 2,
      name: "Vidrio",
      image: IconoVidrio,
      parrafo1: "Nulla velit sapien, finibus eget sapien quis, vestibulum convallis elit. Sed facilisis ex ante, et lacinia orci euismod vel. Maecenas quis lacinia diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc id fringilla metus. Nulla facilisi. Maecenas pulvinar venenatis nisl et suscipit. Vivamus ligula risus, porta ut egestas quis, pharetra id urna. Sed ac tortor a eros luctus pellentesque id at urna. Phasellus volutpat iaculis ipsum in interdum.",
      parrafo2: "Praesent sed fringilla erat, non efficitur turpis. Aliquam non rutrum neque. Pellentesque id vehicula leo, quis tincidunt nisi. Nunc vel elit ante. Donec orci ex, condimentum id commodo vel, tincidunt nec lacus. In eu lectus faucibus, rutrum lorem convallis, elementum justo. Vestibulum vel metus in leo facilisis gravida quis vitae nunc. Maecenas at facilisis turpis, sit amet aliquet magna. Etiam blandit nec nibh nec euismod.",
      parrafo3: "Suspendisse congue eget arcu vitae bibendum. Nulla at iaculis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ante enim, mattis id lectus ut, dapibus laoreet erat. Suspendisse efficitur venenatis arcu id elementum. Mauris faucibus facilisis lorem in faucibus. Nunc iaculis nulla ac sapien tempus egestas. Sed pulvinar eleifend lectus, ut suscipit magna blandit ut.",
      parrafo4: "Integer dictum odio a odio euismod consectetur. Sed commodo efficitur sapien quis sollicitudin. Ut eget diam congue, suscipit est non, hendrerit magna. Donec velit urna, elementum ut tincidunt a, maximus ut mauris. Praesent sit amet vehicula diam. Maecenas ac mi nec mi accumsan ullamcorper. Pellentesque dolor ex, euismod ut maximus dignissim, tempus sit amet nunc. Aenean non dignissim ligula.",
      imagen: "./src/assets/img/blog.PNG"
    },
    {
      id: 3,
      name: "Organico",
      image: IconoOrganico,
      parrafo1: "Nulla velit sapien, finibus eget sapien quis, vestibulum convallis elit. Sed facilisis ex ante, et lacinia orci euismod vel. Maecenas quis lacinia diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc id fringilla metus. Nulla facilisi. Maecenas pulvinar venenatis nisl et suscipit. Vivamus ligula risus, porta ut egestas quis, pharetra id urna. Sed ac tortor a eros luctus pellentesque id at urna. Phasellus volutpat iaculis ipsum in interdum.",
      parrafo2: "Praesent sed fringilla erat, non efficitur turpis. Aliquam non rutrum neque. Pellentesque id vehicula leo, quis tincidunt nisi. Nunc vel elit ante. Donec orci ex, condimentum id commodo vel, tincidunt nec lacus. In eu lectus faucibus, rutrum lorem convallis, elementum justo. Vestibulum vel metus in leo facilisis gravida quis vitae nunc. Maecenas at facilisis turpis, sit amet aliquet magna. Etiam blandit nec nibh nec euismod.",
      parrafo3: "Suspendisse congue eget arcu vitae bibendum. Nulla at iaculis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ante enim, mattis id lectus ut, dapibus laoreet erat. Suspendisse efficitur venenatis arcu id elementum. Mauris faucibus facilisis lorem in faucibus. Nunc iaculis nulla ac sapien tempus egestas. Sed pulvinar eleifend lectus, ut suscipit magna blandit ut.",
      parrafo4: "Integer dictum odio a odio euismod consectetur. Sed commodo efficitur sapien quis sollicitudin. Ut eget diam congue, suscipit est non, hendrerit magna. Donec velit urna, elementum ut tincidunt a, maximus ut mauris. Praesent sit amet vehicula diam. Maecenas ac mi nec mi accumsan ullamcorper. Pellentesque dolor ex, euismod ut maximus dignissim, tempus sit amet nunc. Aenean non dignissim ligula.",
      imagen: "./src/assets/img/blog.PNG"
    },
    {
      id: 4,
      name: "Electro",
      image: IconoElectro,
      parrafo1: "Nulla velit sapien, finibus eget sapien quis, vestibulum convallis elit. Sed facilisis ex ante, et lacinia orci euismod vel. Maecenas quis lacinia diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc id fringilla metus. Nulla facilisi. Maecenas pulvinar venenatis nisl et suscipit. Vivamus ligula risus, porta ut egestas quis, pharetra id urna. Sed ac tortor a eros luctus pellentesque id at urna. Phasellus volutpat iaculis ipsum in interdum.",
      parrafo2: "Praesent sed fringilla erat, non efficitur turpis. Aliquam non rutrum neque. Pellentesque id vehicula leo, quis tincidunt nisi. Nunc vel elit ante. Donec orci ex, condimentum id commodo vel, tincidunt nec lacus. In eu lectus faucibus, rutrum lorem convallis, elementum justo. Vestibulum vel metus in leo facilisis gravida quis vitae nunc. Maecenas at facilisis turpis, sit amet aliquet magna. Etiam blandit nec nibh nec euismod.",
      parrafo3: "Suspendisse congue eget arcu vitae bibendum. Nulla at iaculis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ante enim, mattis id lectus ut, dapibus laoreet erat. Suspendisse efficitur venenatis arcu id elementum. Mauris faucibus facilisis lorem in faucibus. Nunc iaculis nulla ac sapien tempus egestas. Sed pulvinar eleifend lectus, ut suscipit magna blandit ut.",
      parrafo4: "Integer dictum odio a odio euismod consectetur. Sed commodo efficitur sapien quis sollicitudin. Ut eget diam congue, suscipit est non, hendrerit magna. Donec velit urna, elementum ut tincidunt a, maximus ut mauris. Praesent sit amet vehicula diam. Maecenas ac mi nec mi accumsan ullamcorper. Pellentesque dolor ex, euismod ut maximus dignissim, tempus sit amet nunc. Aenean non dignissim ligula.",
      imagen: "./src/assets/img/blog.PNG"
    },
    {
      id: 5,
      name: "Metal",
      image: IconoMetal,
      parrafo1: "Nulla velit sapien, finibus eget sapien quis, vestibulum convallis elit. Sed facilisis ex ante, et lacinia orci euismod vel. Maecenas quis lacinia diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc id fringilla metus. Nulla facilisi. Maecenas pulvinar venenatis nisl et suscipit. Vivamus ligula risus, porta ut egestas quis, pharetra id urna. Sed ac tortor a eros luctus pellentesque id at urna. Phasellus volutpat iaculis ipsum in interdum.",
      parrafo2: "Praesent sed fringilla erat, non efficitur turpis. Aliquam non rutrum neque. Pellentesque id vehicula leo, quis tincidunt nisi. Nunc vel elit ante. Donec orci ex, condimentum id commodo vel, tincidunt nec lacus. In eu lectus faucibus, rutrum lorem convallis, elementum justo. Vestibulum vel metus in leo facilisis gravida quis vitae nunc. Maecenas at facilisis turpis, sit amet aliquet magna. Etiam blandit nec nibh nec euismod.",
      parrafo3: "Suspendisse congue eget arcu vitae bibendum. Nulla at iaculis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ante enim, mattis id lectus ut, dapibus laoreet erat. Suspendisse efficitur venenatis arcu id elementum. Mauris faucibus facilisis lorem in faucibus. Nunc iaculis nulla ac sapien tempus egestas. Sed pulvinar eleifend lectus, ut suscipit magna blandit ut.",
      parrafo4: "Integer dictum odio a odio euismod consectetur. Sed commodo efficitur sapien quis sollicitudin. Ut eget diam congue, suscipit est non, hendrerit magna. Donec velit urna, elementum ut tincidunt a, maximus ut mauris. Praesent sit amet vehicula diam. Maecenas ac mi nec mi accumsan ullamcorper. Pellentesque dolor ex, euismod ut maximus dignissim, tempus sit amet nunc. Aenean non dignissim ligula.",
      imagen: "./src/assets/img/blog.PNG"
    },
    {
      id: 6,
      name: "Plastico",
      image: IconoPlastico,
      parrafo1: "Nulla velit sapien, finibus eget sapien quis, vestibulum convallis elit. Sed facilisis ex ante, et lacinia orci euismod vel. Maecenas quis lacinia diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc id fringilla metus. Nulla facilisi. Maecenas pulvinar venenatis nisl et suscipit. Vivamus ligula risus, porta ut egestas quis, pharetra id urna. Sed ac tortor a eros luctus pellentesque id at urna. Phasellus volutpat iaculis ipsum in interdum.",
      parrafo2: "Praesent sed fringilla erat, non efficitur turpis. Aliquam non rutrum neque. Pellentesque id vehicula leo, quis tincidunt nisi. Nunc vel elit ante. Donec orci ex, condimentum id commodo vel, tincidunt nec lacus. In eu lectus faucibus, rutrum lorem convallis, elementum justo. Vestibulum vel metus in leo facilisis gravida quis vitae nunc. Maecenas at facilisis turpis, sit amet aliquet magna. Etiam blandit nec nibh nec euismod.",
      parrafo3: "Suspendisse congue eget arcu vitae bibendum. Nulla at iaculis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ante enim, mattis id lectus ut, dapibus laoreet erat. Suspendisse efficitur venenatis arcu id elementum. Mauris faucibus facilisis lorem in faucibus. Nunc iaculis nulla ac sapien tempus egestas. Sed pulvinar eleifend lectus, ut suscipit magna blandit ut.",
      parrafo4: "Integer dictum odio a odio euismod consectetur. Sed commodo efficitur sapien quis sollicitudin. Ut eget diam congue, suscipit est non, hendrerit magna. Donec velit urna, elementum ut tincidunt a, maximus ut mauris. Praesent sit amet vehicula diam. Maecenas ac mi nec mi accumsan ullamcorper. Pellentesque dolor ex, euismod ut maximus dignissim, tempus sit amet nunc. Aenean non dignissim ligula.",
      imagen: "./src/assets/img/blog.PNG"
    },
  ];
  return recicleLibrary;
}