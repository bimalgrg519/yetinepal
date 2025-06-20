import React, { memo, FC } from "react";
import Image from 'next/image'

interface WebDevelopmentProps { }

const WebDevelopment: FC<WebDevelopmentProps> = memo(() => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 rounded-xl shadow-lg">
      <div className="flex flex-col justify-center items-center border-b border-gray-600 pb-12">
        <h1 className="text-5xl font-bold  drop-shadow">Web Development Basics</h1>
        <code className="bg-black/[.05] mt-4 text-[#d2691e] dark:bg-white/[.1] px-2 py-0.5 rounded font-semibold">
          Start your coding journey with the fundamentals of web development
        </code>
        <div className="table border-collapse mt-10">
          <div className="table-row">
            <p className="font-bold table-cell border border-gray-500 px-4 py-2">1.5 months</p>
            <p className="font-bold table-cell border border-gray-500 px-4 py-2">1000rs</p>
            <p className="font-bold table-cell border border-gray-500 px-4 py-2">Physical & Online Classes</p>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-10">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Course Image Section */}
          <div className="w-full sm:w-[70%] h-52 relative rounded-lg overflow-hidden border border-gray-600 shadow-md">
            <Image
              src="/course1.png"
              alt="Web Development Course"
              fill
              className="object-cover grayscale-[30%] hover:grayscale-0 transition duration-500"
            />
          </div>

          {/* Instructor Card */}
          <div className="w-full sm:w-[30%] flex flex-col items-center text-center p-4 border border-gray-600 rounded-lg shadow-md">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-500">
              <Image
                src="/profile-pic.jpg"
                alt="Instructor Photo"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold text-white">Bimal Gurung</p>
              <p className="text-sm text-gray-400">10+ years experience</p>
              <p className="text-sm text-gray-400 italic">Lead Mentor</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-1">Course Description</h2>
          <p className="leading-relaxed text-gray-300">This course is designed for complete beginners who want to start their journey into the world of web development. You will learn how websites work and how to build responsive and interactive web pages using core technologies such as HTML, CSS, and JavaScript.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-1">What You'll Learn</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li><strong>HTML:</strong> Structuring web pages with semantic HTML elements</li>
            <li><strong>CSS:</strong> Styling with CSS, responsive design, Flexbox, and Grid</li>
            <li><strong>JavaScript:</strong> Interactivity, variables, functions, DOM manipulation, events, and simple animations</li>
            <li>How to build a complete portfolio website from scratch</li>
            <li>Best practices in code formatting and organization</li>
            <li>Using browser developer tools for debugging</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-1">Projects You'll Build</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Personal Portfolio Website</li>
            <li>Simple Calculator</li>
            <li>Rock Paper Scissors Game</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-1">Who is this course for?</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Beginners looking to enter web development</li>
            <li>Anyone interested in building websites from scratch</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-1">Benefits</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Hands-on learning</li>
            <li>Certificate of completion</li>
            <li>Personalized mentoring support</li>
            <li>Small batch size for individual attention</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-1">Next Step</h2>
          <p className="text-gray-300">Once you complete this course, you’ll be ready to move into more advanced topics such as MERN Stack or Mobile App Development.</p>
        </div>
      </div>
    </div>
  );
});

export default WebDevelopment;
