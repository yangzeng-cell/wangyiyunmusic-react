import styled from 'styled-components';

export const NewDiskWrapper = styled.div`
  .n_disk {
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    .inner {
      height: 100%;
      border: 1px solid #fff;
      background: #f5f5f5;
      width: 100%;
      padding: 0 27px;
      position: relative;
      .banner {
        display: flex;
        padding-top: 28px;
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
        .roller_flag {
          width: 100%;
          flex-shrink: 0;
          position: absolute;
          display: flex;
        }
      }
      .pre_arrow {
        background-position: -260px -75px;
        left: 0;
        &:hover {
          background-position: -280px -75px;
        }
      }
      .next_arrow {
        right: 0;
        background-position: -300px -75px;
        &:hover {
          background-position: -320px -75px;
        }
      }
      .arr_same {
        top: 50%;
        transform: translateY(-50%);
        margin-top: 10px;
        height: 17px;
        width: 17px;
        position: absolute;
      }
    }
  }
`;
