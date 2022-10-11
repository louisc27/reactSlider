import ImageSlider from "./ImageSlider";

const App = () => {
  const slides = [
    { url: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "beach" },
    { url: "https://images.pexels.com/photos/5416429/pexels-photo-5416429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "boat" ,caption: "test"},
    { url: "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "forest" },
    { url: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "city" },
    { url: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Slideshow</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );}

export default App;
