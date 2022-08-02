import React from 'react';
import { useSelector } from 'react-redux';
import DjCell from '../../../../../../components/DjCell';
import { DjModuleWrapper } from './style';

export default function DjModule() {
  const { hotDjList } = useSelector((state) => {
    return {
      hotDjList: state.getIn(['recommend', 'hotDjList'])
    };
  });
  return (
    <DjModuleWrapper>
      <h3 className="top">热门主播</h3>
      <ul className="dj_list">
        {hotDjList.map((item) => {
          return (
            <li key={item.id}>
              <DjCell item={item}></DjCell>
            </li>
          );
        })}
      </ul>
    </DjModuleWrapper>
  );
}
