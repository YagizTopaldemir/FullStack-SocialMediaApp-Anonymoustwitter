import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import HomePages from './pages/HomePages';
import AdminPage from './pages/AdminPage';
import Leftnavbar from './component/leftnavbar';
import Rightnavbar from './component/Rightnavbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Leftnavbar />
      <Rightnavbar />
      <div className='pages'>
        <Routes>
          <Route path='/' Component={HomePages}/>
          <Route path='/Admin/77' Component={AdminPage}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
