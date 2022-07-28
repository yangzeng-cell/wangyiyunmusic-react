import styled from 'styled-components';

export const BannerListWrapper = styled.div`
  .banner_bg {
    height: 285px;
    background-color: brown;
    .outer {
      width: 982px;
      height: 100%;
      margin: 0 auto;
      position: relative;
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
          right: 0;
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
