import Header from "../components/header";
import Footer from "../components/Footer";
import Image from "next/image";
import "../styles/menu.css";

export default function MenuPage() {
  const platillos = [
    {
      titulo: "Ramen de res - 145$",
      descripcion:
        "Con jugosos trozos de res marinada y huevo de yema cremosa también marinado, acompañados de cebollín, ajonjolí y algas. Una combinación robusta y reconfortante.",
      imgSrc: "/ramen-img/ramen 1.png",
    },
    {
      titulo: "Ramen de cerdo - 140$",
      descripcion:
        "Servido con deliciosos pedazos de cerdo y huevo de yema cremosa, ambos marinados, acompañados de cebollín, ajonjolí y algas. El favorito tradicional lleno de sabor.",
      imgSrc: "/ramen-img/ramen 1.png",
    },
    {
      titulo: "Ramen de camarón - 150$",
      descripcion:
        "Acompañado de camarones marinados y huevo de yema cremosa también marinado, complementados con cebollín, ajonjolí y algas. Una opción fresca y deliciosa.",
      imgSrc: "/ramen-img/ramen 1.png",
    },
  ];

  return (
    <div>
      <Header />
      <main className="menu-background">
        <div className="menu-overlay"></div>

        <div className="menu-container">
          {/* Header rojo + imagen */}
          <div className="menu-header">
            <div className="menu-box">
              <h1>Ma-To Shoyu Ramen</h1>
              <p>
                Todos los platillos son acompañados con rico caldo de cerdo.
              </p>
            </div>
            <div className="menu-image">
              <Image
                src="/ramen-img/caldo.jpeg"
                alt="Caldo de ramen"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="menu-gradient"></div>
            </div>
          </div>

          {/* Tarjetas con línea divisora */}
          <div className="menu-cards">
            {/* Línea amarilla vertical a la derecha */}
            <div className="menu-divider"></div>

            {/* Tarjeta 1 */}
            <div className="menu-card">
              <div className="menu-card-img-left">
                <Image
                  src={platillos[0].imgSrc}
                  alt="Platillo"
                  width={440}
                  height={440}
                />
              </div>
              <div
                className="menu-card-bg"
                style={{ justifyContent: "flex-end" }}
              >
                <div className="menu-card-content">
                  <h2>{platillos[0].titulo}</h2>
                  <p>{platillos[0].descripcion}</p>
                </div>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="menu-card">
              <div
                className="menu-card-bg"
                style={{ justifyContent: "flex-start" }}
              >
                <div className="menu-card-content">
                  <h2>{platillos[1].titulo}</h2>
                  <p>{platillos[1].descripcion}</p>
                </div>
              </div>
              <div className="menu-card-img-right">
                <Image
                  src={platillos[1].imgSrc}
                  alt="Platillo"
                  width={440}
                  height={440}
                />
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="menu-card">
              <div className="menu-card-img-left">
                <Image
                  src={platillos[2].imgSrc}
                  alt="Platillo"
                  width={440}
                  height={440}
                />
              </div>
              <div
                className="menu-card-bg"
                style={{ justifyContent: "flex-end" }}
              >
                <div className="menu-card-content">
                  <h2>{platillos[2].titulo}</h2>
                  <p>{platillos[2].descripcion}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Extras */}
          <div className="extras-section">
            <h2>Extras</h2>
          </div>

           {/* Contenedor de mini tarjetas */}
        <div className="extras-cards">
          <div className="extras-card">
            <h3>Huevo extra - 25$</h3>
            <p>Huevo marinado con yema cremosa.</p>
          </div>
          
          <div className="extras-card">
            <h3>Fideos extra - 35$</h3>
            <p>Porción extra de fideos frescos y suaves.</p>
          </div>

          <div className="extras-card">
            <h3>Camarón extra - 55$</h3>
            <p>Camarones jugosos con el toque de mar que encanta.</p>
          </div>

          <div className="extras-card">
            <h3>Res extra - 50$</h3>
            <p>Tiernos trozos de res que enriquecen tu ramen.</p>
          </div>

          <div className="extras-card">
            <h3>Cerdo extra - 50$</h3>
            <p>Deliciosa carne de cerdo marinada, llena de sabor.</p>
          </div>



        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

