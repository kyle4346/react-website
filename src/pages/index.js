import { Orbitron } from "next/font/google";
import SplitType from "split-type";
import { useEffect } from "react";
import gsap from "gsap";
import React from "react";
// import ReactPlayer from "react-player/youtube";
import dynamic from "next/dynamic";
// import videoFilePath from "../../public/particle-5187.mp4"

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  //Title Animation code from Design Course https://www.youtube.com/watch?v=va1RrFr-gms
  useEffect(() => {
    const myText = new SplitType("#my-text");
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.2,
    });

    gsap.to(".green", {
      x: 200,
      duration: 5,
      rotation: 360,
      backgroundColor: "#F5F9FD",
      repeat: 2,
      yoyo: true,
    });
  }, []);
  <ReactPlayer
    url="https://vimeo.com/460600541"
    playing={true}
    loop={true}
    controls={false}
    muted={true}
    style={{
      minWidth: "50%",
      position: "absolute",
    }}
  />;
  //https://www.youtube.com/watch?v=ysz5S6PUM-U
  return (
    <main className={orbitron.className}>
      <h1 className="title_name" id="my-text">
        Kyle Cortez
      </h1>
      {/* <div className="green"></div> */}

      <section className="hidden">
        <p>Software Engineer</p>
      </section>

      <section className="hidden">
        <h3>Dedication</h3>
        <p>
          Learning multiple programming languages and designing complex circuits
          throughout my career both in academia and personally is what inspires
          me to keep moving forward, despite the hardships that may come
        </p>
        <h3>Ambitious</h3>
        <p>
          My passion to become a tech entrepreneur is a dream I&apos;ve had
          since I was young. Turning my ideas into something that people can use
          to help themselves is what I pride myself in doing no matter the
          outcome. The COVID pandemic has truly tested my wits but I&apos;m glad
          to still be working on myself after a while.
        </p>
        <h3>Goal-Oriented</h3>
        <p>
          I always keep myself focused at the task at hand and ensure that it is
          done in a timely-manner. From developing web-apps to designing
          circuits, I make sure that my tasks are done on or before it&apos;s
          due. Everyone&apos;s had their ups and downs but if the going gets
          tough, I work harder.
        </p>
      </section>

      <section className="hidden">
        <h3>About Me</h3>
        <p>
          Hi, my name is Kyle Cortez and I&apos;m a recent tech grad currently
          seeking a position in software engineering or related position. In my
          freetime, I like participating in hackathons, making games, or play
          tennis at my University. Since graduation I&apos;ve been engaged with
          entrepreneurs in the Houston area to develop a medical device with my
          team and help people track their vital signs online without going to
          the hospital. If you&apos;d like to know more about me, contact me
          below or in LinkedIn and I&apos;ll be happy to discuss more about my
          work
        </p>
      </section>

      <section className="hidden">
        <h3>Resume</h3>
        <h4>Skills</h4>
        <p className="logo">
          React.js, Vue, Arduino, NI Multisim, Amazon AWS, Javascript, HTML &
          CSS, Unity, T-SQL, Wireshark, Customer Service
        </p>
      </section>
    </main>
  );
}
