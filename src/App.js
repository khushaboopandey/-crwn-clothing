import "./App.css";
import "./categories.styles.scss";

function App() {
  const categories = [
    { id: 1, title: "Hats" },
    { id: 1, title: "Jacket" },
    { id: 1, title: "Sneakers" },
    { id: 1, title: "women's" },
    { id: 1, title: "Mens" },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => {
        return (
          <div key={id} className="category-container">
            <img src="" alt="" />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
