import React, { lazy, Suspense } from 'react';

const LazyCompany = lazy(() => import('./company'));

const Company = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCompany {...props} />
  </Suspense>
);

export default Company;
