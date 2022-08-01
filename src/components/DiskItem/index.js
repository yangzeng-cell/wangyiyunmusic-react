import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { DiskItemWrapper } from './style';
import { Link } from 'react-router-dom';
export default function DiskItem(props) {
  const { item } = props;
  const playRef = useRef();
  const moveIn = () => {
    playRef.current.style.display = 'block';
  };
  const moveOut = () => {
    playRef.current.style.display = 'none';
  };
  return (
    <DiskItemWrapper className="indexpg">
      <Link
        className="msk coverall"
        title={item.name}
        to={'/album?id=' + item.id}
        onMouseOver={() => moveIn()}
        onMouseOut={() => moveOut()}
      >
        <img className="pic" src={item.picUrl + '?param=100y100'}></img>
        {/* a标签里面不可以嵌套a标签 */}
        <span
          ref={playRef}
          href="#"
          title="播放"
          className="icon_play iconall"
        ></span>
      </Link>
      <Link title={item.name} className="title" to={'/album?id=' + item.id}>
        {item.name}
      </Link>
      <Link
        title={item.artist.name}
        className="author"
        to={'/artist?id=' + item.artist.id}
      >
        {item.artist.name}
      </Link>
    </DiskItemWrapper>
  );
}

DiskItem.propTypes = {
  item: PropTypes.object
};
