import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DropDown from '@/components/Dropdown';
import { Stack } from '@mui/material';
import styles from '../styles';
export default function Notification() {
  return (
    <Stack direction="row" spacing={2}>
    <div>
      <DropDown
        buttonIcon
        menuItem={[
        
        ]}
        btnSx={styles.btn}
        buttonIconFirst={<NotificationsNoneIcon/>}
      />
    </div>
  </Stack>
  )
}
