import styled from 'styled-components';

export const NavLinkWrapper = styled.div`
  .m_nav {
    display: flex;
    .link_src {
      display: block;
      padding: 0 19px;
      color: #cccccc;
      font-size: 14px;
      height: 70px;
      line-height: 70px;
      &:hover {
        background-color: #000;
        color: #ffffff;
      }
      em {
        display: block;
        height: 70px;
        font-style: normal;
      }
      .cor {
        display: none;
        width: 12px;
        height: 7px;
        background: url(${require('../../assets/images/topbar.png')}) no-repeat -105px -70px;
        background-size: 120px auto;
        font-size: 14px;
        top: -6px;
        left: 50%;
        margin-left: -6px;
      }
    }

    .isActive {
      background-color: #000;
      color: #ffffff;
    }
    .isBlock {
      display: block !important;
    }
    .last_child {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        height: 19px;
        width: 28px;
        background-color: red;
        top: 21px;
        left: 100px;
        background: url(${require('../../assets/images/topbar.png')}) no-repeat -190px
          0;
      }
    }
  }
`;
