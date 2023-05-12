/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Orbitron } from "next/font/google";
import SplitType from "split-type";
import { useEffect } from "react";
import gsap from "gsap";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import url from "./static/kyle.png";
import url6 from "./static/smartsoft/smartsoft.png";
import url2 from "./static/smartsoft/autocad.png";
import url4 from "./static/smartsoft/circuits.png";
import url5 from "./static/smartsoft/interview.png";
import url3 from "./static/smartsoft/arm.png";
import url1 from "./static/smartsoft/group.png";
import url7 from "./static/construction.png";
import url8 from "./static/UIT.png";
import url9 from "./static/justice.png";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  //Title Animation code from Design Course https://www.youtube.com/watch?v=va1RrFr-gms
  useEffect(() => {
    let aboutMenav = document.querySelector("#aboutLink");
    let aboutMeID = document.querySelector("#aboutMe");
    aboutMenav.addEventListener("click", something, false);
    function something(e) {
      aboutMeID.scrollIntoView({ behavior: "smooth" });
    }

    let skillsNav = document.querySelector("#skillsLink");
    let skillsID = document.querySelector("#skills");
    skillsNav.addEventListener("click", skills, false);
    function skills(e) {
      skillsID.scrollIntoView({ behavior: "smooth" });
    }

    let contactNav = document.querySelector("#contactLink");
    let contactID = document.querySelector("#contact");
    contactNav.addEventListener("click", contacts, false);
    function contacts(e) {
      contactID.scrollIntoView({ behavior: "smooth" });
    }

    let timeNav = document.querySelector("#workLink");
    let timeclass = document.querySelector(".Timestart");
    timeNav.addEventListener("click", timelines, false);
    function timelines(e) {
      timeclass.scrollIntoView({ behavior: "smooth" });
    }

    const myText = new SplitType("#my-text");
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.2,
    });

    var slideIndex = 0;
    carousel();

    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {
        slideIndex = 1;
      }
      x[slideIndex - 1].style.display = "block";
      setTimeout(carousel, 5000); // Change image every 2 seconds
    }

    const hiddenElements = document.querySelectorAll(".hid");
    const menubar = document.querySelectorAll(".menu");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
        // else {
        //   entry.target.classList.remove("show");
        // }
      });
    });

    const menuObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (!entry.isIntersecting) {
          entry.target.classList.add("menu-move");
        }
      });
    });

    hiddenElements.forEach((el) => observer.observe(el));
    menubar.forEach((el) => menuObserver.observe(el));
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
      <Head>
        <title>Kyle Cortez</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <nav className="menu">
        <div className="title">
          {/* inspired by g.sap with css from ww3schools.com */}
          <Link href="/">
            <h1 className="title_name" id="my-text">
              Kyle Cortez
            </h1>
          </Link>
        </div>
        <div className="left-side w-[40vw]">
          <h3>
            <button id="aboutLink" className="text-center ">
              About Me
            </button>
          </h3>
          <h3>
            <button id="skillsLink" className="text-center">
              Skills
            </button>
          </h3>
        </div>

        <div className="right-side w-[40vw]">
          <h3>
            <button id="workLink" className="text-center">
              Work
            </button>
          </h3>
          <h3>
            <button id="contactLink" className="text-center">
              Contact
            </button>
          </h3>
        </div>
      </nav>

      {/* <div className="green"></div> */}

      <section id="main">
        <div className="w-full">
          <Image src={url} alt=" " priority={true} className="main-image" />
        </div>

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

      <section className="hid" id="aboutMe">
        <h3>About Me</h3>
        <p>
          Hi, my name is Kyle Cortez and I&apos;m a recent tech grad seeking a
          position in software engineering. In my freetime, I like participating
          in hackathons, learning about web development, or playing tennis at my
          University. Since graduation I&apos;ve engaged with entrepreneurs in
          the Houston area to learn more about how they growed their business
          and got their ideas off the ground. If you&apos;d like to know more
          about me, contact me below or in LinkedIn and I&apos;ll be happy to
          discuss more about my work
        </p>
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

      <section className="skills" id="skills">
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

      {/* Timeline code from OnlineITtuts Tutorials!! https://www.youtube.com/watch?v=CyI4sX4Ls4g */}

      {/* <!-- ----------------Main header start------------------- --> */}
      <header id="main_header" className="time Timestart">
        <div className="container">
          <h1>
            <i className="fa-solid fa-trophy"></i>Working Timeline
          </h1>
        </div>
      </header>
      {/* <!-- ----------------Main header close------------------- --> */}

      {/* <!-- ----------------Timeline start--------------------- --> */}
      <section id="timeline" className="time">
        <ul>
          <li>
            <div>
              <h3>
                2022 - Present: Red Labs Startup Accelerator
              </h3>
              {/* Slideshow code from ww3schools https://www.w3schools.com/w3css/w3css_slideshow.asp */}
              <Image className="mySlides IMG" src={url1} alt=" " />
              <Image className="mySlides IMG" src={url2} alt=" " />
              <Image className="mySlides IMG" src={url3} alt=" " />
              <Image className="mySlides IMG" src={url4} alt=" " />
              <Image className="mySlides IMG" src={url5} alt=" " />
              <Image className="mySlides IMG" src={url6} alt=" " />
              <p>
                Developed a medical device with a team of 5 called the RPMS
                (Remote Patient Monitoring System). <br />
                <br />
                It tracks patients vital signs such as blood pressure, O2 Sat,
                temperature, etc. to provide meaningful information to the
                provider depending on the patients chronic illness. <br />
              </p>
              {/* <br />
              <p>
                Company:
                <br />
                Smartsoft
                <br />
                <br />
                Members:
                <br />
                Kyle Cortez
                <br />
                Cecilia Obami
                <br />
                Kelvin Caducoy
                <br />
                Ever Chavez
                <br />
                Caleb Hairston
              </p> */}
            </div>
          </li>
          <li>
            <div>
              <h3>
                2022:
                <br />
                Construction Management App
              </h3>
              <Image className="IMG" src={url7} alt=" " />
              <p>I was a part of a 5 person team that developed the
                software for Piping International to digitize their pen and
                paper method and efficiently manage their construction projects.
                {/* <br />
                <br />
                They tasked us with helping them design a new system to manage
                the materials, contractors and phases for their housing projects
                and increase their efficiency. */}
              </p>
              {/* <br />
              <p>
                Project Manager:
                <br />
                Chad Johnson
                <br />
                <br />
                Assistant Project Manager:
                <br />
                Jose Zelaya
                <br />
                <br />
                Lead Database Developer
                <br />
                Noah Hendricks
                <br />
                <br />
                Lead Application Developer
                <br />
                Kyle Cortez
                <br />
                <br />
                Lead Support Analyst
                <br />
                Victory Nguyen
              </p> */}
              <br />
              <a href="https://cis-4375.vercel.app/" className="btn">
                View Project
              </a>
            </div>
          </li>
          <li>
            <div>
              <h3>
                2021:
                <br />
                University of Houston IT support
              </h3>
              <Image className="IMG" src={url8} alt=" " />
              <p>
                Assisted students, faculty, and staff to navigate their
                Cougarnet/MyUH accounts by performing tier 1 support through phone calls, online live
                chat messaging, or helping students at the front desk.
                {/* <br />
                <br />
                performed tier 1 support by answering phone calls, online live
                chat messaging, or helping students at the front desk.
                <br />
                <br />
                We are the first point of contact for anyone looking to
                troubleshoot their technology problems.
                <br />
                <br />
                Most of the problems we encounter include password resets, email
                update, software troubleshooting, wireless troubleshooting, and
                general campus navigation. */}
              </p>
              <br />
              <a href="https://uh.edu/infotech/" className="btn">
                View Webpage
              </a>
            </div>
          </li>
          <li>
            <div>
              <h3>
                2021:
                <br />
                Restoring Justice Intake Form Application
              </h3>
              <Image className="IMG" src={url9} alt=" " />
              <p>
                Developed an intake form application with a team of 3 people to
                help Restoring Justice fill out their clients information.
                <br />
                <br />
                Developed by Vue.js and uses MongoDB to store the
                data taken from the intake form filled out by their clients.
                Routing for requests utilized the Axios API and was stylized
                using Bootstrap.
              </p>
              {/* <br /> 
              <p>
                Members:
                <br />
                Kyle Cortez
                <br />
                Andres Pirela
                <br />
                Omar Martinez
              </p> */}
              <br />
              <a href="https://restoring-justice.vercel.app/" className="btn">
                View Project
              </a>
            </div>
          </li>
        </ul>
      </section>
      {/* <!-- ----------------Timeline close--------------------- --> */}

      <section className="contact" id="contact">
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
            <form action="https://formsubmit.co/smartsoft314@gmail.com" method="POST">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="  Name"
                  className="mr-[10%] w-[45%]"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="  Email Address"
                  className="w-[45%]"
                />
              </div>
              {/* <div>
                <input
                  type="text"
                  id="subject"
                  name="_subject"
                  placeholder="  Subject"
                  className="w-full"
                />
              </div> */}
              <div>
                <textarea
                  id="Message"
                  name="message"
                  placeholder="  Message"
                  className="w-full min-h-[5vh] max-h-[35vh]"
                  rows={4}
                />
              </div>
              <div>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
