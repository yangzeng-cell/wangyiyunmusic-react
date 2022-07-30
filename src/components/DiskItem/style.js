import styled from 'styled-components';

export const DiskItemWrapper = styled.div`
  width: 118px;
  height: 150px;
  background-position: -260px 100px;
  .msk {
    display: block;
    width: 118px;
    height: 100px;
    background-position: 0 -570px;
    margin-bottom: 7px;
    position: relative;
    .icon_play {
      position: absolute;
      width: 22px;
      height: 22px;
      left: 72px;
      right: 10px;
      bottom: 5px;
      background-position: 0 -85px;
      display: none;
      &:hover {
        background-position: 0 -110px;
      }
    }
  }
  .title {
    display: block;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    color: #333;
    width: 90%;
    &:hover {
      text-decoration: underline;
    }
  }
  .author {
    display: block;
    color: #666666;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    width: 90%;
    &:hover {
      text-decoration: underline;
    }
  }
`;
