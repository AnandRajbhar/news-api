//import logo from './logo.svg';
import "./App.css";
import NavBar from "./component/NavBar";
import News from "./component/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="News7*24">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<News pageSize={6} country="in" category="General" />}
          />
          <Route
            path="/Home"
            element={<News pageSize={6} country="in" category="General" />}
          />
          <Route
            path="/Business"
            element={<News pageSize={6} country="in" category="Business" />}
          />
          <Route
            path="/Entertainment"
            element={
              <News pageSize={6} country="in" category="Entertainment" />
            }
          />
          <Route
            path="/General"
            element={<News pageSize={6} country="in" category="General" />}
          />
          <Route
            path="/Health"
            element={<News pageSize={6} country="in" category="Health" />}
          />
          <Route
            path="/Science"
            element={<News pageSize={6} country="in" category="Science" />}
          />
          <Route
            path="/Sports"
            element={<News pageSize={6} country="in" category="Sports" />}
          />
          <Route
            path="/Technology"
            element={<News pageSize={6} country="in" category="Technology" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
