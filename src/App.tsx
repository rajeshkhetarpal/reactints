import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import ReactDataGrid from "react-data-grid";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


const columns = [
  { key: "id", name: "ID", editable: true },
  { key: "title", name: "Title", editable: true },
  { key: "complete", name: "Complete", editable: true }
];

const rows = [
  { id: 0, title: "Task 1", complete: 20 },
  { id: 1, title: "Task 2", complete: 40 },
  { id: 2, title: "Task 3", complete: 60 }
];

const columnDefs =  [{
  headerName: "Make", field: "make"
}, {
  headerName: "Model", field: "model"
}, {
  headerName: "Price", field: "price"
}]

const rowData =  [{
  make: "Toyota", model: "Celica", price: 35000 ,sortable: true, filter: true 
}, {
  make: "Ford", model: "Mondeo", price: 32000
}, {
  make: "Porsche", model: "Boxter", price: 72000
}]


const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  }
}));

const GridContainer =()=>{
  const classes = useStyles();
  return(
    <>
      <ReactDataGrid
        columns={columns}
        rowGetter={(i:any) => rows[i]}
        rowsCount={3}
        enableCellSelect={true}
      /> 
    <div className="ag-theme-balham"
    style={{ 
    height: '500px', 
    width: '600px' }}>
    

<AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}>
        </AgGridReact>
    </div>
    </>
  )
}

const App: React.FC = () => {
  return (
    <div >
      <GridContainer />
    </div>
  );
}

export default App;
