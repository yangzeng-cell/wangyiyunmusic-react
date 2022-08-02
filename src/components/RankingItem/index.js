import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { RankingItemWrapper } from './style';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export default function RankingItem({ topList, playList, components = null }) {
  const billRef = useRef();
  const move = (index) => {
    billRef.current.children[index].classList.add('change');
  };
  const remove = (index) => {
    billRef.current.children[index].classList.remove('change');
  };
  return (
    <RankingItemWrapper>
      <div className="top clearFix">
        <div className="cover">
          <img src={topList?.coverImgUrl}></img>
          <Link
            className="mask coverall"
            to={'/discover/toplist/id=' + topList?.id}
            title={topList?.name}
          ></Link>
        </div>
        <div className="tit">
          <NavLink
            className={'addUnderLine'}
            to={'/discover/toplist/id=' + topList?.id}
          >
            <h3>{topList?.name}</h3>
          </NavLink>
          <div className="btn">
            <a className="play ablock indexpg" href="/#" title="播放">
              播放
            </a>
            <a className="add ablock indexpg" href="/#" title="收藏">
              收藏
            </a>
          </div>
        </div>
      </div>
      <ul className="bill_list" ref={billRef}>
        {playList.slice(0, 10).map((item, index) => {
          return (
            <li
              onMouseOver={(e) => {
                return move(e.currentTarget.dataset.index);
              }}
              onMouseOut={(e) => remove(e.currentTarget.dataset.index)}
              data-index={index}
              title={item.name}
              key={item.id}
            >
              <span className="index_num">{index + 1}</span>
              <Link
                className="addUnderLine a_nor textellips"
                title={item.name}
                to={'/song/id=' + item.id}
              >
                {item.name}
              </Link>
              <div className="open clearFix show">
                <a className="play indexpg" title="播放" href="/#"></a>
                <a className="add icon" title="添加到播放列表" href="/#"></a>
                <a className="save indexpg" title="收藏" href="/#"></a>
              </div>
            </li>
          );
        })}
      </ul>
      {components}
    </RankingItemWrapper>
  );
}

RankingItem.propTypes = {
  topList: PropTypes.object,
  playList: PropTypes.array,
  components: PropTypes.any
};
