import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonMui from "./components/MuiComponents/ButtonMui";
import ButtonGoupMui from "./components/MuiComponents/ButtonGoupMui";
import Header from "./components/MuiComponents/Header";
import Footer from "./components/MuiComponents/Footer";
import CheckBoxMui from "./components/MuiComponents/CheckBoxMui";
import RadioMui from "./components/MuiComponents/RadioMui";
import SliderMui from "./components/MuiComponents/SliderMui";
import SelectMui from "./components/MuiComponents/SelectMui";
import TextFieldMui from "./components/MuiComponents/TextFieldMui";
import SwitchMui from "./components/MuiComponents/SwitchMui";
import BadgeMui from "./components/MuiComponents/BadgeMui";
import HomePageMui from "./components/MuiComponents/HomePageMui";
import TabsMui from "./components/MuiComponents/TabsMui";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePageMui />} />
          <Route path="/button" element={<ButtonMui />} />
          <Route path="/buttonGroup" element={<ButtonGoupMui />} />
          <Route path="/checkBoxMui" element={<CheckBoxMui />} />
          <Route path="/radioMui" element={<RadioMui />} />
          <Route path="/sliderMui" element={<SliderMui />} />
          <Route path="/selectMui" element={<SelectMui />} />
          <Route path="/textFieldMui" element={<TextFieldMui />} />
          <Route path="/switchMui" element={<SwitchMui />} />
          <Route path="/badgeMui" element={<BadgeMui />} />
          <Route path="/tabsMui" element={<TabsMui />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
