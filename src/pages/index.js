/* eslint-disable @next/next/no-img-element */
import { Orbitron } from "next/font/google";
import SplitType from "split-type";
import { useEffect } from "react";
import gsap from "gsap";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import url from "./kyle-cortez.png";

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

    // gsap.to(".green", {
    //   x: 200,
    //   duration: 5,
    //   rotation: 360,
    //   backgroundColor: "#F5F9FD",
    //   repeat: 2,
    //   yoyo: true,
    // });

    const hiddenElements = document.querySelectorAll(".hid");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
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
      <nav className="menu">
        <h1 className="title_name" id="my-text">
          Kyle Cortez
        </h1>
      </nav>

      {/* <div className="green"></div> */}

      <section id="main">
        <Image src={url} alt=" " priority={true} className="main-image" />
        <div className="centered">
          <ul className="typewriter-list">
            <li className="text1">
              <h3 className="typewriter-text1">Software Engineer</h3>
            </li>
            <li className="text2">
              <h3 className="typewriter-text2">Web Developer</h3>
            </li>
            <li className="text3">
              <h3 className="typewriter-text3">Circuit Designer</h3>
            </li>
            <li className="text4">
              <h3 className="typewriter-text4">Entrepreneur</h3>
            </li>
          </ul>
        </div>
      </section>
      {/* https://www.characterlives.org/wp-content/uploads/2019/06/power-of-commitment.jpg */}

      <section className="skills">
        <div className="hid">
          <h3>Skills</h3>
          <div>
            <ul className="skills-grid">
              <li>
                React
                {/* https://pluspng.com/png-180026.html */}
                <img
                  src="https://pluspng.com/img-png/react-logo-png-js-logo-react-react-js-icon-512x512.png"
                  alt="React Logo PNG"
                />
              </li>
              <li>
                Vue
                {/* Icon used through icons8.com */}
                <img
                  src="https://img.icons8.com/color/120/vue-js.png"
                  alt="Vue"
                />
              </li>
              <li>
                Arduino
                {/* Icon used through iconarchive.com  */}
                <img
                  src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/128/arduino-icon.png"
                  alt="Arduino"
                />
              </li>
              <li>
                Multisim
                {/* Icon used through file-extensions.org */}
                <img
                  src="https://www.file-extensions.org/imgs/app-icon/128/5484/ni-multisim-icon.png"
                  alt="Multisim"
                />
              </li>
              <li>
                AWS
                {/* Icon used through iconarchive.com */}
                <img
                  src="https://icons.iconarchive.com/icons/uiconstock/socialmedia/128/AWS-icon.png"
                  alt="AWS"
                />
              </li>
              <li>
                Javascript
                {/* Icon used through icon-library.com */}
                <img
                  src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-13.jpg"
                  alt="Javascript"
                />
              </li>
              <li>
                Unity
                {/*  Icons used through iconfinder.com */}
                <img
                  src="https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Unity.png"
                  alt="Unity"
                />
              </li>
              <li>
                SQL
                {/* Icons used through th.bing.com */}
                <img
                  src="https://th.bing.com/th/id/R.d419fd602ff60fa553e98385e6e61cbf?rik=opjDU6QqRVKiiw&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery%2fn1204014.png&ehk=sRwCSnsZ6QBjZyl9HQ8r03KYMlIx6xThHiscLWNpbiQ%3d&risl=&pid=ImgRaw&r=0"
                  alt="AWS"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hid">
        <div className="logos">
          <div className="logo">
            <h3>Commitment</h3>
            <p>
              Learning multiple programming languages and designing complex
              circuits throughout my career both in academia and personally is
              what inspires me to keep moving forward, despite the hardships
              that may come
            </p>
          </div>
          <div className="logo">
            <h3>Ambitious</h3>
            <p>
              My passion to become a tech entrepreneur is a dream I&apos;ve had
              since I was young. Turning my ideas into something that people can
              use to help themselves is what I pride myself in doing no matter
              the outcome. The COVID pandemic has truly tested my wits but
              I&apos;m glad to still be working on myself after a while.
            </p>
          </div>
          <div className="logo">
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

      <section className="contact ">
        <div className="hid contact">
          <div>
            <h3>Contact Info</h3>
            <p className="text-left">
              <br></br>
              <br></br>
              Address: Houston, Texas
              <br></br>
              <br></br>
              Email: kyle4346@gmail.com
              <br></br>
              <br></br>
              Phone Number: +1 832 542 1275
            </p>
          </div>
          <div className="w-[50vw]">
            <h3>Contact Me</h3>
            <br />
            <form>
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="  Name"
                  className="mr-[10%] w-[45%]"
                />
                <input
                  type="text"
                  id="email"
                  placeholder="  Email Address"
                  className="w-[45%]"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  placeholder="  Subject"
                  className="w-full"
                />
              </div>
              <div>
                <textarea
                  id="Message"
                  placeholder="  Message"
                  className="w-full min-h-[5vh] max-h-[35vh]"
                  rows={4}
                />
              </div>
              <div>
                <input type="submit" placeholder="submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
