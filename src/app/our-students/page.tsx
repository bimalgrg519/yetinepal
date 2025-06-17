import Image from "next/image";

export default function StudentGallery() {
    return (
        <section className="pt-16 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Array(5).fill("").map((_, index) => (
                    <div
                        key={index}
                        className="relative aspect-[16/12] rounded-lg overflow-hidden shadow-lg border border-gray-600"
                    >
                        <Image
                            src={`/students/${index + 1}.jpg`}
                            alt={`Student ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover grayscale-[10%] hover:grayscale-0 transition duration-500"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

