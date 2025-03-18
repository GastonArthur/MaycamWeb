import { useEffect, useState } from "react";
import { websiteData } from "@/app/lib/data-service";

export default function NavbarLogo() {
  const [logoData, setLogoData] = useState({ type: "", image: "", text: "" });
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Simulando una carga de datos
    setLogoData(websiteData.logo);
  }, []);

  if (!logoData.type || (!logoData.image && !logoData.text)) {
    return null; // No renderizar si no hay logo válido
  }

  return (
    <>
      {logoData.type === "image" && logoData.image && !imageError ? (
        <div className="h-8 w-auto">
          <img
            src={logoData.image}
            alt="Logo"
            className="h-full w-auto object-contain"
            onError={() => setImageError(true)}
          />
        </div>
      ) : logoData.text ? (
        <span className="text-xl font-bold text-white">{logoData.text}</span>
      ) : null}
    </>
  );
}
