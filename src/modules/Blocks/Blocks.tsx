import React, { FC } from 'react';
import './Blocks.scss';

interface BlocksProps {}

const Blocks: FC<BlocksProps> = () => (
  <div className="Blocks" data-testid="Blocks">
    Blocks Component
  </div>
);

export default Blocks;
