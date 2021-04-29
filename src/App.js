import products from "./products";
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import ExcelFile from "./OrgProducts.xlsx";

function App() {
  return (
    <div>
      <div className="info">

        <form action="/" method="POST">
          <h1>Search for PRODUCT by name !</h1>
          <label>Enter product name:</label>
          <input type="text" name="productName" placeholder="enter product name" />
          <br />

          <button className="button" name="submit" type="submit">Search Product</button>
        </form>
      </div>

      <div>
        <h1 className="heading">Product List:</h1>
        <ReactFlexyTable data={products} filterable />

      </div>
    </div>
  );
}

export default App;
