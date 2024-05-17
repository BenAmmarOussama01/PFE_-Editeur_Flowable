import React, { lazy, Suspense } from 'react';

const LazyApps = lazy(() => import('./Apps'));

const Apps = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyApps {...props} />
  </Suspense>
);

export default Apps;
