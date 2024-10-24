interface CloseButtonProps {
    onClose: () => void;
  }
  
  const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => (
    <button
      onClick={onClose}
      className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-sm lg:text-lg py-2 px-4 rounded-full transition duration-300 ease-in-out"
    >
      Close
    </button>
  );
  
  export default CloseButton;
  