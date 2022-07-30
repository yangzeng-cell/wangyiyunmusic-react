import styled from 'styled-components';

export const RecommendWrapper = styled.div`
  .g-bd1 {
    background: url(${require('@/assets/images/wrap1.png')}) repeat-y 100% 100%;
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    box-sizing: content-box;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    display: flex;
    .g-mn1 {
      width: 729px;
      padding: 20px 20px 40px;
      overflow: hidden;
      box-sizing: border-box;
    }
    .g-sd1 {
      width: 251px;
      background-color: red;
      overflow: hidden;
      box-sizing: border-box;
    }
  }
`;
