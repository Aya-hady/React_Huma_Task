import "./App.css";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Table from "./components/common/Table";

function App() {
  const products = [
    {
      name: "Laptop",
      price: 25000,
      category: "Electronics",
    },
    {
      name: "Smartphone",
      price: 15000,
      category: "Electronics",
    },
    {
      name: "Headphones",
      price: 2000,
      category: "Accessories",
    },
  ];

  const handleLogin = () => {
    alert("Login button clicked!");
  };

  const handleDelete = () => {
    alert("Delete button clicked!");
  };

  return (
  <div className="app-container">
    <header className="page-header">
      <h1>Product Management</h1>
      <p>
        Explore our reusable React components through a simple product
        management interface.
      </p>
    </header>

    {/* Buttons */}
    <section className="content-section">
      <div className="section-header">
        <h2>Quick Actions</h2>
        <p>
          Use the available actions to manage your products and perform
          common tasks.
        </p>
      </div>

      <div className="actions">
        <Button
          text="Login"
          onClick={handleLogin}
          variant="primary"
        />

        <Button
          text="Delete"
          onClick={handleDelete}
          variant="danger"
        />
      </div>
    </section>

    {/* Cards */}
    <section className="content-section">
      <div className="section-header">
        <h2>Featured Products</h2>
        <p>
          Browse some of our available products and view their details.
        </p>
      </div>

      <div className="cards-container">
        <Card
          title="Laptop"
          description="A powerful laptop designed for work, study, and everyday productivity."
        >
          <Button
            text="View Details"
            onClick={() => alert("Laptop details")}
            variant="secondary"
          />
        </Card>

        <Card
          title="Smartphone"
          description="A modern smartphone with useful features for communication and entertainment."
        >
          <Button
            text="View Details"
            onClick={() => alert("Smartphone details")}
            variant="secondary"
          />
        </Card>
      </div>
    </section>

    {/* Table */}
    <section className="content-section">
      <div className="section-header">
        <h2>Product Inventory</h2>
        <p>
          View the available products, their prices, and their categories
          in one place.
        </p>
      </div>

      <Table
        columns={["name", "price", "category"]}
        data={products}
        striped={true}
      />
    </section>
  </div>
);
}

export default App;