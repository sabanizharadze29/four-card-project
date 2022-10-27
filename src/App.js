import "./App.css";
import Card from "./components/Card";
import data from "./data";
function App() {
  const cards = data.map((card) => {
    const { id, borderTopColor, description, title, imgSrc } = card;
    return (
      <Card
        key={id}
        title={title}
        imgSrc={imgSrc}
        description={description}
        borderTopColor={borderTopColor}
      />
    );
  });
  return (
    <div className="container">
      <header>
        <h3>Reliable, efficient delivery</h3>
        <h4>Powered by Technology</h4>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <div className="card-container">{cards}</div>
    </div>
  );
}

export default App;
