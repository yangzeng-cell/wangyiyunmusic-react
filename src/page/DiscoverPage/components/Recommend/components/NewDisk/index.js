/* eslint-disable indent */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { NewDiskWrapper } from './style';
import TopHeader from '../../../../../../components/TopHeader';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import DiskItem from 'components/DiskItem';
import {
  setCurrentIndexAction,
  setPreviousIndexAction
} from '../../../../../../store/discover/recommend/actionCreators';
import { shallowEqual } from 'react-redux';
export default function NewDisk(props) {
  const [moreHref] = useState('/discover/album/');
  const [topTitle] = useState('新碟上架');
  const bannerRef = useRef();
  const [bannerCounter, setBannerCounter] = useState(0);
  const { currentIndex } = useSelector((state) => {
    return {
      currentIndex: state.getIn(['recommend', 'currentIndex'])
      // previousIndex: state.getIn(['recommend', 'previousIndex'])
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const arrow = (index) => {
    switch (index) {
      case 1:
        dispatch(setPreviousIndexAction(currentIndex));
        dispatch(setCurrentIndexAction(currentIndex - 1));
        switchBannerItem(currentIndex - 1);
        break;
      case 2:
        dispatch(setPreviousIndexAction(currentIndex));
        dispatch(setCurrentIndexAction(currentIndex + 1));
        switchBannerItem(currentIndex + 1);
        break;
      default:
        break;
    }
  };
  const switchBannerItem = async (current) => {
    bannerRef.current.style.transition = 'all 500ms ease';
    bannerRef.current.style.transform = `translateX(${-current * 100}%)`;
    if (current === bannerCounter) {
      dispatch(setCurrentIndexAction(0));
      fixBannerPosition(0);
    } else if (current === -1) {
      dispatch(setCurrentIndexAction(bannerCounter - 1));
      fixBannerPosition(1);
    }
  };
  const fixBannerPosition = (index) => {
    setTimeout(() => {
      bannerRef.current.style.transition = 'none';
      bannerRef.current.style.transform = `translateX(${-index * 100}%)`;
    }, 500);
  };
  useEffect(() => {
    if (props.newAlbumList?.length > 0) {
      setBannerCounter(bannerRef.current.children.length);
      cloneAppend();
    }
  }, [props.newAlbumList]);
  const cloneAppend = () => {
    const firstItem = bannerRef.current.children[0].cloneNode(true);
    const lastItem = bannerRef.current.children[1].cloneNode(true);
    bannerRef.current.append(firstItem);
    bannerRef.current.prepend(lastItem);
    firstItem.style.left = `${100 * 2}%`;
    lastItem.style.left = '-100%';
  };
  return (
    <NewDiskWrapper>
      <TopHeader moreHref={moreHref} topTitle={topTitle}></TopHeader>
      <div className="n_disk">
        <div className="inner">
          <div className="banner" ref={bannerRef}>
            <ul className="roller_flag" style={{ left: '0%' }}>
              {props.newAlbumList?.slice(0, 5).map((item) => {
                return (
                  <li key={item.picId}>
                    <DiskItem item={item}></DiskItem>
                  </li>
                );
              })}
            </ul>
            <ul className="roller_flag" style={{ left: '100%' }}>
              {props.newAlbumList?.slice(5, 10).map((item) => (
                <li key={item.picId}>
                  <DiskItem item={item}></DiskItem>
                </li>
              ))}
            </ul>
          </div>
          <div className="pre">
            <a
              className="pre_arrow indexpg arr_same"
              onClick={() => arrow(1)}
            ></a>
          </div>

          <div className="next">
            <a
              className="next_arrow indexpg arr_same"
              onClick={() => arrow(2)}
            ></a>
          </div>
        </div>
      </div>
    </NewDiskWrapper>
  );
}

NewDisk.propTypes = {
  newAlbumList: PropTypes.array
};
