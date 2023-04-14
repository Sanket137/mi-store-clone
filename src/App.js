import PreNavbar from "./components/PreNavbar.jsx";
import Navbar from "./components/Navbar.jsx";
import Slider from "./components/Slider.jsx";
import Offers from "./components/Offers.jsx";
import Heading from "./components/Heading.jsx";
import StarProducts from "./components/StarProducts.jsx";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.jsx";
import HotAccessories from "./components/HotAccessories.jsx";
import ProductReviews from "./components/ProductReviews.jsx";
import Videos from "./components/Videos.jsx";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./data/data.json";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text={"STAR PRODUCT"} />
      <StarProducts starProducts={data.starProduct} />
      <Heading text={"HOT ACCESSORIES"} />
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path="/music"
          element={
            <HotAccessories
            dataImage={data.hotAccessories.music}
            dataImageCover={data.hotAccessoriesCover.music}
            />
          }
        >
        </Route>
        <Route exact path="/devices"
          element={
            <HotAccessories
            dataImage={data.hotAccessories.smartDevice}
            dataImageCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        >
        </Route>
        <Route exact path="/home"
          element={
            <HotAccessories
            dataImage={data.hotAccessories.home}
            dataImageCover={data.hotAccessoriesCover.home}
            />
          }
        >
        </Route>
        <Route exact path="/lifestyle"
          element={
            <HotAccessories
            dataImage={data.hotAccessories.lifeStyle}
            dataImageCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        >
        </Route>
        <Route exact path="/accessories"
          element={
            <HotAccessories
            dataImage={data.hotAccessories.mobileAccessories}
            dataImageCover={data.hotAccessoriesCover.mobileAccessories}
            />
          }
        >
        </Route>
      </Routes>
      <Heading text={"PRODUCT REVIEWS"} />
      <ProductReviews ProductReviews={data.productReviews}/>
      <Heading text={"VIDEOS"} />
      <Videos videos={data.videos}/>
      <Heading text={"IN THE PRESS"} />
      <Banner end={data.banner.end}/>
      <Heading text={"IN THE PRESS"} />
      <Footer/>
    </Router>

  );
}

export default App;
