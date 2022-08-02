import styled from 'styled-components';

export const UpRankingsWrapper = styled.div`
  .ranking_list {
    margin-top: 20px;
    height: 472px;
    width: 100%;
    background: url(${require('@/assets/images/index_bill.png')}) no-repeat
      center center;
    display: flex;
    .bill {
      width: 230px;
      height: 100%;
    }
    .more {
      height: 32px;
      width: 100%;
      padding-right: 32px;
      line-height: 32px;
      text-align: right;
    }
  }
`;
