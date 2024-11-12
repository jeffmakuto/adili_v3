import { PaginationControlsProps } from '@/types/policies'
import { paragraph } from '@/styles/values'

const PaginationControls: React.FC<PaginationControlsProps> = ({
    currentPage,
    totalPages,
    onPrevious,
    onNext
}) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 bg-red-600 text-white rounded-lg shadow-md 
            hover:bg-red-700 transition-colors disabled:bg-[#ccc] 
            disabled:cursor-not-allowed ${paragraph}`}
      >
        Previous
      </button>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 bg-red-600 text-white rounded-lg shadow-md 
            hover:bg-red-700 transition-colors disabled:bg-[#ccc] 
            disabled:cursor-not-allowed ${paragraph}`}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
