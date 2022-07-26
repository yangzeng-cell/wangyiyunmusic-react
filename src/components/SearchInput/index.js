import React from 'react';
import { Input } from 'antd';
import { SearchInputWrapper } from './style';

export default function index() {
  return (
    <SearchInputWrapper>
      <Input className="inputClass" placeholder="Basic usage" />
      <a className="m-topvd" href="/">
        创作者中心
      </a>
      <div className="tophead">
        <a className="login" href="/">
          登陆
        </a>
      </div>
    </SearchInputWrapper>
  );
}
