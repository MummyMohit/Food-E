import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { faL } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';

function Muitable(props) {
  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={props.rows}
      columns={props.columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection ={props.checkboxSelection}
    />
  </div>
  )
}

export default Muitable