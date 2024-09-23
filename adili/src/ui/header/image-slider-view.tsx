import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ImageData } from '@/types/slider'

const ImageSliderView = ({ images, currentIndex }: { images: ImageData[], currentIndex: number }) => {
  const [containerHeight, setContainerHeight] = useState<number>(460); /* Default height */
  const imageRefs = useRef<(HTMLDivElement | null)[]>(new Array(images.length).fill(null)); /* Initialize with array */

  useEffect(() => {
    /* Update container height based on the current image's height */
    const updateContainerHeight = () => {
      const img = imageRefs.current[currentIndex];
      if (img) {
        setContainerHeight(img.clientHeight); /* Update the height state */
      }
    };

    /* Update height on initial render and when the currentIndex changes */
    updateContainerHeight();

    /* Add a resize listener for image dimensions changing dynamically */
    window.addEventListener('resize', updateContainerHeight);
    return () => window.removeEventListener('resize', updateContainerHeight);
  }, [currentIndex]);

  return (
    <div
      className="relative overflow-hidden shadow-lg"
      style={{ height: containerHeight }}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full"
            ref={(el) => { imageRefs.current[index] = el; }}
          >
            <Image
              src={image.src}
              alt={`Slider Image ${index + 1}`}
              width={image.width}
              height={image.height}
              className="w-full h-full object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSliderView;
