import aguaLluvia from '../img/agualluvia.jpg';
import compostera from '../img/compostera-casera-3.jpg';
import detergentes from '../img/detergentes.jpg';
import paneles from '../img/paneles.jpg';
import vidrio from '../img/vidrio.jpg'

export const loader = () => {
    const blogs = [
        {
            id: 1,
            titulo: "Blog numero 1",
            date: "Jun 08 2022 20:25:18",
            image: vidrio,
            resumen: "Suspendisse congue eget arcu vitae bibendum. Nulla at iaculis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ante enim, mattis id lectus ut, dapibus laoreet erat. Suspendisse efficitur venenatis arcu id elementum. Mauris faucibus facilisis lorem in faucibus. Nunc iaculis nulla ac sapien tempus egestas. Sed pulvinar eleifend lectus, ut suscipit magna blandit ut."
        },
        {
            id: 2,
            titulo: "Blog numero 2",
            date: "Jul 16 2022 20:25:18",
            image: detergentes,
            resumen: "Suspendisse congue eget arcu vitae bibendum. Nulla at iaculis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ante enim, mattis id lectus ut, dapibus laoreet erat. Suspendisse efficitur venenatis arcu id elementum. Mauris faucibus facilisis lorem in faucibus. Nunc iaculis nulla ac sapien tempus egestas. Sed pulvinar eleifend lectus, ut suscipit magna blandit ut."
        },
        {
            id: 3,
            titulo: "Blog numero 3",
            date: "Aug 08 2022 20:25:18",
            image: compostera,
            resumen: "Suspendisse congue eget arcu vitae bibendum. Nulla at iaculis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ante enim, mattis id lectus ut, dapibus laoreet erat. Suspendisse efficitur venenatis arcu id elementum. Mauris faucibus facilisis lorem in faucibus. Nunc iaculis nulla ac sapien tempus egestas. Sed pulvinar eleifend lectus, ut suscipit magna blandit ut."
        },
        {
            id: 4,
            titulo: "Blog numero 4",
            date: "Sep 23 2022 20:25:18",
            image: aguaLluvia,
            resumen: "Suspendisse congue eget arcu vitae bibendum. Nulla at iaculis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ante enim, mattis id lectus ut, dapibus laoreet erat. Suspendisse efficitur venenatis arcu id elementum. Mauris faucibus facilisis lorem in faucibus. Nunc iaculis nulla ac sapien tempus egestas. Sed pulvinar eleifend lectus, ut suscipit magna blandit ut."
        },
        {
            id: 5,
            titulo: "Blog numero 5",
            date: "Oct 30 2022 20:25:18",
            image: paneles,
            resumen: "Suspendisse congue eget arcu vitae bibendum. Nulla at iaculis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ante enim, mattis id lectus ut, dapibus laoreet erat. Suspendisse efficitur venenatis arcu id elementum. Mauris faucibus facilisis lorem in faucibus. Nunc iaculis nulla ac sapien tempus egestas. Sed pulvinar eleifend lectus, ut suscipit magna blandit ut."
        }
    ]
    return blogs;
}