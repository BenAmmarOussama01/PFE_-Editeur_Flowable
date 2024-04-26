import React, { lazy, Suspense } from 'react';

const LazyProcesses = lazy(() => import('./Processes'));

const Processes = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProcesses {...props} />
  </Suspense>
);

export default Processes;
