import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
           <Route path="/" element={<HomeComponent />}></Route>       
         </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}
