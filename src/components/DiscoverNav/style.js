import styled from 'styled-components';

export const DiscoverNavWrapper = styled.div`
  background: #c20c0c;
  box-sizing: border-box;
  height: 34px;
  position: absolute;
  left: 50%;
  top: -5px;
  transform: translate(-50%, 0);
  .nav {
    display: flex;
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    padding-left: 180px;
    li {
      height: 100%;
      line-height: 34px;
      padding: 0 17px;
      .nav_link {
        position: relative;
        display: inline-block;
        color: #fff;
        height: 20px;
        border-radius: 20px;
        line-height: 21px;
        padding: 0 13px;
        font-size: 12px;
        &:hover {
          background-color: #9b0909;
        }
      }
    }
  }
  .click_link {
    background-color: #9b0909;
  }
  .playlist {
    position: absolute;
    background: url(${require('../../assets/images/white-r-icon@3x.png')})
      no-repeat;
    height: 8px;
    width: 8px;
    top: 2px;
    display: inline-block;
    background-size: cover;
  }
`;
