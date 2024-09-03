'use client'

import { FallbackProps } from 'react-error-boundary'

function GlobalError({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default GlobalError;
