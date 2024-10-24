export const getItemClass = (isActive: boolean) => `
  ${isActive ? 'bg-red-600 text-white border border-red-600' : 'text-gray-700 group-hover:bg-red-600 group-hover:text-white'}
  rounded-md cursor-pointer flex items-center space-x-3 p-2 text-base sm:text-base md:text-base lg:text-lg
`;

export const getIconClass = (isActive: boolean) => `
  ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-white'}
  flex-shrink-0 text-base sm:text-base md:text-base lg:text-lg
`;

export const getLinkClass = (isActive: boolean) => `
  ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-white'}
`;

export const getDropdownClass = () => `
  absolute left-0 mt-0 bg-white shadow-lg rounded-md w-full z-10
  max-h-40 sm:max-h-52 md:max-h-64 lg:max-h-80
  overflow-y-auto
`;

export const getSubNavLinkClass = () => `
  p-2 hover:bg-red-600 hover:text-white rounded-md whitespace-normal break-words
`;
