import { useState } from 'react'
import { calculatePagination } from '@/hooks/calculate-pagination'

/**
 * usePagination - Custom hook to handle pagination logic.
 * 
 * @param totalItems - Total number of items.
 * @param itemsPerPage - Number of items per page.
 * @returns Object containing pagination functionality.
 */
const usePagination = (totalItems: number, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { totalPages, startIndex, endIndex } = calculatePagination(totalItems, itemsPerPage, currentPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    handleNextPage,
    handlePreviousPage,
  };
};

export default usePagination;