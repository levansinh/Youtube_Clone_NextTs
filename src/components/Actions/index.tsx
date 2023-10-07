import React from 'react'
import Create from './Create'
import Notification from './Notifications'
import DropDown from '../Dropdown'
import { Stack } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './styles'
export default function Action() {
  return (
 <>
    <Create />
    <Notification />
    <Stack direction="row" spacing={2}>
      <div>
        <DropDown
          buttonIcon
          btnSx={styles.btn}
          avatar={'male'}
        />
      </div>
    </Stack>
    </>
  )
}
