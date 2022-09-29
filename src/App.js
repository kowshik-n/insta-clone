import Header from "./components/Header/Header";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App appFont">
      <Header />
        {/* All Routes */}
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
