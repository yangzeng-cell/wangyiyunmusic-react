import React from 'react';
import { PlayerBarWrapper } from './style';

export default function PlayerBar() {
  return (
    <PlayerBarWrapper className="playerbar">
      <div className="play">
        <div className="btns">
          <a className="prev playerbar" title="上一首(ctrl+←)" href="#">
            上一首
          </a>
          <a className="play playerbar" title="播放/暂停(p)" href="#">
            播放/暂停
          </a>
          <a className="next playerbar" title="下一首(ctrl+→)" href="#">
            下一首
          </a>
        </div>
        <div className="avator"></div>
        <div className="play"></div>
        <div className="operator"></div>
        <div className="controller"></div>
      </div>
    </PlayerBarWrapper>
  );
}
