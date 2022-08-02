import './App.less';
import { React, useEffect } from 'react';
import AppHeader from '@/components/AppHeader';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import DiscoverPage from './page/DiscoverPage';
import MyPage from './page/MyPage';
import AttationPage from './page/AttationPage';
import ShopPage from './page/ShopPage';
import MusicianPage from './page/MusicianPage';
import DownloadPage from './page/DowloadPage';
import Album from './page/DiscoverPage/components/Album';
import Artist from './page/DiscoverPage/components/Artist';
import DjRadio from './page/DiscoverPage/components/DjRadio';
import PlayList from './page/DiscoverPage/components/PlayList';
import Recommend from './page/DiscoverPage/components/Recommend';
import TopList from './page/DiscoverPage/components/TopList';
import AppFooter from './components/AppFooter';
import BackTop from './components/BackTop';
function App() {
  useEffect(() => {
    window.onscroll = logScroll;
  });
  const logScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY === 0) {
      document.querySelector('#back').style.display = 'none';
    } else {
      document.querySelector('#back').style.display = 'block';
    }
  };
  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader></AppHeader>
        <div>
          <Routes>
            <Route path="/" element={<DiscoverPage></DiscoverPage>}>
              <Route path="discover" element={<Recommend />}></Route>
              <Route path="discover/artist" element={<Artist />}></Route>
              <Route path="discover/djradio" element={<DjRadio />}></Route>
              <Route path="discover/playlist" element={<PlayList />}></Route>
              <Route path="discover/toplist" element={<TopList />}></Route>
              <Route path="discover/album" element={<Album />}></Route>
            </Route>
            <Route path="my" element={<MyPage />}></Route>
            <Route
              path="friend"
              element={<AttationPage></AttationPage>}
            ></Route>
            <Route path="product" element={<ShopPage></ShopPage>}></Route>
            <Route
              path="musician"
              element={<MusicianPage></MusicianPage>}
            ></Route>
            <Route
              path="download"
              element={<DownloadPage></DownloadPage>}
            ></Route>
          </Routes>
        </div>
        <AppFooter></AppFooter>
        <BackTop></BackTop>
      </div>
    </Provider>
  );
}

export default App;
