import products from "./products";
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import ExcelFile from "./OrgProducts.xlsx";

function App() {
  return (
    <div>
        <h1 className="heading">Product List:</h1>
        <ReactFlexyTable data={products} filterable />
  
    </div>
  );
}

export default App;
