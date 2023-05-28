import React, { lazy, Suspense } from 'react';

const LazyLandingPage = lazy(() => import('./landingPage'));

const LandingPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLandingPage {...props} />
  </Suspense>
);

export default LandingPage;
