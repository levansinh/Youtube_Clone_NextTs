import React, { useEffect, useRef, useState } from 'react';

import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Link from 'next/link'

import { DropDownTypes, MenuItem as MenuItemType } from './types';
import { Popover } from '@mui/material';
import avatarDefault from '@/assets/images/avatar.jpg';


function DropDown({
  avatar,
  buttonIconFirst,
  buttonText,
  btnSx,
  menuItem,
  onClickItem,
}: DropDownTypes) {
  const [open, setOpen] = useState(false);

  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => setOpen(prevOpen => !prevOpen);

  const handleClose = (event: Event | React.SyntheticEvent<Element, Event>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    onClickItem instanceof Function && onClickItem(event);
    setOpen(false);
  };

  const prevOpen = React.useRef(open);

//   useEffect(() => {
//     if (prevOpen.current && !open) anchorRef.current?.focus();

//     prevOpen.current = open;
//   }, [open]);

  return (
    <>
      <ButtonBase
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        type="button"
        sx={btnSx}
      >
        {avatar && <Avatar src={avatar} sx={{ width: '24px', height: '24px' }} />}
        {buttonIconFirst}
        {buttonText}
      </ButtonBase>
      <Popover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Paper>
          <MenuList
            autoFocusItem={open}
            id="composition-menu"
            aria-labelledby="composition-button"
          >
            {menuItem?.map(({ title, icon ,path, sx, id, onClick }: MenuItemType, key: number) => (
              <MenuItem
                sx={{ fontSize: '14px', ...sx }}
                key={key}
                id={id}
                onClick={e => {
                  handleClose(e);
                  onClick ? onClick() : null;
                }}
              >
                {path ? <Link href={path}>{icon} {title}</Link> : title}
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Popover>
    </>
  );
}

export default DropDown;