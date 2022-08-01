import React, { useState } from 'react';
import { UpRankingsWrapper } from './style';
import TopHeader from '../../../../../../components/TopHeader';
export default function UpRankings() {
  const [moreHref] = useState('/discover/toplist');
  const [topTitle] = useState('榜单');
  return (
    <UpRankingsWrapper>
      <TopHeader moreHref={moreHref} topTitle={topTitle}></TopHeader>
      <div className="ranking_list"></div>
    </UpRankingsWrapper>
  );
}
