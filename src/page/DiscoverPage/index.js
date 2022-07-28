import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DiscoverNav from '../../components/DiscoverNav';
import { DiscoverPageWrapper } from './style';

export default function DiscoverPage() {
  const [navList] = useState([
    { id: 1, name: '推荐', path: 'discover' },
    {
      id: 2,
      name: '排行榜',
      path: 'discover/toplist'
    },
    {
      id: 3,
      name: '歌单',
      path: 'discover/playlist'
    },
    {
      id: 4,
      name: '主播电台',
      path: 'discover/djradio'
    },
    {
      id: 5,
      name: '歌手',
      path: 'discover/artist'
    },
    {
      id: 6,
      name: '新碟上架',
      path: 'discover/album'
    }
  ]);
  return (
    <DiscoverPageWrapper>
      <div className="subnav">
        <DiscoverNav navList={navList}></DiscoverNav>
      </div>
      <div className="discover_body">
        <Outlet></Outlet>
      </div>
    </DiscoverPageWrapper>
  );
}
