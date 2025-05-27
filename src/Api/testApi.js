export const postProTrial = () => {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ success: true }), 1000)
    );
  };
  
  export const getUserStatus = () => {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ isPro: true }), 1000)
    );
  };
  
  export const getProMetrics = () => {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            trial: 'Active (14 days left)',
            payments: 1,
            nextBilling: '2025-06-01',
          }),
        1000
      )
    );
  };
  