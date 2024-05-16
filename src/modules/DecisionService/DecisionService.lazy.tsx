import React, { lazy, Suspense } from 'react';

const LazyDecisionService = lazy(() => import('./DecisionService'));

const DecisionService = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDecisionService {...props} />
  </Suspense>
);

export default DecisionService;
