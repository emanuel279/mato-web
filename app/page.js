import Header from "./components/header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />

        <section className="relative bg-white text-black py-12 sm:py-16 px-4 sm:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-red-500">
            Disfruta nuestro ramen en estos días 🍜
          </h2>

          {/* Fila principal */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-6">
            {[
              ["Lunes", "7:00 PM - 10:00 PM"],
              ["Martes de jazz", "7:00 PM - 10:00 PM"],
              ["Miércoles", "Cerrado"],
              ["Jueves", "7:00 PM - 10:00 PM"],
              ["Viernes", "7:00 PM - 10:30 PM"],
            ].map(([dia, hora], i) => (
              <div
                key={i}
                className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition"
              >
                <h3 className="text-base sm:text-lg font-semibold mb-1">{dia}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{hora}</p>
              </div>
            ))}
          </div>

          {/* Segunda fila */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            {[
              ["Sábado", "7:00 PM - 10:30 PM"],
              ["Domingo", "7:00 PM - 10:00 PM"],
            ].map(([dia, hora], i) => (
              <div
                key={i}
                className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition"
              >
                <h3 className="text-base sm:text-lg font-semibold mb-1">{dia}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{hora}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
