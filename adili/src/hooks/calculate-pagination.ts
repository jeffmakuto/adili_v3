export const calculatePagination = (
  totalItems: number,
  itemsPerPage: number,
  currentPage: number) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { totalPages, startIndex, endIndex };
  };
  