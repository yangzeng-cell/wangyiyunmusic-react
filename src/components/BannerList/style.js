import styled from 'styled-components';

export const BannerListWrapper = styled.div`
  .banner_bg {
    /* 高斯模糊的问题注意怎么解决 */
    height: 285px;
    background-size: 6000px;
    background-position: center center;
    .outer {
      width: 982px;
      height: 100%;
      margin: 0 auto;
      position: relative;
      z-index: 1000;
      .wrap {
        position: relative;
        width: 982px;
        height: 100%;
        overflow: hidden;
        .banner_img {
          height: 100%;
          background-color: green;
          display: flex;
          .image_link {
            display: block;
            img {
              height: 285px;
              width: 730px;
            }
          }
        }
        .download {
          width: 254px;
          height: 285px;
          position: absolute;
          top: 0;
          right: -1px;
          background: url(${require('../../assets/images/download.png')})
            no-repeat 0 0;
          .dowload_link {
            margin: 186px 0 0 19px;
            display: block;
            width: 215px;
            height: 56px;
            text-indent: -9999px;
            background: url(${require('../../assets/images/download.png')})
              no-repeat 0 -9999px;
            &:hover {
              background-position: 0 -290px;
            }
          }
          p {
            color: #8d8d8d;
            margin: 10px auto;
            text-align: center;
            font-size: 12px;
          }
          .shadow {
            position: absolute;
            display: block;
            width: 20px;
            height: 285px;
            top: 0;
            left: -20px;
            background: url(${require('@/assets/images/banner.png')}) no-repeat -1px
              0;
          }
          .shadowr {
            position: absolute;
            display: block;
            width: 20px;
            height: 285px;
            top: 0;
            right: -20px;
            background: url(${require('@/assets/images/banner.png')}) no-repeat -1px
              0;
          }
        }
        .dots {
          position: absolute;
          width: 730px;
          height: 20px;
          left: 0;
          top: 259px;
          text-align: center;
          .click_flag {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url(${require('@/assets/images/banner.png')}) no-repeat
              3px -343px;
            &:hover {
              background-position: -16px -343px;
            }
          }
          .dot_focus {
            background: url(${require('@/assets/images/banner.png')}) no-repeat;
            background-position: -16px -343px;
          }
        }
      }
    }
    .banner_button {
      display: block;
      width: 37px;
      height: 63px;
      text-indent: -9999px;
      position: absolute;
      background: url(${require('@/assets/images/banner.png')}) no-repeat;
      top: 50%;
    }
    .buttonl {
      background-position: 0 -360px;
      left: -68px;
      margin-top: -31px;
      &:hover {
        background-position: 0 -430px;
      }
    }
    .buttonr {
      background-position: 0 -508px;
      right: -68px;
      margin-top: -31px;
      &:hover {
        background-position: 0 -578px;
      }
    }
  }
`;
