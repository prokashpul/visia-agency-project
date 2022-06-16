import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Error from "./pages/error/Error";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
