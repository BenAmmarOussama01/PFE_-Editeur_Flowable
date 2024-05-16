import React, { FC } from 'react';
import './DecisionService.scss';

interface DecisionServiceProps {}

const DecisionService: FC<DecisionServiceProps> = () => (
  <div className="DecisionService" data-testid="DecisionService">
    DecisionService Component
  </div>
);

export default DecisionService;
