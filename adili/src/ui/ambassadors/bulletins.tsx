import ImageSlider from '@/ui/ambassadors/slider'

/**
 * Bulletins Component
 * 
 * The `Bulletins` component is used to display a title and an image slider. 
 * The title "Bulletins" is displayed along with an image slider that showcases different images, 
 * possibly representing important bulletins or announcements. The `ImageSlider` component is responsible 
 * for rendering the actual slider functionality.
 * 
 * @returns JSX.Element
 */
const Bulletins: React.FC = () => {
  return (
    <div className="text-center pt-8">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-red-600 font-bold">
        Bulletins
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-4xl">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}

export default Bulletins;
