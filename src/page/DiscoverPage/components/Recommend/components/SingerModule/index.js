import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SingerCell from '../../../../../../components/SingerCell';
import { SingerModuleWrapper } from './style';

export default function SingerModule() {
  const { topArtists } = useSelector((state) => {
    return {
      topArtists: state.getIn(['recommend', 'topArtists'])
    };
  });
  return (
    <SingerModuleWrapper>
      <h3 className="top">
        <span>入驻歌手</span>
        <Link className="addUnderLine" to={'/discover/artist/signed'}>
          {'查看全部>'}
        </Link>
      </h3>
      <ul className="singer_list">
        {topArtists.map((item) => {
          return (
            <li key={item.id}>
              <SingerCell item={item}></SingerCell>
            </li>
          );
        })}
      </ul>
      <a className="btn button2" href="#">
        <i className="button2">申请成为网易音乐人</i>
      </a>
    </SingerModuleWrapper>
  );
}
