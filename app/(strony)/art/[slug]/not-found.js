import Image from "next/image";

export default function PostNotFound() {
  return (
    <div className="mainSlajdy">
      <div style={{ position: "relative", width: "800px", height: "600px" }}>
        <Image
          fill
          quality="100"
          alt="kervion not found error 404"
          src="/not-found.png"
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </div>
    </div>
  );
}
