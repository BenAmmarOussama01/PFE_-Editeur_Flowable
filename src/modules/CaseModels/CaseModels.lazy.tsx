import React, { lazy, Suspense } from 'react';

const LazyCaseModels = lazy(() => import('./CaseModels'));

const CaseModels = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCaseModels {...props} />
  </Suspense>
);

export default CaseModels;
