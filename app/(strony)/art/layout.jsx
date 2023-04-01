import Navigation from "app/components/navigationx";

export default function ArtLayout({ children }) {
  return (
    <>
      <div>{children}</div>
      <div className="navigSlides">
        <Navigation />
      </div>
    </>
  );
}
