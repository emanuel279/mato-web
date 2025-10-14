import Header from "../components/header";
import Footer from "../components/Footer";
import "../styles/ubicacion.css";

export default function UbicacionPage() {
  return (
    <div>
      <Header />

      <main className="ubicacion-background">
        <div className="ubicacion-overlay"></div>

        <div className="ubicacion-container">
          <div className="ubicacion-card">
            <h2>Nuestra Ubicación</h2>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.9438634605094!2d-106.10686162465187!3d28.66139947564901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea4364fa596de9%3A0x799ae75131f6afa6!2sMa-To%20Shoyu%20Ramen!5e0!3m2!1ses-419!2smx!4v1759874220305!5m2!1ses-419!2smx"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <p>C. Fresno 6, Col. Las Granjas, Chihuahua, CP 31100</p>

            <a
              href="https://goo.gl/maps/XXXXX"
              target="_blank"
              className="ubicacion-btn"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}