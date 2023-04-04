import './styles/App.scss';
import ErrorSuspense from './components/ErrorSuspense';
import Header from './components/Header';

// Pages
import Home from './pages/Home'; 
import NotFound from './pages/NotFound'; 
import LinksPage from './pages/LinksPage/LinksPage';
import MyTeam from './pages/MyTeam/MyTeam';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Routes>
          <Route element={<ErrorSuspense element={<Header/>}/>}>
            <Route index element={<Home/>} />
            <Route path=":name" element={<LinksPage/>} />
            <Route path="/my-team" element={<MyTeam/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
