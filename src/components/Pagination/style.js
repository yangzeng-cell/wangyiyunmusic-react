import styled from 'styled-components';

export const PeginationWrapper = styled.div`
  overflow: hidden;
  ul {
    display: flex;
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
`;
