import React from 'react';
import { Input } from 'antd';
import { SearchInputWrapper } from './style';
import { SearchOutlined } from '@ant-design/icons';
export default function index() {
  return (
    <SearchInputWrapper>
      <Input
        prefix={<SearchOutlined></SearchOutlined>}
        className="inputClass"
        placeholder="音乐/视频/电台/用户"
      />

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
