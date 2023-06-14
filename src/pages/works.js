import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "@/components/Carousel";

export default function Works() {
  const [mouseX, setMouseX] = useState(-10);
  const [mouseY, setMouseY] = useState(-10);
  const [enlarged, setEnlarged] = useState(false);
  const [opac, setOpac] = useState(0);
  useEffect(() => {
    const mouse = document.querySelector(".mouse");
    addEventListener("mousemove", (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);

      const result = getComputedStyle(event.target).getPropertyValue("cursor");
      if (result == "pointer") {
        mouse.style.height = "20px";
        mouse.style.width = "20px";
        setEnlarged(true);
      } else {
        mouse.style.height = "10px";
        mouse.style.width = "10px";
        setEnlarged(false);
      }
    });
    const title = document.querySelector(" .title");
    const cont = document.querySelector(" .containment");
    const copyright = document.querySelector(".copyright");
    const wall = document.querySelector(".wall");
    title.style.position = "relative";
    cont.style.left = "50%";
    cont.style.top = "50%";
    cont.style.transform = "translate(-50%, -50%)";
    cont.style.overflow = "hidden";
    title.style.transform = "translate(0%, -100%)";
    setTimeout(() => {
      title.style.transform = "translate(0, 0)";
    }, 500);
    setTimeout(() => {
      title.style.position = "relative";
      cont.style.transform = "translate(0, 0)";
      cont.style.top = "0";
      cont.style.left = "0";
    }, 1000);
    setTimeout(() => {
      cont.style.overflow = "visible";
      copyright.style.transform = "translate(0, 0)";
      wall.style.opacity = "0";
      wall.style.visibility = "none";
      setOpac(1);
    }, 1500);
  }, []);

  // let items = [
  //   {
  //     title: "project1",
  //     image: 
  //   },
  //   {
  //     title: "project2",
  //     image: 
  //   },
  //   {
  //     title: "project3",
  //     image: 
  //   },
  // ];
  return (
    <>
      <Head>
        <title>Works</title>
        <meta
          name="description"
          content="We are a website development agency that provides services to those who want to increase and improve their business's online reach."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Woxels Logo.png" />
      </Head>
      <main className="relative text-[#030303] bg-[#FCFCFC] h-screen w-screen overflow-hidden">
        <div
          style={{
            transform: `translate3d(${
              (enlarged && mouseX - 10) || mouseX - 5
            }px, ${(enlarged && mouseY - 10) || mouseY - 5}px, 0)`,
            pointerEvents: "none",
            userSelect: "none",
            mixBlendMode: "difference",
            zIndex: "100000000",
          }}
          className={`mouse h-[10px] w-[10px] bg-[#FCFCFC] rounded-full duration-[50ms] absolute`}
        />
        <Nav Works={true} opacity={opac} />
        <div className="duration-500 ml-[20px] absolute top-[50%] left-[50%] mt-[28px] w-min z-[1000000] containment">
          <h1
            className="duration-500 absolute translate-y-[-100%] 4k:text-[480px] 2k:text-[420px] hd:text-[360px] 2xl:text-[320px] xl:text-[280px] lg:text-[230px] md:text-[160px] sm:text-[120px] text-[60px] uppercase title mb-[-20px] z-[10]"
            style={{ pointerEvents: "none", userSelect: "none" }}
          >
            Works
          </h1>
        </div>
        <Carousel />
        <div className="overflow-hidden absolute bottom-0 left-0 ml-[20px] mb-[20px] md:text-[14px] text-[10px] z-[100]">
          <p className="translate-y-[100%] duration-500 copyright z-[100001]">
            &copy; Woxels 2023
          </p>
        </div>
      </main>
      <div className="wall w-screen absolute h-screen top-0 left-0 z-[100000] bg-[#FCFCFC] duration-500"></div>
    </>
  );
}
