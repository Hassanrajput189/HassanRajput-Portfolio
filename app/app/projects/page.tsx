const projects = [
  {
    name: "KOA Detection System",
    image: "/koa.jpg",
    tech: ["TensorFlow", "Keras", "OpenCV", "YOLOv8", "React", "FastAPI", "MongoDB"],
    points: [
      "Fine-tuned DenseNet121 for 3-class KL grading (KL0–1, KL2–3, KL4): 83.78% validation accuracy.",
      "YOLOv8 ROI detector crops the knee before grading: 0.995 mAP@50.",
      "Full-stack app with ScoreCAM heatmaps (React + Tailwind, FastAPI + Pydantic, MongoDB).",
    ],
  },
  {
    name: "Nail Disease Detection System",
    image: "/nail.jpg",
    tech: ["TensorFlow", "Keras", "React", "FastAPI"],
    points: [
      "Binary CNN for nail-disease detection: 98.64% validation accuracy.",
      "Second CNN for multi-class classification: 91.07% validation accuracy, forming a two-stage pipeline.",
      "React frontend consuming a FastAPI backend that serves both classifiers via REST.",
    ],
  },
  {
    name: "Typing Clash",
    image: "/TypingClash.png",
    url: "https://github.com/Hassanrajput189/TypingClash.git",
    tech: ["MERN", "Tailwind CSS", "Socket.io"],
    points: [
      "Real-time multiplayer typing game supporting 4 users via socket sessions.",
      "Increased engagement by 40% during a hackathon with competitive, stats-based gameplay.",
    ],
  },
];

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Projects</h1>
      <p className="mt-3">Computer vision systems and the apps built around them.</p>
      <div className="mt-10 space-y-12">
        {projects.map((p) => (
          <article key={p.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt={`${p.name} screenshot`} className="w-full aspect-[2/1] object-cover object-top rounded-lg border border-slate-200" />
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-semibold text-slate-900">{p.name}</h2>
              {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">GitHub →</a>}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">{t}</span>)}
            </div>
            <ul className="mt-4 space-y-1.5 list-disc pl-5 text-[15px] leading-relaxed">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
