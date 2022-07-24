import "./styles.css";
import photos from "./photos";
import Gallery from "./features/Gallery/Gallery";
export default function App() {
  return (
    <div className="App">
      <h3>Photos courtesy of Unsplash and it's users</h3>
      <div className="container">
        <Gallery photos={photos} />
      </div>
    </div>
  );
}
