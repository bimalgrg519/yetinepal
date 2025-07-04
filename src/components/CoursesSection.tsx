import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const courses = [
  {
    id: "web-development-basics",
    title: "Web Development Basics",
    description:
      "Start your coding journey with the fundamentals of web development.",
    imgPath: "/course1.png",
    duration: 1.5,
    price: 10000,
    mode: "Physical & Online Classes",
    mentor: {
      name: "Bimal Gurung",
      experience: "10+",
      pic: "/profile-pic.jpg"
    },
    fullDescription: "This course is designed for complete beginners who want to start their journey into the world of web development. You will learn how websites work and how to build responsive and interactive web pages using core technologies such as HTML, CSS, and JavaScript.",
    learn: [
      "HTML: Structuring web pages with semantic HTML elements",
      "CSS: Styling with Flexbox and Grid",
      "JavaScript: DOM manipulation and simple animations",
      "How to build a complete portfolio website",
      "Best practices in formatting",
      "Using browser developer tools for debugging",
    ],
    projects: [
      "Personal Portfolio Website",
      "Simple Calculator",
      "Rock Paper Scissors Game",
    ],
    who: [
      "Beginners looking to enter web development",
      "Anyone interested in building websites from scratch",
    ],
    benefits: [
      "Hands-on learning",
      "Certificate of completion",
      "Personalized mentoring support",
      "Small batch size for individual attention",
    ],
    nextStep: "Once you complete this course, you’ll be ready to move into more advanced topics such as MERN Stack or Mobile App Development."
  },
  {
    id: "mern-stack-development",
    title: "MERN Stack Development",
    description: "Build full-stack web applications using MongoDB, Express, React, and Node.js.",
    imgPath: "/course2.png",
    duration: 3,
    price: 18000,
    mode: "Physical & Online Classes",
    mentor: {
      name: "Bimal Gurung",
      experience: "10+",
      pic: "/profile-pic.jpg"
    },
    fullDescription: "This course takes your web development skills to the next level by introducing you to full-stack development using the powerful MERN stack — MongoDB, Express, React, and Node.js. You'll build modern, data-driven web applications from scratch.",
    learn: [
      "MongoDB: Designing and querying NoSQL databases",
      "Express.js: Building RESTful APIs",
      "React: Creating dynamic UIs with hooks and state management",
      "Node.js: Backend logic and server-side scripting",
      "Authentication and Authorization (JWT)",
      "Connecting frontend and backend with API calls"
    ],
    projects: [
      "Full-featured Blog App",
      "User Authentication System",
      "Task Manager App"
    ],
    who: [
      "Students who know HTML, CSS, and basic JavaScript",
      "Aspiring full-stack developers",
      "Anyone ready to move beyond frontend-only projects"
    ],
    benefits: [
      "Hands-on project development",
      "Job-ready skillset",
      "Mentoring and career guidance",
      "Code review and debugging sessions"
    ],
    nextStep: "After completing the MERN course, you’ll be able to build and deploy full-stack applications or dive deeper into DevOps, testing, or mobile development."
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Create mobile apps with React Native for Android and iOS.",
    imgPath: "/course3.png",
    duration: 1.5,
    price: 12000,
    mode: "Physical & Online Classes",
    mentor: {
      name: "Nabin Neupane",
      experience: "12+",
      pic: "/nabin-profile-pic.png"
    },
    fullDescription: "This course introduces you to React Native, a framework that lets you build native Android and iOS apps using JavaScript and React. You’ll learn how to build, test, and deploy mobile apps with real-world features.",
    learn: [
      "React Native components and styling",
      "Navigation and screen transitions",
      "Handling forms and user input",
      "Using APIs in mobile apps",
      "State management with hooks",
      "Deploying apps to Android/iOS"
    ],
    projects: [
      "To-Do Mobile App",
      "Weather App using API",
      "Mobile Portfolio App"
    ],
    who: [
      "Web developers looking to build mobile apps",
      "Students interested in cross-platform development",
      "Beginners who have completed the web development basics course"
    ],
    benefits: [
      "Build apps for both Android and iOS",
      "Project-based learning",
      "Mobile-specific mentoring and support",
      "Start freelancing or publishing apps"
    ],
    nextStep: "After this course, you can move into advanced native modules, animations, or publish your apps to Google Play and the App Store."
  }
  ,
];

const CoursesSection = () => {
  return (
    <section className="py-4">
      <h2 className="text-3xl font-bold mb-6">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden border-gray-800 hover:border-gray-900 cursor-pointer transition-all duration-500"
          // className="overflow-hidden border-gray-800 hover:bg-gray-650 cursor-pointer hover:scale-[102%] transition-all hover:shadow-glow-cyan"
          >
            <Link href={`courses/${course.id}`}>
              <CardContent className="p-0">
                <div className="relative h-48 rounded-t-lg">
                  <Image
                    src={course.imgPath}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt=""
                    className="object-cover w-auto h-auto brightness-[90%] hover:brightness-75 transition-all duration-500 ease-in-out"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">
                    {course.title}
                  </h3>
                  <p className="underline mb-2 block font-extralight hover:text-gray-400 transition-colors">
                    Read More
                  </p>
                  {/* <Link href="">Read More</Link> */}
                  <p className="font-extralight">
                    Duration: {course.duration} months
                  </p>
                </div>
                {/* <p className="text-gray-300 text-sm">{course.description}</p> */}
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
