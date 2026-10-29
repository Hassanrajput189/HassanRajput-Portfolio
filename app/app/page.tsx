import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills: Record<string, string[]> = {
  "Machine Learning & CV": ["TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "YOLOv8", "Hugging Face"],
  "Data": ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  "Web & Deployment": ["FastAPI", "Streamlit", "React", "Next.js", "Tailwind CSS", "MERN", "MySQL"],
  "Tools": ["Git / GitHub"],
};

const experience = [
  ["Zetsol Tech", "Aug – Sep 2026"],
  ["YoungDev", "Intern, 1 month"],
  ["IEEE CS Society", "Web Director, 4 months"],
];

const h2 = "text-sm font-semibold uppercase tracking-wide text-slate-400 mb-4";

export default function Home() {
  return (
    <section className="space-y-12">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-8">
        <div className="flex-1">
          <p className="text-sm text-blue-600 font-medium mb-3">AI Engineer · Computer Vision</p>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Hi, I&apos;m Hassan Rajput.</h1>
          <p className="mt-5 text-lg leading-relaxed">
            I build deep learning models for medical image analysis and ship them as full-stack apps.
            Currently finishing my degree at MUET with a final year project on knee osteoarthritis grading.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/profile.png" alt="Hassan Rajput" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border border-slate-200" />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Link href="/projects" className="px-5 py-2.5 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-700">View projects</Link>
        <a href="/Hassan_Rajput_Resume.pdf" download className="px-5 py-2.5 rounded-md border border-slate-300 text-sm font-medium hover:bg-slate-50">Download resume</a>
        <a href="https://github.com/Hassanrajput189" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-slate-500 hover:text-slate-900"><FaGithub size={20} /></a>
        <a href="https://www.linkedin.com/in/muhammad-hassan-rajput/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-slate-500 hover:text-slate-900"><FaLinkedin size={20} /></a>
      </div>

      <div>
        <h2 className={h2}>Skills</h2>
        <div className="space-y-4">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="sm:flex gap-4">
              <div className="sm:w-48 shrink-0 text-sm font-medium text-slate-900 mb-1.5 sm:mb-0">{group}</div>
              <div className="flex flex-wrap gap-2">
                {items.map((sk) => <span key={sk} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">{sk}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className={h2}>Experience</h2>
        <ul className="divide-y divide-slate-100">
          {experience.map(([org, role]) => (
            <li key={org} className="flex justify-between py-3 text-sm"><span className="font-medium text-slate-900">{org}</span><span className="text-slate-500">{role}</span></li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className={h2}>Education</h2>
        <ul className="divide-y divide-slate-100 text-sm">
          <li className="flex justify-between py-3"><span className="font-medium text-slate-900">Mehran University of Engineering and Technology</span><span className="text-slate-500">CGPA 3.2</span></li>
          <li className="flex justify-between py-3"><span className="font-medium text-slate-900">Excellence College for Boys (XII)</span><span className="text-slate-500">87.8%, 2022</span></li>
        </ul>
      </div>
    </section>
  );
}
