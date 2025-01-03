import {
  MaterialReactTable,
} from 'material-react-table';
import { Box } from '@mui/material';

const EnhancedTable = ({ table }) => {

  return (
    <Box
      sx={{
        maxHeight: 'calc(100vh - 70px)', 
        overflowY: 'auto',
      }}
    >
        <MaterialReactTable 
          table={table}
          />
        </Box>
  ) 
};

export default EnhancedTable;