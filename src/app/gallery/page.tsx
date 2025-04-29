"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/history_4.jpg",
  "/images/history_3.jpg",
  "/images/history_1.jpg",
  "/images/mustang_1.jpg",
  "/images/history_2.jpg",
  // Add more image paths as needed
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{src: string; alt: string} | null>(null);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-red-800 mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <button
            key={idx}
            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow focus:outline-none focus:ring-2 focus:ring-red-800"
            onClick={() => setLightbox({ src, alt: `Tuskegee Airmen photo ${idx + 1}` })}
            aria-label="Open image in lightbox"
            type="button"
          >
            <Image
              src={src}
              alt={`Tuskegee Airmen photo ${idx + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={idx < 3}
            />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setLightbox(null)}
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
              onClick={() => setLightbox(null)}
              aria-label="Close"
              type="button"
            >
              &times;
            </button>
            <div className="relative w-full aspect-[4/3] bg-black rounded-lg overflow-hidden">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="90vw"
                priority
              />
            </div>
            <div className="text-center text-white mt-4">{lightbox.alt}</div>
          </div>
        </div>
      )}
    </div>
  );
} 