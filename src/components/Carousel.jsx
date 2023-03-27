import { useEffect } from "react";

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
      title: "project 1",
    },
    {
      title: "project 2",
    },
    {
      title: "project 3",
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
    <div className="carousel absolute w-screen h-1/2 overflow-hidden">
      <ul className="product-list flex h-full w-screen">
        {slides.map((slide) => (
          <li className="duration-500 product-item cursor-pointer bg-[#030303] h-full text-[#FCFCFC] p-4 mx-1">
            {slide.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
