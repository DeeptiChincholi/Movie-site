import Header from "./components/Header";
import Cards from "./components/Cards";
import Addmovie from "./components/Addmovie";
import Detail from "./components/Detail";
import PlayMovie from "./components/PlayMovie";
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App relative">
      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/addmovies" element={<Addmovie/>} />
        <Route path="/playmovie/:id" element={<PlayMovie/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
