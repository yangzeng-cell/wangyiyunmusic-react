import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { TopHeaderWrapper } from './style';
export default class TopHeader extends Component {
  static propTypes = {
    topTitle: PropTypes.string,
    tabList: PropTypes.array,
    moreHref: PropTypes.string
  };

  render() {
    const { tabList = [], moreHref } = this.props;
    return (
      <TopHeaderWrapper>
        <div className="top_title">{this.props.topTitle}</div>
        <ul className="tab">
          {tabList.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>{item.name}</a>
              </li>
            );
          })}
        </ul>
        <div className="more">
          <NavLink className="s-fc3" to={moreHref}>
            更多
          </NavLink>
          <span className="cor s-bg s-bg-6">&nbsp;</span>
        </div>
      </TopHeaderWrapper>
    );
  }
}
