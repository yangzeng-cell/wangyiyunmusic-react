import React, { useState } from 'react';
import {
  AppHeaderWrapper,
  AppHeaderWrapperMain,
  AppHeaderWrapperButtomLine
} from './style';
import NavLink from '../NavLink';
import SearchInput from '../SearchInput';
export default function index() {
  const [links] = useState([
    {
      id: '1',
      name: '发现音乐',
      path: '/'
    },
    {
      id: '2',
      name: '我的音乐',
      path: 'my'
    },
    {
      id: '3',
      name: '关注',
      path: 'friend'
    },
    {
      id: '4',
      name: '商城',
      path: 'product'
    },
    {
      id: '5',
      name: '音乐人',
      path: 'musician'
    },
    {
      id: '6',
      name: '下载客户端',
      path: 'download'
    }
  ]);
  return (
    <AppHeaderWrapper>
      <>
        <AppHeaderWrapperMain>
          <div className="wrap">
            <h1 className="logo">
              <a href="/">网易云音乐</a>
            </h1>
            <NavLink links={links}></NavLink>
            <SearchInput></SearchInput>
          </div>
        </AppHeaderWrapperMain>
        <AppHeaderWrapperButtomLine>
          <div></div>
        </AppHeaderWrapperButtomLine>
      </>
    </AppHeaderWrapper>
  );
}
