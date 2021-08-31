import "./PinImage.css";

export default function PinImage({ p }) {
  return (
    <img src={`/images/pins/${p.id}.jpg`} alt={p.name} className="PinImage" />
  );
}
