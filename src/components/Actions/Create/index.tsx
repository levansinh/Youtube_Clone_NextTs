import DropDown from '@/components/Dropdown'
import { Stack } from '@mui/material'
import React from 'react'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import styles from '../styles';
import CameraIcon from '@mui/icons-material/Camera';
import StreamIcon from '@mui/icons-material/Stream';

const list = [
    {icon: <CameraIcon />, title: 'Upload Video'},
    {icon: <StreamIcon />, title: 'Go live'},
]
export default function Create() {
  return (
    <Stack direction="row" spacing={2}>
      <div>
        <DropDown
          buttonIcon
          menuItem={list}
          btnSx={styles.btn}
          buttonIconFirst={<VideoCameraBackIcon/>}
        />
      </div>
    </Stack>
  )
}
