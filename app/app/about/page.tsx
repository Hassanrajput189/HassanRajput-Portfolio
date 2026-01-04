"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutCard from "../components/AboutCard";

const content = `A skilled web developer with expertise in creating dynamic, responsive, and visually appealing websites and applications 🌐💻. Proficient in front-end technologies such as HTML, CSS, and JavaScript 🖌️✨, as well as popular frameworks like React and Next.js ⚛️📦. Possesses a strong understanding of back-end development and database management 🛠️📊, ensuring seamless integration between front-end and server-side components 🔄.

Committed to writing clean, maintainable code 📝 and implementing best practices to optimize performance 🚀 and user experience 🌟. Experienced in collaborating with designers 🎨, product managers 📋, and other developers 🤝 to deliver high-quality, user-centric web solutions 💡🌍.`;

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Express", "Mongo", "Node", "Git", 
  "TypeScipt", "Next",
];

const whyMe=`
1️⃣ I have a comprehensive grasp of programming fundamentals, including HTML, CSS, JavaScript, React, and Tailwind CSS 🌐🎨. With these skills, I efficiently develop and design modern, highly responsive web applications that meet today's design and functionality standards 📱💻.

2️⃣ My strong problem-solving skills enable me to address complex challenges and devise innovative solutions 🧠🔍. I enjoy breaking down issues, evaluating different approaches, and implementing the most effective solutions for seamless functionality ⚙️✅.

3️⃣ I am a quick learner with an adaptable approach to new technologies 🚀📚. Staying up-to-date with the latest trends in web development excites me, as I continually expand my knowledge and skills to remain at the forefront of the field 🔄📈.

4️⃣ I am skilled in using version control systems like Git for efficient code management and collaboration 🤝🔧. Through clean coding practices, strategic branching, and effective conflict resolution, I foster a smooth and organized development workflow 🌟📂.
`

const AboutPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="my-10 flex flex-col items-center justify-center gap-10 flex-grow">
        <div className="flex flex-col gap-16 items-center ">
          <AboutCard name="About Me" desc={content} />
          <AboutCard name="Skills" tech={skills} />
          <AboutCard name="Why Me" desc={whyMe} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
