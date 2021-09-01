import "./PinImage.css";

export default function PinImage({ src, alt }) {
  return <img src={src} alt={alt} className="PinImage" />;
}
