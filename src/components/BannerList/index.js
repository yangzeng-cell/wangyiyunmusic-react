import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import { BannerListWrapper } from './style';

export default class BannerList extends Component {
  static propTypes = { topBanners: PropTypes.array };
  constructor(props) {
    super(props);
    this.state = {
      totalLength: props.topBanners.length,
      currentIndex: 0,
      preIndex: -1
    };

    // this.totalLength = props.topBanners.length;
    // this.currentIndex = 0;
    // this.preIndex = -1;

    this.bannerRef = createRef();
    this.dotsRef = createRef();
    this.bgBannerRef = createRef();
    this.timer = null;
  }
  componentDidMount() {
    this.timer = this.start();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  start() {
    const timer = setInterval(() => {
      if (!this.bannerRef.current) return;
      this.bannerRef.current.style.transform = `translateX(${
        -this.state.currentIndex * 730
      }px)`;
      if (this.state.preIndex !== -1) {
        this.dotsRef.current.children[this.state.preIndex].classList.remove(
          'dot_focus'
        );
      }

      this.dotsRef.current.children[this.state.currentIndex].classList.add(
        'dot_focus'
      );
      this.bgBannerRef.current.style.background = `url(${
        this.props.topBanners[this.state.currentIndex].imageUrl
      }?imageView&blur=40x20)`;
      this.setState({
        currentIndex:
          this.state.currentIndex + 1 === 8 ? 0 : this.state.currentIndex + 1,
        preIndex: this.state.currentIndex
      });
    }, 2000);
    return timer;
  }
  clickArrow(direction) {
    clearInterval(this.timer);
    this.timer = null;
    // this.setState({
    //   preIndex: this.state.currentIndex
    // });

    if (this.state.preIndex !== -1) {
      this.dotsRef.current.children[this.state.preIndex].classList.remove(
        'dot_focus'
      );
    }
    if (direction === 'left') {
      this.setState({
        currentIndex:
          this.state.currentIndex - 1 === -1 ? 7 : this.state.currentIndex - 1,
        preIndex: this.state.currentIndex
      });
    } else {
      this.setState({
        currentIndex:
          this.state.currentIndex + 1 === 8 ? 0 : this.state.currentIndex + 1,
        preIndex: this.state.currentIndex
      });
    }
    this.dotsRef.current.children[this.state.currentIndex].classList.add(
      'dot_focus'
    );
    this.bannerRef.current.style.transform = `translateX(${
      -this.state.currentIndex * 730
    }px)`;
    this.bgBannerRef.current.style.background = `url(${
      this.props.topBanners[this.state.currentIndex].imageUrl
    }?imageView&blur=40x20)`;
  }
  render() {
    const len = this.props.topBanners.length;
    let alist = [];
    for (let i = 0; i < len; i++) {
      alist.push(
        <a href="/#" key={'e' + i} className="click_flag" data-index={i}></a>
      );
    }

    return (
      <BannerListWrapper>
        <div className="banner_bg" ref={this.bgBannerRef}>
          <div className="outer">
            <div className="wrap">
              <div
                className="banner_img"
                ref={this.bannerRef}
                style={{ width: this.totalLength + 'px' }}
              >
                {this.props.topBanners.map((images) => {
                  return (
                    <a
                      className="image_link"
                      data-index={images.targetId}
                      key={images.imageUrl}
                      href="/#"
                    >
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
                <span className="shadow"></span>
                <span className="shadowr"></span>
              </div>
              <div className="dots" ref={this.dotsRef}>
                {alist}
              </div>
            </div>
            <a
              className="banner_button buttonl"
              onClick={() => this.clickArrow('left')}
              href="#"
            >
              left
            </a>
            <a
              className="banner_button buttonr"
              onClick={() => this.clickArrow('right')}
              href="#"
            >
              right
            </a>
          </div>
        </div>
      </BannerListWrapper>
    );
  }
}
