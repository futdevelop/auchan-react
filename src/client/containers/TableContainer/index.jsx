import React from 'react'
import { useSelector } from 'react-redux'
import Table from '../../components/Table'
import PulseLoader from "react-spinners/PulseLoader";
import { selectData } from '../../store/selectors';

const accountsColumns = [
  { field: 'id', headerName: 'Id', minWidth: 100 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'closingCreditBalance', headerName: 'Closing Credit Balance',  minWidth: 200 },
  { field: 'closingDebitBalance', headerName: 'Closing Debit Balance',  minWidth: 180 },
  { field: 'openingCreditBalance', headerName: 'Opening Credit Balance', minWidth: 180 },
  { field: 'openingDebitBalance', headerName: 'Opening Debit Balance', minWidth: 180 },
];

const paginationModel = { page: 0, pageSize: 10 }

const TableContainer = () => {
  const { data, statusLoading } = useSelector(selectData);

  if (statusLoading === 'loading') {
    return (
      <div className='loader'>
        <PulseLoader color='#120e1f' size='20px' />
      </div>
    )
  } else {
    return <Table accountsColumns={accountsColumns} paginationModel={paginationModel} rows={data} />
  }

}

export default TableContainer