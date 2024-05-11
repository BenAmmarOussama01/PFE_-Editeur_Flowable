import React, { lazy, Suspense } from 'react';

const LazyDecisions = lazy(() => import('./Decisions'));

const Decisions = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDecisions {...props} />
  </Suspense>
);

export default Decisions;
