import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import StarBorder from '@mui/icons-material/StarBorder'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import { Link } from 'react-router-dom'

import './style.scss'

export default function Sidebar({ open, handleClick }) {
  return (
    <div className='sidebar'>
      <List
        sx={{
          width: '400px',
          height: 'calc(100vh - 70px)', // ! для тесту
          maxWidth: '100%',
          bgcolor: '#120e1f',
          color: 'white',
        }}
        component='nav'
        aria-labelledby='nested-list-subheader'
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon sx={{ color: 'white' }}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary='Inbound' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <Link
              to='/general-accounts'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ color: 'white' }}>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary='Оборотно-сальдова відомість' />
              </ListItemButton>
            </Link>

            <Link
              to='/general-entries'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ color: 'white' }}>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary='Журнали ГК' />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
      </List>
    </div>
  )
}
