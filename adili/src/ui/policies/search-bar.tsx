import { SearchBarProps } from '@/types/policies'
import { paragraph } from '@/styles/values'

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => (
  <section className="py-4 px-4 text-center">
    <input
      type="text"
      placeholder="Search policies..."
      className={`px-4 py-2 border rounded-lg w-full md:w-1/2 border-gray-300
        shadow-sm focus:outline-none transition duration-150 ${paragraph}`}
      value={searchTerm}
      onChange={onSearchChange}
      style={{}}
    />
    <style jsx>{`
      input::placeholder {
        ${paragraph};
      }
    `}</style>
  </section>
);

export default SearchBar;
