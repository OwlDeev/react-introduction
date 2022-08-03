import "./App.css";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos CSS
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResponsiveGrid from "./components/ResponsiveGrid";

const cards = [
  {
    card: (
      <Card
        src="https://img.freepik.com/foto-gratis/granja-alimentos-organicos_342744-1362.jpg?w=1380&t=st=1659506873~exp=1659507473~hmac=a44a5a4f02496bc73ee2648b25540ca8614310338032b380b1e7d79a63166dc8"
        title="Tomate"
        description="El tomate​ o jitomate (en México)​ es el fruto de la planta Solanum lycopersicum"
      />
    ),
  },
  {
    card: (
      <Card
        src="https://img.freepik.com/vector-gratis/arbol-frutal-durazno_53876-86208.jpg?w=740&t=st=1659506605~exp=1659507205~hmac=a7cf035458e7f20407a37545c9dbe40fafbf486871f0da9f93158a04672dd779"
        title="Durazno "
        description="Su fruto, el melocotón o durazno, contiene una única semilla encerrada en una cáscara dura, el «hueso»"
      />
    ),
  },
  {
    card: (
      <Card
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Black_Che.jpg/1280px-Black_Che.jpg"
        title="Guinda"
        description="erezo de Morello es una especie de Prunus del subgénero Cerasus, nativo de Europa y sudoeste de Asia"
      />
    ),
  },
];

function App() {
  return (
    <>
      <Header title="Galería de Imágenes con React" />
      <ResponsiveGrid
        col1={cards[0].card}
        col2={cards[1].card}
        col3={cards[2].card}
      ></ResponsiveGrid>
      <Footer />
    </>
  );
}
export default App;
