import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background element - Option 2: Vintage Aviation Paper Map Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-amber-50 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-20"></div>
        
        {/* Subtle grid lines like an aviation map */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        {/* Red Tail accent */}
        <div className="absolute top-0 right-0 w-24 h-full bg-red-700 opacity-5"></div>
      </div>
      
      {/* Main content - your existing content */}
      <div className="grid grid-rows-[auto_1fr_auto] items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-transparent text-gray-800">
        <header className="w-full flex flex-col items-center sm:items-start gap-4">
          {/* Navigation Menu */}
          <nav className="w-full flex justify-center sm:justify-end mb-4">
            <ul className="flex gap-6 text-base font-semibold">
              <li>
                <Link href="/" className="text-red-800 hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-blue-800 hover:underline">Photo Gallery</Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-800 hover:underline">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-800 hover:underline">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Image
              src="/images/patch_1.jpg"
              alt="Tuskegee Airmen Sacramento Chapter Logo"
              width={80}
              height={80}
              priority
            />
            <h1 className="text-2xl sm:text-4xl font-bold text-red-800">Tuskegee Airmen</h1>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-800">The Original Sacramento Chapter</h2>
        </header>

        <main className="flex flex-col gap-12 w-full max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/images/patch.jpg"
              alt="Tuskegee Airmen in formation"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-2xl sm:text-4xl font-bold text-center px-4">
                Honoring the Legacy of America&apos;s First Black Military Aviators
              </h3>
            </div>
          </section>

          {/* About Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="border-l-8 border-red-800 bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    src="/images/redtail_1.jpg"
                    alt="Red Tail Icon"
                    width={32}
                    height={32}
                    className="rounded-full border border-red-800"
                  />
                  <h3 className="text-2xl font-extrabold text-red-800 tracking-tight drop-shadow">Our History</h3>
                </div>
                <p className="mb-4 text-gray-800 text-base sm:text-lg">
                  The <span className="font-bold text-red-900">Tuskegee Airmen</span> were the first Black military aviators in the U.S. Army Air Corps,
                  a precursor of the U.S. Air Force. Trained at Tuskegee Army Air Field in Alabama, they
                  flew more than <span className="font-semibold text-blue-900">15,000 individual sorties</span> in Europe and North Africa during World War II.
                </p>
                <p className="text-gray-800 text-base sm:text-lg">
                  The <span className="font-bold text-blue-900">Sacramento Chapter</span> preserves this proud legacy through education, community outreach,
                  and scholarship programs for the next generation of aviation pioneers.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[350px] relative rounded-lg overflow-hidden">
              <Image
                src="/images/mustang_1.jpg"
                alt="Historical photo of Tuskegee Airmen"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </section>

          {/* Programs Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/90 p-6 rounded-lg shadow-md backdrop-blur-sm">
              <div className="h-[150px] relative mb-4 rounded overflow-hidden">
                <Image
                  src="/images/group_1.jpg"
                  alt="Education programs"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h4 className="text-xl font-bold text-red-800 mb-2">Education</h4>
              <p>Preserving history through school visits, presentations, and historical exhibits.</p>
            </div>
            
            <div className="bg-white/90 p-6 rounded-lg shadow-md backdrop-blur-sm">
              <div className="h-[150px] relative mb-4 rounded overflow-hidden">
                <Image
                  src="/images/group_2.jpg"
                  alt="Scholarship programs"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h4 className="text-xl font-bold text-red-800 mb-2">Scholarships</h4>
              <p>Supporting the next generation of aviators through annual scholarship programs.</p>
            </div>
            
            <div className="bg-white/90 p-6 rounded-lg shadow-md backdrop-blur-sm">
              <div className="h-[150px] relative mb-4 rounded overflow-hidden">
                <Image
                  src="/images/history_1.jpg"
                  alt="Community outreach"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h4 className="text-xl font-bold text-red-800 mb-2">Community</h4>
              <p>Engaging with the Sacramento community through events, parades, and partnerships.</p>
            </div>
          </section>
        </main>

        <footer className="w-full mt-12 py-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/80 backdrop-blur-sm rounded-lg">
          <div className="flex items-center gap-2">
            <Image
              src="/images/redtail_1.jpg"
              alt="Tuskegee Airmen Sacramento Chapter"
              width={40}
              height={40}
            />
            <span>© {new Date().getFullYear()} Tuskegee Airmen - Sacramento Chapter</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-blue-800 hover:underline">Contact Us</a>
            <a href="#" className="text-blue-800 hover:underline">Events</a>
            <a href="#" className="text-blue-800 hover:underline">Donate</a>
          </div>  
        </footer>
      </div>
    </div>
  );
}

/* 
CHECKPOINT - Option 3: Military-Inspired Background
To revert to this option, replace the background element with:

<div className="fixed inset-0 -z-10">
  <div className="absolute inset-0 bg-neutral-100 opacity-95"></div>
  
  <div className="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] bg-[size:20px_20px]"></div>
  
  <div className="absolute top-0 left-0 w-full h-2 bg-blue-700"></div>
  <div className="absolute top-2 left-0 w-full h-1 bg-red-700"></div>
  <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-700"></div>
  <div className="absolute bottom-2 left-0 w-full h-1 bg-red-700"></div>
</div>
*/
