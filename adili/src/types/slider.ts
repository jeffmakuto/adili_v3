export type ImageData = {
    src: string;
    width: number;
    height: number;
}

export type SliderDotsProps = {
    images: { src: string; width: number; height: number }[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}

export type SliderControlsProps = {
    prevSlide: () => void;
    nextSlide: () => void;
}