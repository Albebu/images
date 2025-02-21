import LazyImage from "./LazyImage";
import TestEjercicio2 from "./TestEjercicio2";

const Ejercicio2 = () => {
  const images = [
    "https://placehold.co/600x400/png",
    "https://placehold.co/600x400/webp",
    "https://placehold.co/600x400/jpeg",
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Ejercicio 2: Lazy Loading en Imágenes
      </h1>
      <p className="mb-4">
        Las siguientes imágenes solo se cargarán cuando sean visibles en la
        pantalla.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <LazyImage key={index} src={src} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
      <hr className="my-6" />
      <TestEjercicio2 />
    </div>
  );
};

export default Ejercicio2;
