import React from "react";
import { FaFacebook, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import Navbar from "../Navbar/Navbar";

const OurTeam = () => {
  const devData = [
    {
      name: "Nesar Ahmed",
      about:
        "I have been doing programming for the last 3 years. I started my journey seriously six months ago. Because I had a deep interest in web development and Programming in general. I am specialized in developing websites using React js, Express js, MongoDB, Node js, Javascript(ES6), and many other languages related to them. I have a strong foundation in HTML, CSS, Javascript(ES6), Tailwind CSS, Bootstrap, React js, Express js, and MongoDB, Node js, JSON web token (JWT), and many other tools related to them. I have completed several projects using these technologies. Now I am constantly learning new things and evolving every day..",
      githubURL: "https://github.com/nasar06",
      linkedin: "https://www.linkedin.com/in/abdullah757",
      photoURL: "https://i.ibb.co/CPrX7YN/Untitled-design.png",
    },
    {
      name: "Syed Abdul Hakim",
      about:
        "I have been doing programming for the last 3 years. I started my journey seriously six months ago. Because I had a deep interest in web development and Programming in general. I am specialized in developing websites using React js, Express js, MongoDB, Node js, Javascript(ES6), and many other languages related to them. I have a strong foundation in HTML, CSS, Javascript(ES6), Tailwind CSS, Bootstrap, React js, Express js, and MongoDB, Node js, JSON web token (JWT), and many other tools related to them. I have completed several projects using these technologies. Now I am constantly learning new things and evolving every day.",
      githubURL: "https://github.com/abdulhakim10",
      linkedin: "https://www.linkedin.com/in/abdullah757",
      photoURL: "https://i.ibb.co/6BN48Gy/abar-ami.jpg",
    },
    {
      name: "Nurul Islam",
      about:
        "Hello, this is Nurul Islam. , I am dedicated to my academic pursuits and strive to achieve my goals with determination and hard work. I am currently pursuing web development. I am passionate about learning and actively engage in academic and extracurricular activities to broaden my knowledge and skill set. In addition to my studies, I am involved in [insert clubs/organizations] and volunteer work. I value teamwork and collaboration and enjoy engaging in group projects and discussions. I am excited about the opportunities and challenges that university life presents, and I am committed to making the most of my education.I have a lot of experience with wordpress. I've completed some websites using WordPress like e-commerce, multi-vendor, education, etc.",
      githubURL: "https://github.com/webnur",
      linkedin: "https://www.linkedin.com/in/nurul-islam-a8ab9b175/",
      photoURL:
        "https://i.ibb.co/cJgY68t/Whats-App-Image-2023-02-27-at-12-27-23-AM.jpg",
    },
    {
      name: "Rayhan Howlader",
      about:
        "I have been doing programming for the last 3 years. I started my journey seriously six months ago. Because I had a deep interest in web development and Programming in general. I am specialized in developing websites using React js, Express js, MongoDB, Node js, Javascript(ES6), and many other languages related to them. I have a strong foundation in HTML, CSS, Javascript(ES6), Tailwind CSS, Bootstrap, React js, Express js, and MongoDB, Node js, JSON web token (JWT), and many other tools related to them. I have completed several projects using these technologies. Now I am constantly learning new things and evolving every day.",
      githubURL: "https://github.com/mdrayhanhowlader",
      linkedin: "https://www.linkedin.com/in/abdullah757",
      photoURL:
        "https://i.ibb.co/t2tC1jF/Whats-App-Image-2023-02-27-at-12-31-49-AM.jpg",
    },
    {
      name: "Mohiuddin Shimul",
      about:
        "Hello this is shimul. , I am dedicated to my academic pursuits and strive to achieve my goals with determination and hard work. I am currently pursue web development. I am passionate about learning and actively engage in academic and extracurricular activities to broaden my knowledge and skill set. In addition to my studies, I am involved in [insert clubs/organizations] and volunteer work. I value teamwork and collaboration, and enjoy engaging in group projects and discussions. I am excited for the opportunities and challenges that university life presents, and am committed to making the most of my education.",
      githubURL: "https://github.com/himel-shimul",
      linkedin: "https://www.linkedin.com/in/abdullah757",
      photoURL:
        "https://i.ibb.co/vqw1QXX/Whats-App-Image-2023-02-27-at-12-27-11-AM.jpg",
    },
    {
      name: "Abdullah Al-Mamun",
      about:
        "I am a “MERN Stack developer”, I like to develop web applications with MERN & many CSS components (Tailwind CSS, Bootstrap). I also feel comfort in team work. I have completed my BSc in CSE and have an experience of frontend development (1 Year) in a software company. I am always excited to explore new technologies.",
      githubURL: "https://github.com/jabir11757",
      linkedn: "https://www.linkedin.com/in/abdullah757",
      photoURL: "https://i.ibb.co/dLRGTcP/Untitled-design-3.png",
    },
  ];
  useTitle("Team");
  return (
    <div>
      <Navbar />
      {/* <div>
                <h1 className='text-2xl font-bold text-center my-2'>About Us</h1>
                <div className='lg:w-1/2 lg:mx-auto mx-6 my-4 shadow-2xl p-6 rounded-3xl'>
                    <p className='text-center'>

                    </p>
                </div>
            </div> */}
      <div>
        <h1 className="text-3xl font-bold text-blue-400 text-center mt-12">
          Our Team
        </h1>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 p-6">
          {devData.map((dev) => (
            <div className="hover:shadow-lg lg:grid lg:gap-6 lg:grid-cols-6 border-4 border-sky-50 rounded-lg p-4">
              <div className="flex items-center col-span-2">
                <img className="h-48 w-full" src={dev.photoURL} alt="" />
              </div>
              <div className="col-span-4">
                <div className="lg:flex ">
                  <div className="mx-4 flex lg:flex-col">
                    <div className="flex items-center justify-center text-blue-400 hover:text-orange-400 hover:bg-blue-100 my-2 lg:mx-0 mx-6 border rounded-full h-8 w-8">
                      <a href={dev.githubURL}>
                        <FaGithub className="" />
                      </a>
                    </div>
                    <div className="flex items-center justify-center text-blue-400 hover:text-orange-400 hover:bg-blue-100 my-2 lg:mx-0 mx-6 border rounded-full h-8 w-8">
                      <a href={dev.linkedin}>
                        <FaLinkedin />
                      </a>
                    </div>
                    <div className="flex items-center justify-center text-blue-400 hover:text-orange-400 hover:bg-blue-100 my-2 lg:mx-0 mx-6 border rounded-full h-8 w-8">
                      <FaFacebook />
                    </div>
                    <div className="flex items-center justify-center text-blue-400 hover:text-orange-400 hover:bg-blue-100 my-2 lg:mx-0 mx-6 border rounded-full h-8 w-8">
                      <FaGlobe />
                    </div>
                  </div>
                  <div>
                    <div className="flex lg:justify-start justify-center my-2">
                      <h1 className="text-blue-400 font-bold">{dev.name}</h1>
                    </div>
                    <div className="flex justify-center">
                      <small className="lg:text-start text-center">
                        {dev.about > 60
                          ? dev.about.slice(0, 60)
                          : dev.about.slice(0, 303) + "..."}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
