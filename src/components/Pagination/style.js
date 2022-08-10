import styled from 'styled-components';

export const PeginationWrapper = styled.div`
  overflow: hidden;
  display: flex;
  ul {
    display: flex;
    align-items: center;
    li {
      height: 22px;
      background-color: #fff;
      padding: 0 8px;
      line-height: 22px;
      border: 1px solid #ccc;
      border-radius: 2px;
      margin: 0 2px;
      cursor: pointer;
    }
  }
  .bgclick {
    border-color: #a2161b;
    color: #fff;
    background: url(${require('./../../assets/images/button.png')}) no-repeat 0 -650px;
  }

  .prev {
    background-position: 0 -560px;
    padding-left: 22px;
    height: 26px;
    line-height: 24px;
    &:hover {
      background-position: 0 -590px;
    }
  }
  .next {
    background-position: -75px -560px;
    padding-right: 22px;
    height: 26px;
    line-height: 24px;
    &:hover {
      background-position: -75px -590px;
    }
  }
  .disabled1 {
    background-position: 0 -620px;
    color: #cacaca;
    cursor: default;
  }
  .disabled2 {
    background-position: -75px -620px;
    color: #cacaca;
    cursor: default;
    &:hover {
      background-position: -75px -620px;
      color: #cacaca;
      cursor: default;
    }
  }
`;
