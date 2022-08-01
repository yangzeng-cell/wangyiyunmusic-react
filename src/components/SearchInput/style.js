import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .inputClass {
    width: 158px;
    height: 32px;
    border-radius: 32px;
    font-size: 12px !important;
    .ant-input {
      font-size: 12px;
    }
  }
  .m-topvd {
    display: block;
    height: 32px;
    width: 90px;
    margin-left: 12px;
    text-align: center;
    line-height: 32px;
    color: #ccc;
    border-radius: 20px;
    border: solid 1px #4f4f4f;
    box-sizing: border-box;
    &:hover {
      color: #ffffff;
      border: 1px solid #ccc;
    }
  }
  .tophead {
    height: 45px;
    margin: 19px 0 0 20px;
    padding: 0 22px 0 0;
    .login {
      display: block;
      color: #787878;
      width: 28px;
      margin-top: 7px;
      font-size: 12px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
