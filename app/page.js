import Header from "./components/header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />

        {/* Nueva sección de horarios */}
        <section className="relative bg-white text-black py-16 px-6 md:px-16 text-center">
          {/* Título rojo */}
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-red-500">
            Disfruta nuestro ramen en estos días 🍜
          </h2>

          {/* Tarjetas de horarios */}
          <div className="grid grid-cols-5 gap-4 max-w-6xl mx-auto mb-6">
            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-1">Lunes</h3>
              <p className="text-gray-600 text-sm">7:00 PM - 10:00 PM</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-1">Martes de jazz</h3>
              <p className="text-gray-600 text-sm">7:00 PM - 10:00 PM</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-1">Miércoles</h3>
              <p className="text-gray-600 text-sm">Cerrado</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-1">Jueves</h3>
              <p className="text-gray-600 text-sm">7:00 PM - 10:00 PM</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-1">Viernes</h3>
              <p className="text-gray-600 text-sm">7:00 PM - 10:30 PM</p>
            </div>
          </div>

          {/* Segunda fila con 2 tarjetas */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-1">Sábado</h3>
              <p className="text-gray-600 text-sm">7:00 PM - 10:30 PM</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-1">Domingo</h3>
              <p className="text-gray-600 text-sm">7:00 PM - 10:00 PM</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}