import Image from "next/image";

export default function Loader({ text }) {
  return (
    <div className="spinnerWrap">
      <div className="spinner">
        <Image className="spinnerImg" src="/spinner.png" alt="kervion spinner" width={100} height={100} />
        <div className="loadingText">Loading {text}...</div>
      </div>
    </div>
  );
}
