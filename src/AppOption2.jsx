import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import products from "./products";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App(){
    return(
        <div className="ag-theme-alpine" style={{height: 400, width: 900}}>
        <AgGridReact
            rowData={products}>
            <AgGridColumn field="name" sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="description"></AgGridColumn>
            <AgGridColumn field="catigory_id" sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="created_date"></AgGridColumn>
            <AgGridColumn field="updated_date"></AgGridColumn>
            <AgGridColumn field="last_purchase_date"></AgGridColumn>
        </AgGridReact>
    </div>
    );
}

export default App;