import Header from "../components/header";
import Footer from "../components/Footer";
import "../styles/promociones.css";

export default function PromocionesPage() {
  // En el futuro esto vendrá de la app o base de datos
  const promociones = [];

  const hayPromociones = promociones.length > 0;

  return (
    <div>
      <Header />

      <main className="Promociones-background">
        <div className="promociones-overlay"></div>

        <div className="promociones-container">
          {hayPromociones ? (
            // Aquí se mostrarán las promociones reales
            promociones.map((promo, index) => (
              <div key={index} className="promo-card">
                <h2>{promo.titulo}</h2>
                <p>{promo.descripcion}</p>
              </div>
            ))
          ) : (
            <div className="sin-promociones">
              <div className="sin-promociones-box">
                <h1>Por el momento no hay promociones</h1>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}