import React, { lazy, Suspense } from 'react';

const LazyBlocks = lazy(() => import('./Blocks'));

const Blocks = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBlocks {...props} />
  </Suspense>
);

export default Blocks;
