import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Storefront } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '24%',
  left: '86%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[5],
  p: 2,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ width: "1565px", paddingBottom: "21px", position: "fixed", overflowX: 'hidden', overflowY: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', marginTop: "25px" } }}
          >
            Shimoni's Shop
          </Typography>
          <button className="button" style={{ backgroundColor: "white", color: "black", border: "none", padding: "10px 20px", marginTop: "25px", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", transition: "background-color 0.3s" }}>
            <Link to="login" style={{ textDecoration: "none", color: "black" }}>Login/Register</Link></button>
          <Search sx={{ mt: 3 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: -2.6, ml: 0, mt: 2.6 }}
            onClick={handleOpenModal}
          >
            <Storefront />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="category-modal-title"
        aria-describedby="category-modal-description"
      >
        <ModalContainer>
          <Typography variant="h6" id="category-modal-title" sx={{ mb: 2 }}>
            Categories
          </Typography>
          <List>
            {/* Add your categories as list items */}
            <ListItemButton>
              <ListItemText primary="Category 1" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Category 2" />
            </ListItemButton>
            {/* Add more categories as needed */}
          </List>
        </ModalContainer>
      </Modal>

    </Box>
  );
}