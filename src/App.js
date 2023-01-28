import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data/data.js";

function App() {
  const items = data.map((item) => {
    return <Card {...item} />;
  });

  return (
    <div className="App">
      <Header />
      <section>{items}</section>
    </div>
  );
}

export default App;
