import { useState } from "react";

const Gallery = ({ photos }) => {
  const [size, setSize] = useState("thumb");
  const [selected, setSelected] = useState(null);
  return (
    <div>
      {photos.map((p) => (
        <div className="display-flex" key={p.id}>
          <button className="btn">
            <img src={p.urls[size]} alt={`Taken by ${p.user.name}`} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
