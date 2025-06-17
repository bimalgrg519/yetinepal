"use client";

const mentorshipDescription = `This 1-on-1 mentorship program is designed for individuals who want personalized guidance to fast-track their learning and career growth in web or app development. Whether you're a complete beginner or looking to sharpen specific skills, you’ll receive tailored support based on your goals, pace, and learning style.`;

const mentorshipBenefits = [
  "Direct access to your mentor for questions, feedback, and guidance",
  "Custom learning plan based on your current level and goals",
  "Code reviews and hands-on project assistance",
  "Mock interviews and portfolio preparation help",
  "Flexible session timing to match your schedule",
  "Support with real-world projects and freelance gigs",
];

const mentorshipPrograms = [
  {
    title: "Basic Web Development",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "MERN Stack Development",
    stacks: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "DevOps & Deployment",
    stacks: ["Docker", "GitHub Actions", "AWS", "CI/CD"],
  },
  {
    title: "UI/UX Design",
    stacks: ["Figma", "Wireframing", "Design Systems"],
  },
  {
    title: "Python Programming",
    stacks: ["Python", "Flask", "Django", "Automation"],
  },
  {
    title: "Flutter Mobile Development",
    stacks: ["Flutter", "Dart", "Firebase", "Cross-Platform"],
  },
];

export default function Mentorship() {
  return (
    <div className="pt-12 px-6">
      <h2 className="text-5xl font-semibold mb-3 border-b border-gray-600 pb-1">
        1-on-1 Mentorship Program
      </h2>
      <p className="text-gray-300 mb-4">{mentorshipDescription}</p>

      <ul className="list-none pl-0 space-y-2 text-gray-300">
        {mentorshipBenefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✔</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <section>
        <h2 className="text-2xl mt-8 font-semibold mb-4 border-b border-gray-600 pb-1">
          Mentorship Programs You Can Join Today
        </h2>
        <ul className="space-y-4 text-gray-300">
          {mentorshipPrograms.map((program, idx) => (
            <li key={idx}>
              <p className="font-semibold mb-1">{program.title}</p>
              <div className="flex flex-wrap gap-2">
                {program.stacks.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-200 px-2 py-0.5 rounded-full text-xs font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-8">
        <p className="text-gray-400 mt-6 mb-2">
          Have questions or want to enroll? Send us a message and we’ll get back
          to you shortly.
        </p>

        <button
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md transition"
          onClick={() => {
            window.open("https://wa.me/9779700886505", "_blank");
          }}
        >
          Message Us on WhatsApp
        </button>
      </div>
    </div>
  );
}
