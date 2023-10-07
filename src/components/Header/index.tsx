'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Search from './Search';
import Action from '../Actions';
import { Box } from '@mui/material';
import styles from './styles';

const StyledContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  position: sticky;
  top: 0;
`;
const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function Header() {
  const handleToggle = () => {};
  return (
    <StyledContainer>
      <StyledLogo>
        <DensityMediumIcon onClick={handleToggle} sx={{ cursor: 'pointer' }} />
        <Image src={logo} width={120} height={56} alt="logo youtube" />
      </StyledLogo>
      <Box sx={{ ...styles.boxWrapperFrom }}>
        <Box sx={styles.boxFromControl}>
          <Search />
        </Box>
      </Box>
      <Box display="flex" gap="12px" marginLeft={2}>
        <Action />
      </Box>
    </StyledContainer>
  );
}
