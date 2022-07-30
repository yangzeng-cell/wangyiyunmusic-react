import styled from 'styled-components';

export const HotRecommendWrapper = styled.div`
  width: 100%;

  .recommend_list {
    margin-bottom: 0;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 35px;
    display: flex;
    flex-wrap: wrap;
    li {
      margin-left: 42px;
      margin-bottom: 30px;
      &:nth-child(4n + 1) {
        margin-left: 0;
      }
    }
  }
`;
