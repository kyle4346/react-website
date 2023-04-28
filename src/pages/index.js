import { Orbitron } from "next/font/google";
import SplitType from "split-type";
import { useEffect } from "react";
import gsap from "gsap";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

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

    const hiddenElements = document.querySelectorAll(".hid");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  // <ReactPlayer
  //   url="https://vimeo.com/460600541"
  //   playing={true}
  //   loop={true}
  //   controls={false}
  //   muted={true}
  //   style={{
  //     minWidth: "50%",
  //     position: "absolute",
  //   }}
  // />;
  //https://www.youtube.com/watch?v=ysz5S6PUM-U
  return (
    <main className={orbitron.className}>
      <h1 className="title_name" id="my-text">
        Kyle Cortez
      </h1>
      {/* <div className="green"></div> */}

      <section>
        <div className="typewriter-wrapper">
          <ul className="typewriter-list">
            <li className="typewriter-text"><span>Software Engineer</span></li>
            {/* <li className="typewriter-text"><span>Software Developer</span></li>
            <li className="typewriter-text"><span>Circuit Designer</span></li>
            <li className="typewriter-text"><span>Entrepreneur</span></li> */}
          </ul>
        </div>
      </section>

      <section className="hid">
        <div className="logos">
          <div className="logo hid">
            <h3>Commitment</h3>
            <Image
              src="https://www.characterlives.org/wp-content/uploads/2019/06/power-of-commitment.jpg"
              alt="Work Hard, Play Hard"
              width="100"
              height="100"
              className="image"
            />
            <p>
              Learning multiple programming languages and designing complex
              circuits throughout my career both in academia and personally is
              what inspires me to keep moving forward, despite the hardships
              that may come
            </p>
          </div>
          <div className="logo hid">
            <h3>Ambitious</h3>
            <p>
              My passion to become a tech entrepreneur is a dream I&apos;ve had
              since I was young. Turning my ideas into something that people can
              use to help themselves is what I pride myself in doing no matter
              the outcome. The COVID pandemic has truly tested my wits but
              I&apos;m glad to still be working on myself after a while.
            </p>
          </div>
          <div className="logo hid">
            <h3>Goal-Oriented</h3>
            <p>
              I always keep myself focused at the task at hand and ensure that
              it is done in a timely-manner. From developing web-apps to
              designing circuits, I make sure that my tasks are done on or
              before it&apos;s due. Everyone&apos;s had their ups and downs but
              if the going gets tough, I work harder.
            </p>
          </div>
        </div>
      </section>

      <section className="hid">
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

      <section className="hid">
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
