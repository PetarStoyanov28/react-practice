
import React, { useState } from 'react';

const withLoading = WrappedComponent => {
  return function WithLoadingComponent(props) {
    const [isLoading, setIsLoading] = useState(false);

    return (
      <div>
        {isLoading && <p>Зареждане...</p>}
        <WrappedComponent {...props} isLoading={isLoading} setIsLoading={setIsLoading} />
      </div>
    );
  };
};

export default withLoading;
