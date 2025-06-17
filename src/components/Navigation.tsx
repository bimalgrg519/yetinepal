import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="bg-[#161618] border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            1-on-1 Mentorship
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Our Students
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Hiring
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
