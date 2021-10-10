import '../App.scss';
import {Button} from './Button';
import './HeroSection.css';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import React, { useState, useEffect } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function HeroSection(){
//   const rowData = [
//     {make: "Toyota", model: "Celica", price: 35000},
//     {make: "Ford", model: "Mondeo", price: 32000},
//     {make: "Porsche", model: "Boxter", price: 72000}
// ];

const [rowData, setRowData] = useState([]);

useEffect(() => {
     fetch('https://www.ag-grid.com/example-assets/row-data.json')
     .then(result => result.json())
     .then(rowData => setRowData(rowData))
 }, []);


    return(
      //   <div className='hero-container'>
      //   <video src='/videos/video-1.mp4' autoPlay loop muted />
      //   <h1>ADVENTURE AWAITS</h1>
      //   <p>What are you waiting for?</p>
      //   <div className='hero-btns'>
      //     <Button
      //       className='btns'
      //       buttonStyle='btn--outline'
      //       buttonSize='btn--large'>
      //       GET STARTED
      //     </Button>
      //     <Button
      //       className='btns'
      //       buttonStyle='btn--primary'
      //       buttonSize='btn--large'
      //       onClick={console.log('hey')} >
      //       WATCH TRAILER <i className='far fa-play-circle' />
      //     </Button>
      //   </div>
      // </div>
        <div className="ag-theme-alpine p-2" style={{height: 400, width: 600}}>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="make"  sortable={ true }></AgGridColumn>
                <AgGridColumn field="model"  sortable={ true }></AgGridColumn>
                <AgGridColumn field="price"  sortable={ true }></AgGridColumn>
            </AgGridReact>
        </div>
    );

}

export default HeroSection;