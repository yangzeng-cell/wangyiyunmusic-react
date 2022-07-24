import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
  height: 75px;
  background: #242424;
  font-size: 12px;
  color: #333333;
  overflow: hidden;
  box-sizing: border-box;
`;
export const AppHeaderWrapperMain = styled.div`
  height: 70px;
  .wrap {
    width: 1100px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    .logo {
      width: 176px;
      height: 69px;
      margin: 0;
      a {
        display: block;
        height: 69px;
        width: 157px;
        text-indent: -9999px;
        background: url(${require('@/assets/images/topbar.png')}) no-repeat 0 0;
        padding-right: 20px;
        box-sizing: content-box;
      }
    }
  }
`;
export const AppHeaderWrapperButtomLine = styled.div`
  height: 5px;
  background-color: #c20c0c;
  box-sizing: border-box;
`;
