import Header from './component/Header';
import './App.css';
import DayList from './component/DayList';
import Day from './component/Day';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NotFound from './component/NotFound';


function App() {
  return (    
    <BrowserRouter>
    <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element={<DayList />}/>
      <Route path="day/:day" element={<Day />}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;
