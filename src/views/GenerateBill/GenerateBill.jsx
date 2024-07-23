
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CCol, CRow, CCard, CCardBody, CForm, CFormInput, CButton } from '@coreui/react';
import { saveAs } from 'file-saver';
import Muitable from 'share/muitable';
import { Edit } from 'views/field/pic';
import { Delete } from 'views/field/pic';
import Modal from 'share/Modal';
import Offcanvs from 'share/Offcanvs';
import { faL } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index';
import AddBill from './AddBill';

const GenerateBill = () => {
  const [rows, setRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const[visible,setVisible]= useState(false); 
  const[canvasopen,setCanvasopen] = useState(false);

const handleDeleteClick = ()=>{
  setVisible(!visible);
}
  
const handlecloseClick = ()=>{
  setCanvasopen(false);

}

const handleModalclose = () =>{
  setVisible(false);
}

const handleEditClick = ()=>{
  setCanvasopen(true);
}

  const columns = [
    { field: 'id', headerName: 'Uid', width: 70 },
    { field: 'title', headerName: 'Name', width: 70 },
    { field: 'brand', headerName: 'Address', width: 70 },
    { field: 'description', headerName: 'Scno', width: 90 },
    { field: 'price', headerName: 'Units', type: 'number', width: 90 },
    { field: 'category', headerName: 'Date', type: 'number', width: 90 },
    { field: 'sku', headerName: 'Due Date', type: 'number', width: 90 },
    { field: 'rating', headerName: 'Due Amount', type: 'number', width: 90 },
    { field: 'discountPercentage', headerName: 'Total Amount', type: 'number', width: 90 },
   
    {
    field: 'actions',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => (
      <>
        <CButton  size="sm" onClick={() => handleEditClick(params.row)}>
        <img src={Edit} alt="Edit" style={{ width: '16px', height: '16px' }} />
        </CButton>
        <CButton  size="sm" onClick={() => handleDeleteClick(params.row.id)}>
        <img src={Delete} alt="Delete" style={{ width: '16px', height: '16px' }} />
        </CButton>
      </>
    )
  }
  ];



  const fetchData = async () => {

    try{
    const response = await axios.get('https://dummyjson.com/products')
    const product = response.data.products;
    setRows(product);
    }
    catch(error)
    {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchData();
  }, []);

  const downloadCSV = () => {
    const csvRows = [];
    const headers = columns.map(col => col.headerName).join(',');
    csvRows.push(headers);

    for (const row of rows) {
      const values = columns.map(col => row[col.field] || '').join(',');
      csvRows.push(values);
    }

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'table_data.csv');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredRows = rows.filter(row => {
    return Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
     <CFormInput
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{width:"200px",height:"34px",marginBottom:"15px",borderRadius:"18px"}}
            />
      <CCard>
        <CCardBody>
          <Muitable rows={filteredRows} columns={columns} />
          <CButton color="primary" onClick={downloadCSV}>
            Download CSV
          </CButton>
        </CCardBody>
      </CCard>

      <Modal
      visible={visible}
      title={"are you sure want to delete this Id"}
      handleModalclose={handleModalclose}
      />
      
      <Offcanvs
      visible={canvasopen}
      handleCloseClick={handlecloseClick}
      component={
        <AddBill
        handleCloseClick={handlecloseClick}
        rows={rows}
        />
      }
      title={"Bill Users"}
      />
    </>
  );
};

export default GenerateBill;
