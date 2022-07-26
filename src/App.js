import './App.less';
import { React } from 'react';
import AppHeader from '@/components/AppHeader';
import { Route, Routes } from 'react-router-dom';
import FoundPage from './page/FoundPage';
import MyPage from './page/MyPage';
import AttationPage from './page/AttationPage';
import ShopPage from './page/ShopPage';
import MusicianPage from './page/MusicianPage';
import DownloadPage from './page/DowloadPage';
function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <div>
        <Routes>
          <Route path="/" element={<FoundPage></FoundPage>}></Route>
          <Route path="my" element={<MyPage />}></Route>
          <Route path="friend" element={<AttationPage></AttationPage>}></Route>
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
    </div>
  );
}

export default App;
