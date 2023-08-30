import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Edit } from './components/Edit';
import { Create } from './components/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path="/create" element={<Create/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
