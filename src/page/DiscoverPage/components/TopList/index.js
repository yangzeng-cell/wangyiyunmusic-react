import React, { memo, useState } from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import { TopListWrapper } from './style';

function TopList() {
  const [idx, setIdx] = useState(0);
  const getindex = (index) => {
    setIdx(index);
  };
  return (
    <TopListWrapper>
      <LeftSide getindex={getindex}></LeftSide>
      <RightSide idx={idx}></RightSide>
    </TopListWrapper>
  );
}

export default memo(TopList);
