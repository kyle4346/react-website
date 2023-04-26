import { Orbitron } from "next/font/google";
import Script from "next/script";
import SplitType from "split-type";
import { useEffect } from "react";
import gsap from "gsap";


const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  //Title Animation code from Design Course https://www.youtube.com/watch?v=va1RrFr-gms
  useEffect(() => {
    const myText = new SplitType("#my-text");
    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1
    })
  }, []);
  return (
    <main className={orbitron.className}>
      <h1 className="title_name" id="my-text">
        Kyle Cortez
      </h1>
    </main>
  );
}
