/* eslint-disable no-debugger */
import React, { memo, useEffect, useRef, useState } from 'react';
import { PeginationWrapper } from './style';
import PropTypes from 'prop-types';

function Pegination(props) {
  const pgRef = useRef();
  const [num, setNum] = useState(0);
  const [list, setList] = useState([]);
  // const [current, setCurrent] = useState(1);
  useEffect(() => {
    setNum(Math.ceil(props.total / props.pageSize));
    renderLi();
  }, [props]);

  const renderLi = (index = 1) => {
    const arr = [];
    index = index * 1;
    if (index < 6) {
      for (let i = 1; i <= 8; i++) {
        arr.push(
          <li title={i} className={i === index ? 'bgclick' : ''}>
            {i}
          </li>
        );
      }
      arr.push(<span>...</span>);
    } else {
      arr.push(
        <li title={1} className={1 === index ? 'bgclick' : ''}>
          1
        </li>
      );
      arr.push(<span>...</span>);
      for (let i = index - 3; i < index + 3; i++) {
        arr.push(
          <li title={i} className={i === index ? 'bgclick' : ''}>
            {i}
          </li>
        );
      }
      arr.push(<span>...</span>);
    }
    arr.push(
      <li className={num === index ? 'bgclick' : ''} title={num}>
        {num}
      </li>
    );
    setList(arr);
  };
  const currentIndex = (e) => {
    console.log(e.target.title);

    let index = Number(e.target.title);
    props.onChange(index, props.pageSize);
    renderLi(index);
  };
  return (
    <PeginationWrapper>
      <ul onClick={(e) => currentIndex(e)} ref={pgRef}>
        {/* <li title="1">1</li>
        <li title={num}>{num}</li> */}
        {list}
      </ul>
    </PeginationWrapper>
  );
}

Pegination.propTypes = {
  total: PropTypes.number,
  pageSize: PropTypes.number,
  onChange: PropTypes.func
};

export default memo(Pegination);
