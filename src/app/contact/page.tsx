
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-red-800 mb-8 text-center tracking-tight drop-shadow-lg">
        Contact
      </h1>
      <div className="bg-white/90 backdrop-blur-md border-l-8 border-blue-800 shadow-xl rounded-lg p-8 mb-8">
        <p className="text-lg sm:text-xl text-gray-800 font-medium leading-relaxed text-center">
          <span className="font-bold text-blue-900">For inquiries, please email us at</span><br />
          <a
            href="mailto:info@tuskegee-sac.org"
            className="inline-block mt-2 px-4 py-2 bg-red-800 text-white rounded hover:bg-red-700 font-semibold text-lg shadow transition"
          >
            info@tuskegee-sac.org
          </a>
        </p>
      </div>
      {/* Large themed image at the bottom */}
      <div className="w-full flex justify-center my-12">
        <button
          className="relative w-full max-w-2xl h-[400px] rounded-lg overflow-hidden shadow-lg border-4 border-blue-800 bg-black focus:outline-none focus:ring-2 focus:ring-blue-800"
          onClick={() => setShowModal(true)}
          aria-label="Open document image in lightbox"
          type="button"
        >
          <Image
            src="/images/doc_1.jpg"
            alt="Tuskegee Airmen Document"
            fill
            style={{ objectFit: "contain" }}
            sizes="100vw"
            priority
          />
        </button>
        {/* Lightbox Modal */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setShowModal(false)}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="relative max-w-3xl w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
                onClick={() => setShowModal(false)}
                aria-label="Close"
                type="button"
              >
                &times;
              </button>
              <div className="relative w-full aspect-[4/3] bg-black rounded-lg overflow-hidden">
                <Image
                  src="/images/doc_1.jpg"
                  alt="Tuskegee Airmen Document"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="90vw"
                  priority
                />
              </div>
              <div className="text-center text-white mt-4">Tuskegee Airmen Document</div>
            </div>
          </div>
        )}
      </div>
      {/* Add a contact form or more info here */}
    </div>
  );
} 