import React from "react";

const Internship = () => {
  return (
    <section className="px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Internship Opportunities
        </h2>
        <p className="text-center mb-10 text-lg">
          We're excited to announce two internship openings for passionate and
          motivated individuals looking to kickstart their careers in web
          development. If you're eager to learn, work on real projects, and grow
          with a supportive team — this opportunity is for you!
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Web Developer Internship */}
          <div className="p-6 rounded-xl shadow-md border border-gray-800 bg-gray-900">
            <h3 className="text-xl font-semibold mb-2">
              1. Web Developer Internship
            </h3>
            <p className="text-sm italic text-gray-600 mb-4">
              Tech Stack: React.js, Next.js, Tailwind CSS
            </p>
            <h4 className="font-medium mb-1">What You'll Learn:</h4>
            <ul className="list-disc list-inside mb-4 text-sm">
              <li>Building and styling UIs with Tailwind CSS</li>
              <li>Developing dynamic components with React and Next.js</li>
              <li>Collaborating on real-world projects</li>
              <li>Version control with Git and GitHub</li>
            </ul>
            <h4 className="font-medium mb-1">Requirements:</h4>
            <ul className="list-disc list-inside text-sm">
              <li>Basic knowledge of HTML, CSS, and JavaScript</li>
              <li>Familiarity with React.js is a plus</li>
              <li>Willingness to learn and grow continuously</li>
            </ul>
          </div>

          {/* WordPress Developer Internship */}
          <div className="p-6 rounded-xl shadow-md border border-gray-800 bg-gray-900">
            <h3 className="text-xl font-semibold mb-2">
              2. WordPress Developer Internship
            </h3>
            <h4 className="font-medium mb-1">What You'll Learn:</h4>
            <ul className="list-disc list-inside mb-4 text-sm">
              <li>Setting up and configuring WordPress themes and plugins</li>
              <li>Customizing themes</li>
              <li>Best practices for performance, SEO, and security</li>
              <li>Working on client websites and internal projects</li>
            </ul>
            <h4 className="font-medium mb-1">Requirements:</h4>
            <ul className="list-disc list-inside text-sm">
              <li>Basic understanding of WordPress dashboard</li>
              <li>Familiarity with themes and plugins</li>
              <li>Curiosity to explore and implement new ideas</li>
            </ul>
          </div>
        </div>

        {/* Perks & Apply */}
        <div className="mt-10 text-center">
          <h4 className="text-lg font-semibold mb-2">Perks:</h4>
          <ul className="list-disc list-inside inline-block text-left mb-6 text-sm">
            <li>Flexible working hours</li>
            <li>Certificate of completion</li>
            <li>Opportunity to work on live projects</li>
            <li>Mentorship and career guidance</li>
          </ul>
          <p className="mb-2 text-sm">
            Apply now and take your first step into the professional world of
            web development!
          </p>
          <p className="text-sm">
            To Apply: Send your resume or portfolio to{" "}
            <a
              href="mailto:theyetinepal@gmail.com"
              className="text-blue-600 underline"
            >
              theyetinepal@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Internship;
