import Paper from '@mui/material/Paper'
import { DataGrid } from '@mui/x-data-grid'
import * as React from 'react'

const Table = ({ rows, accountsColumns, paginationModel }) => (
    <Paper sx={{ width: '100%', height: 692 }}>
      <DataGrid
        rows={rows}
        columns={accountsColumns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
        sx={{
          border: 0,
          '& .MuiDataGrid-root': {
            overflowX: 'auto',
          },
        }}
      />
    </Paper>
  )

export default Table;