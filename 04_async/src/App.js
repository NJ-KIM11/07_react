import ApiComponent from "./02_api/02_fetch-then";
import { AxiosCallComponent } from "./02_api/03_axios";
import EmojiContainer from "./02_api/04_github-emoji";
import Container from "./03_data-component/01_rendering-components";
import Weather from "./03_data-component/02_weather-promise";
import { Weather1 } from "./03_data-component/03_weather-async";
import Map from "./03_data-component/ApiQuestion/Kakaomap";

function App() {
  return (
    <>
      {/* <ApiComponent/> */}
      {/* <AxiosCallComponent/> */}
      {/* <EmojiContainer/> */}
      {/* <Container/> */}
      {/* <Weather/> */}
      {/* <Weather1/> */}
      <Map/>
    </>
  );
}

export default App;
