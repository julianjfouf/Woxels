import Image from "next/image";
import { useEffect } from "react";
import project1 from "../../public/projects/danos project 1 image.jpg";
import project2 from "../../public/projects/project 5 Image.jpg";
import project3 from "../../public/projects/Project 4 Image.jpg";

// // export default function Carousel() {
// //   const slides = [
// //     {
// //       title: "project 1",
// //     },
// //     {
// //       title: "project 2",
// //     },
// //     {
// //       title: "project 3",
// //     },
// //   ];
// //   return (
// //     <div className="absolute bottom-[20px] mx-1 w-screen h-1/2 flex">
// //   {slides.map((slide) => (
// //     <div className="w-1/3 h-full bg-slate-900 text-[#FCFCFC] p-4 m-1">
// //       {slide.title}
// //     </div>
// //   ))}
// // </div>
// //   );
// // }

export default function Carousel() {
  const slides = [
    {
      title: "Dano's Detailing",
      image: project1,
      desc: "Local Car Detailing Business Multi-Page Informational Website With Clean Animations",
      link: "https://danosdetailing.com/",
    },
    {
      title: "Malik's Tints",
      image: project2,
      desc: "Local Car Window Tinting Business Single-Page Informational Website With 3D Simulator and 3D Icons",
      link: "https://malikstints.com/",
    },
    {
      title: "Marble Run",
      image: project3,
      desc: "3D Desktop Game",
      link: "https://marblerun.vercel.app/",
    },
  ];

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const productList = document.querySelector(".product-list");

    // Clone the first few product items and append them to the end of the list
    const productItems = document.querySelectorAll(".product-item");
    const numItems = productItems.length;
    const numClones = slides.length; // Number of clones to create

    for (let i = 0; i < numClones; i++) {
      for (let j = 0; j < numItems; j++) {
        const clone = productItems[j].cloneNode(true);
        productList.appendChild(clone);
      }
    }
    productItems.forEach((product) => (product.style.transform = "scale(0)"));
    setTimeout(() => {
      productItems.forEach((product) => (product.style.transform = "scale(1)"));
    }, 1500);
  }, []);

  return (
    <div className="carousel absolute w-screen overflow-hidden z-[10000000]">
      <ul className="product-list flex w-screen z-[10000000]">
        {slides.map((slide, i) => (
          <a
            target="_blank"
            href={slide.link}
            key={i}
            className="duration-500 flex flex-col justify-between relative product-item cursor-pointer hover:brightness-75 z-[10000000] min-w-[480px] bg-[#030303] text-[#FCFCFC] p-4 mx-1"
          >
            <span className="block xs:text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">
              {slide?.title}
            </span>
            <Image
              src={slide?.image}
              className="absolute left-0 bottom-[50%] translate-y-[50%] right-0 object-cover"
            />
            <span className="block lg:text-lg">{slide?.desc}</span>
          </a>
        ))}
      </ul>
    </div>
  );
}
