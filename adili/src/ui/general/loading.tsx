const LoadingSpinner: React.FC = () => (
    <div className="spinner-container">
      <div className="spinner" />
      <style jsx>{`
        .spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10;
        }
  
        .spinner {
          border: 8px solid rgba(0, 0, 0, 0.1);
          border-left-color: #fff;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
  
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );  

  export default LoadingSpinner;