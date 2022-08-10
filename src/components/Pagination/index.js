/* eslint-disable no-debugger */
import React, { memo, useEffect, useRef, useState } from 'react';
import { PeginationWrapper } from './style';
import PropTypes from 'prop-types';

function Pegination(props) {
  const pgRef = useRef();
  const [num, setNum] = useState(0);
  const [list, setList] = useState([]);
  useEffect(() => {
    setNum(Math.ceil(props.total / props.pageSize));
    renderLi(props.current);
  }, [props]);

  const renderLi = (index) => {
    const arr = [];
    index = index * 1;
    arr.push(
      <li data-index={1} className={1 === index ? 'bgclick' : ''}>
        1
      </li>
    );
    if (index < 6) {
      for (let i = 2; i <= 8; i++) {
        arr.push(
          <li data-index={i} className={i === index ? 'bgclick' : ''}>
            {i}
          </li>
        );
      }
      arr.push(<span>...</span>);
    } else if (num - 4 <= index) {
      console.log('将纳入');
      arr.push(<span>...</span>);
      for (let i = num - 7; i < num; i++) {
        arr.push(
          <li data-index={i} className={i === index ? 'bgclick' : ''}>
            {i}
          </li>
        );
      }
    } else {
      arr.push(<span>...</span>);
      for (let i = index - 3; i < index + 3; i++) {
        arr.push(
          <li data-index={i} className={i === index ? 'bgclick' : ''}>
            {i}
          </li>
        );
      }
      arr.push(<span>...</span>);
    }
    arr.push(
      <li className={num === index ? 'bgclick' : ''} data-index={num}>
        {num}
      </li>
    );
    setList(arr);
  };
  const currentIndex = (e) => {
    console.log(e.target.dataset.index);

    let index = Number(e.target.dataset.index);
    props.onChange(index, props.pageSize);
    renderLi(props.current);
  };
  const pre = (e) => {
    e.stopPropagation();
    if (e.target.dataset.index === 'prev') {
      if (props.current === 1) return;
      let index = props.current - 1;
      props.onChange(index, props.pageSize);
      renderLi(props.current);
    }
  };
  const next = (e) => {
    e.stopPropagation();
    if (e.target.dataset.index === 'next') {
      if (props.current === props.total) return;
      let index = props.current + 1;
      console.log(index);
      props.onChange(index, props.pageSize);
      renderLi(props.current);
    }
  };
  return (
    <PeginationWrapper>
      <ul onClick={(e) => currentIndex(e)} ref={pgRef}>
        {/* <li title="1">1</li>
        <li title={num}>{num}</li> */}
        <li
          className={
            'prev buttonpg ' + (props.current === 1 ? 'disabled1' : '')
          }
          data-index={'prev'}
          onClick={(e) => pre(e)}
        >
          上一页
        </li>
        {list}
        <li
          className={
            'next buttonpg ' + (props.current === num ? 'disabled2' : '')
          }
          data-index={'next'}
          onClick={(e) => next(e)}
        >
          下一页
        </li>
      </ul>
    </PeginationWrapper>
  );
}

Pegination.propTypes = {
  total: PropTypes.number,
  pageSize: PropTypes.number,
  onChange: PropTypes.func,
  currentPage: PropTypes.number,
  current: PropTypes.number
};

export default memo(Pegination);
