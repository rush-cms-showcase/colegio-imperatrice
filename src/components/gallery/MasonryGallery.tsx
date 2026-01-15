
import { useEffect, useRef } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

interface Image {
  id: number;
  url: string;
  name: string;
  width?: number;
  height?: number;
}

interface Props {
  images: Image[];
  galleryID: string;
}

export default function MasonryGallery({ images, galleryID }: Props) {
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
      // Styling options
      bgOpacity: 0.9,
      paddingFn: (viewportSize) => {
        return {
          top: 30,
          bottom: 30,
          left: 70,
          right: 70,
        };
      },
    });
    
    lightbox.init();
    lightboxRef.current = lightbox;

    return () => {
      lightbox?.destroy();
      lightbox = null;
    };
  }, [galleryID]);

  return (
    <div className="pswp-gallery" id={galleryID}>
      {/* Masonry Layout using CSS Columns */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => {
           // Fallback dimensions if API doesn't provide them, although specific dims are better for PhotoSwipe
           const width = image.width || 1200; 
           const height = image.height || 800;
           
           return (
            <a
              href={image.url}
              data-pswp-width={width}
              data-pswp-height={height}
              key={galleryID + "-" + index}
              target="_blank"
              rel="noreferrer"
              className="block break-inside-avoid relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
