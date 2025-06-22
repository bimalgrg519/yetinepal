import React from "react";
import { courses } from "../../../components/CoursesSection"
import { notFound } from "next/navigation";
import Image from 'next/image'

export function generateStaticParams() {
  return courses.map(course => ({
    id: course.id
  }))
}

export default async function CoursePage({
  params,
}: {
  params: {
    id: string
  }
}) {
  const { id } = await params;

  const course = courses.find(c => c.id === id);

  if (!course) return notFound();

  const { title, description, duration, imgPath, price, mode, mentor: { name, experience }, fullDescription, learn, projects, who, benefits, nextStep, } = course;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 rounded-xl shadow-lg">
      <div className="flex flex-col justify-center items-center border-b border-gray-600 pb-12">
        <h1 className="text-5xl font-bold  drop-shadow">{title}</h1>
        <code className="bg-black/[.05] mt-4 text-[#d2691e] text-center dark:bg-white/[.1] px-2 py-0.5 rounded font-semibold">
          {description}
        </code>
        <div className="table border-collapse mt-10">
          <div className="table-row">
            <p className="font-bold table-cell border border-gray-500 px-4 py-2">{duration} months</p>
            <p className="font-bold table-cell border border-gray-500 px-4 py-2">{price}rs</p>
            <p className="font-bold table-cell border border-gray-500 px-4 py-2">{mode}</p>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-10">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Course Image Section */}
          <div className="w-full sm:w-[70%] h-52 relative rounded-lg overflow-hidden border border-gray-600 shadow-md">
            <Image
              src={imgPath}
              alt="Web Development Course"
              fill
              sizes="(max-width: 640px) 100vw, 70vw"
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
                sizes="80px"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold text-white">{name}</p>
              <p className="text-sm text-gray-400">{experience} years experience</p>
              <p className="text-sm text-gray-400 italic">Lead Mentor</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-1">Course Description</h2>
          <p className="leading-relaxed text-gray-300">{fullDescription}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-1">What You'll Learn</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            {
              learn?.map((l, i) => (
                <li key={i}>{l}</li>
              ))
            }
            {/* <li><strong>HTML:</strong> Structuring web pages with semantic HTML elements</li>
            <li><strong>CSS:</strong> Styling with CSS, responsive design, Flexbox, and Grid</li>
            <li><strong>JavaScript:</strong> Interactivity, variables, functions, DOM manipulation, events, and simple animations</li>
            <li>How to build a complete portfolio website from scratch</li>
            <li>Best practices in code formatting and organization</li>
            <li>Using browser developer tools for debugging</li> */}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-1">Projects You'll Build</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            {
              projects?.map((p, i) => (
                <li key={i}>{p}</li>
              ))
            }
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-1">Who is this course for?</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            {
              who?.map((w, i) => (
                <li key={i}>{w}</li>
              ))
            }
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-1">Benefits</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            {
              benefits?.map((b, i) => (
                <li key={i}>{b}</li>
              ))
            }
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-1">Next Step</h2>
          <p className="text-gray-300">
            {
              nextStep
            }
          </p>
        </div>
      </div>
    </div>
  );
};

