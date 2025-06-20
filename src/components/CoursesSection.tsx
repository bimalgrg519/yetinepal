import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Basics",
      description:
        "Start your coding journey with the fundamentals of web development. Build responsive websites and learn how the web works from scratch.",
      imgPath: "/course1.png",
      duration: 1.5,
    },
    {
      id: 2,
      title: "MERN Stack Development",
      description: "Build complete web applications",
      imgPath: "/course2.png",
      duration: 3,
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Create mobile apps with React Native",
      duration: 1.5,
      imgPath: "/react-native.png",
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
            <CardContent className="p-0">
              <div className="relative h-48 rounded-t-lg">
                <Image
                  src={course.imgPath}
                  fill
                  alt=""
                  className="object-contain grayscale-[50%]"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {course.title}
                </h3>
                <a href="" className="underline mb-2 block font-extralight">
                  Read More
                </a>
                <p className="font-extralight">
                  Duration: {course.duration} months
                </p>
              </div>
              {/* <p className="text-gray-300 text-sm">{course.description}</p> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
