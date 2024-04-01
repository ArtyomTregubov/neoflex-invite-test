import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Gallery from "./Gallery";
import Basket from "./Basket";
import useStore from "../store";

const App = () => {

  const { items, addItem } = useStore();

  const headphones = [
    {
      id: 1,
      img: "/images/Apple BYZ S852I_image.png",
      title: "Apple BYZ S8521",
      priceDiscont: 3527,
      price: 2927,
      alt: "Картинка наушников",
      rating: 4.7,
    },
      {
      id: 2,
      img: "/images/Apple EarPods_image.png",
      title: "Apple EarPods2",
      price: 2327,
      alt: "Картинка наушников",
      rating: 4.4,
    },
      {
      id: 3,
      img: "/images/Apple EarPods2_image.png",
      title: "Apple EarPods3",
      price: 2327,
      alt: "Картинка наушников",
      rating: 4.8,
    },
    {
      id: 4,
      img: "/images/Apple BYZ S852I_image.png",
      title: "Apple BYZ S8524",
      priceDiscont: 3527,
      price: 2927,
      alt: "Картинка наушников",
      rating: 4.4,
    },
    {
      id: 5,
      img: "/images/Apple EarPods_image.png",
      title: "Apple EarPods5",
      price: 2327,
      alt: "Картинка наушников",
      rating: 4.9,
    },
      {
      id: 6,
      img: "/images/Apple EarPods2_image.png",
      title: "Apple EarPods6",
      price: 2327,
      alt: "Картинка наушников",
      rating: 4.1,
    },
  ]

  const headphonesWireless = [
      {
      id: 7,
      img: "/images/Apple AirPods_image.png",
      title: "Apple AirPods7",
      price: 9527,
      alt: "Картинка наушников",
      rating: 4.4,
    },
    {
      id: 8,
      img: "/images/GERLAX GH-04_image.png",
      title: "GERLAX GH-048",
      price: 6527,
      alt: "Картинка наушников",
      rating: 4.6,
    },
    {
      id: 9,
      img: "/images/BOROFONE BO4_image.png",
      title: "BOROFONE BO49",
      price: 7527,
      alt: "Картинка наушников",
      rating: 4.7,
    }
  ]


  function onAddItemBusket(item) {
    addItem(item)
    localStorage.setItem("items", JSON.stringify([...items, { ...item }]))
  }

  return (
      <div className="page">
        <Routes>
          <Route
            path="/"
              element={
                <main>
                  <Header
                      basketCount={items.length}
                  />
                  <section className="gallery">
                    <Gallery
                        title="Наушники"
                        data={headphones}
                        onCardClick={onAddItemBusket}
                    />
                    <Gallery
                        title="Беспроводные наушники"
                        data={headphonesWireless}
                        onCardClick={onAddItemBusket}
                    />
                  </section>

                  <Footer/>
                </main>
              }
          />
          <Route
            path="/basket"
                element={
                  <main>
                    <Header busketCount={items.length}/>
                    <Basket onCardClick={onAddItemBusket}/>
                    <Footer/>
                  </main>
                }
          />


          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </div>
  );
}

export default App;