import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-red-800 mb-8 text-center tracking-tight drop-shadow-lg">
        About Us
      </h1>
      <div className="bg-white/90 backdrop-blur-md border-l-8 border-red-800 shadow-xl rounded-lg p-8 mb-8">
        <p className="text-lg sm:text-xl text-gray-800 font-medium leading-relaxed text-center">
          <span className="text-red-900 font-bold">The Tuskegee Airmen Sacramento Chapter</span> is dedicated to preserving the legacy of the
          <span className="text-blue-900 font-semibold"> first Black military aviators in the U.S. Army Air Corps</span>.
          Through education, outreach, and community engagement, we honor their courage, excellence, and enduring impact on American history.
        </p>
      </div>
      {/* Large themed image at the bottom */}
      <div className="w-full mt-12 flex justify-center">
        <div className="relative w-full max-w-2xl h-[450px] rounded-lg overflow-hidden shadow-lg border-4 border-red-800 bg-black">
          <Image
            src="/images/statue.jpg"
            alt="Tuskegee Airmen Statue"
            fill
            style={{ objectFit: "contain" }}
            sizes="100vw"
            priority
          />
        </div>
      </div>
      {/* Add more about content here */}
    </div>
  );
} 