import styled from 'styled-components';

export const TopHeaderWrapper = styled.div`
  height: 33px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #c10d0c;
  background: url(${require('@/assets/images/index.png')}) no-repeat -225px -156px;
  *zoom: 1;
  &::after {
    content: '';
    clear: both;
    display: block;
    visibility: hidden;
    height: 0;
  }
  .top_title {
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
  }
  .tab {
    float: left;
    margin: 7px 0 0 10px;
    display: flex;
    li {
      position: relative;
      a {
        display: block;
        padding: 0 10px;
        color: #666;
      }
      &:not(:last-child):after {
        position: absolute;
        top: 0;
        right: 0;
        content: '|';
        font-size: 12px;
        color: #ccc;
      }
    }
  }
  .more {
    float: right;
    margin-top: 9px;
    color: #666;
    .cor {
      display: inline-block;
      height: 12px;
      width: 12px;
      margin-left: 4px;
      vertical-align: middle;
    }
  }
`;
