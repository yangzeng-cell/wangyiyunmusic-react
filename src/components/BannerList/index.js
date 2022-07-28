/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { createRef, memo, useEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { BannerListWrapper } from './style';
function BannerList({ topBanners }) {
  const totalLength = topBanners.length * 730;
  const len = topBanners.length;
  const bannerRef = useRef(null);
  let [timers] = useState(null);
  let [index] = useState(0);
  let alist = [];
  for (let i = 0; i < len; i++) {
    alist.push(<a href="#" key={i} className="click_flag" data-index={i}></a>);
  }
  useEffect(() => {
    timers = start(bannerRef);
  }, []);

  function arrowMouseOver() {}
  function arrowMouseOut() {}
  function start(ref) {
    if (!ref.current) return;
    const timer = setInterval(() => {
      console.log(index);
      ref.current.style.transform = `translateX(${-730 * index}px)`;
      index++;
      if (index >= 8) index = 0;
    }, 3000);
    return timer;
  }
  return (
    <BannerListWrapper>
      <div className="banner_bg">
        <div className="outer">
          <div className="wrap">
            <div
              ref={bannerRef}
              className="banner_img"
              style={{ width: totalLength + 'px' }}
            >
              {topBanners.map((images) => {
                return (
                  <a className="image_link" key={images.targetId} href="/#">
                    <img src={images.imageUrl}></img>
                  </a>
                );
              })}
            </div>
            <div className="download">
              <a className="dowload_link" href="#">
                下载客户端
              </a>
              <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
            <div className="dots">{alist}</div>
          </div>
          <a
            className="banner_button buttonl"
            onMouseOver={() => arrowMouseOver()}
            onMouseOut={() => arrowMouseOut()}
            href="#"
          >
            left
          </a>
          <a className="banner_button buttonr" href="#">
            right
          </a>
        </div>
      </div>
    </BannerListWrapper>
  );
}
BannerList.propTypes = {
  topBanners: PropTypes.array
};
export default memo(BannerList);
