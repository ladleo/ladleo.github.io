import React, { lazy, Suspense } from 'react';

const LazyNavigation = lazy(() => import('./navigation'));

const Navigation = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNavigation {...props} />
  </Suspense>
);

export default Navigation;
