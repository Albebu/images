import ImageOptimizer from "./ImageOptimizer";
import TestEjercicio1 from "./TestEjercicio1";

const Ejercicio1 = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Ejercicio 1: Optimización de Imágenes
      </h1>
      <p className="mb-4">
        Sube una imagen y conviértela a diferentes formatos. Luego, compara los
        tamaños de archivo.
      </p>
      <ImageOptimizer />
      <hr className="my-6" />
      <TestEjercicio1 />
    </div>
  );
};

export default Ejercicio1;
