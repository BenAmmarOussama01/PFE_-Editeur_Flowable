import React, { lazy, Suspense } from 'react';

const LazyDecisionTable = lazy(() => import('./DecisionTable'));

const DecisionTable = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDecisionTable {...props} />
  </Suspense>
);

export default DecisionTable;
