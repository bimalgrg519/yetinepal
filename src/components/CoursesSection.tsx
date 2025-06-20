import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Basics",
      description:
        "Start your coding journey with the fundamentals of web development. Build responsive websites and learn how the web works from scratch.",
      imgPath: "/course1.png",
      duration: 1.5,
      link: "/courses/web-development-basics",
    },
    {
      id: 2,
      title: "MERN Stack Development",
      description: "Build complete web applications",
      imgPath: "/course2.png",
      duration: 3,
      link: "/courses/web-development-basics",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Create mobile apps with React Native",
      duration: 1.5,
      imgPath: "/react-native.png",
      link: "/courses/web-development-basics",
    },
  ];

  return (
    <section className="py-4">
      <h2 className="text-3xl font-bold text-white mb-6">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden border-gray-800 hover:bg-gray-650 cursor-pointer hover:scale-[102%] transition-all hover:shadow-glow-cyan"
          >
            <Link href={course.link}>
              <CardContent className="p-0">
                <div className="relative h-48 rounded-t-lg">
                  <Image
                    src={course.imgPath}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt=""
                    className="object-cover grayscale-[50%] w-auto h-auto"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="underline mb-2 block font-extralight">
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
