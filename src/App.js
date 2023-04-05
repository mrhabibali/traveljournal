import "./App.css";
import Banner from "./components/Banner";
import Destination from "./components/Destination";

function App() {
  let items = [
    {
      id: 1,
      img: "https://source.unsplash.com/WLxQvbMyfas",
      country: "Japan",
      link: "https://www.google.com/maps/place/Fuji-san/@35.3606422,138.7186086,15z/data=!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA",
      title: "Mount Fuji",
      date: "12 Jan, 2021 - 24 Jan, 2021",
      info: "Mount Fuji is the tallest mountain in Japan.",
    },
    {
      id: 2,
      img: "https://source.unsplash.com/JmuyB_LibRo",
      country: "Australia",
      link: "https://www.google.com/maps/place/Operahuset+i+Sydney/@-33.8567799,151.210812,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0",
      title: "Sydney Opera House",
      date: "27 May, 2021 - 8 Jun, 2021",
      info: "The Sydney opera house is a famous building in Australia.",
    },
    {
      id: 3,
      img: "https://source.unsplash.com/3PeSjpLVtLg",
      country: "Norway",
      link: "https://www.google.com/maps/place/Geirangerfjorden/@62.1049113,7.0051741,12z/data=!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi",
      title: "Geiranger Fjord",
      date: "01 Oct, 2021 - 18 Nov, 2021",
      info: "The Geiranger Fjord is a well known fjord in Norway.",
    },
  ];

  const destinations = items.map((item) => {
    return <Destination key={item.id} item={item} />;
  });

  return (
    <div>
      <Banner />
      {destinations}
    </div>
  );
}

export default App;
