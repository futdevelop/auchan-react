import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable
} from 'material-react-table';
import { useSelector } from 'react-redux';
import { selectData } from '../../store/selectors';
import EnhancedTable from '../../components/EnhancedTable';
import PulseLoader from 'react-spinners/PulseLoader';

const EnhancedTableContainer = () => {
  const { data, statusLoading } = useSelector(selectData);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id', //access nested data with dot notation
        header: 'Id',
        size: 50,
        
      },
      {
        accessorKey: 'description',
        header: 'Description',
        // size: 300,
      },
      {
        accessorKey: 'closingCreditBalance', //normal accessorKey
        header: 'Closing Credit Balance',
        // size: 100,
      },
      {
        accessorKey: 'closingDebitBalance',
        header: 'Closing Debit Balance',
        // size: 100,
      },
      {
        accessorKey: 'openingCreditBalance',
        header: 'Opening Credit Balance',
        // size: 150,
      },
      {
        accessorKey: 'openingDebitBalance',
        header: 'Opening Debit Balance',
        // size: 150,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  if (statusLoading === 'loading') {
    return (
      <div className='loader'>
        <PulseLoader color='#120e1f' size='20px' />
      </div>
    )
  } else {
    return <EnhancedTable table={table} />
  }

};

export default EnhancedTableContainer;