import styled from 'styled-components';

export const SingerModuleWrapper = styled.div`
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  .top {
    display: flex;
    height: 23px;
    justify-content: space-between;
    color: #333;
    border-bottom: 1px solid #ccc;
    vertical-align: top;
    font-size: 12px;
    span {
      font-weight: bold;
    }
    a {
      color: #666;
    }
  }
  .singer_list {
    margin-bottom: 14px;
    li {
      margin-top: 14px;
      background: #fafafa;
      width: 210px;
      height: 62px;
    }
  }
  .btn {
    background-position: right -100px;
    display: block;
    padding-right: 5px;
    border-radius: 4px;
    &:hover {
      background-position: right -182px;
      i {
        background-position: 0 -141px;
      }
    }
    i {
      display: block;
      width: 170px;
      font-weight: bold;
      height: 31px;
      padding: 0 15px 0 20px;
      box-sizing: content-box;
      background-position: 0 -59px;
      font-style: normal;
      line-height: 31px;
      text-align: center;
    }
  }
`;
