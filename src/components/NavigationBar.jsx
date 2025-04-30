// Import necessary modules and assets
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import logo1 from '../assets/images/logo1.png';

// Navigation items for the menu
const navItems = ['Review', 'Destination', 'Ticket', 'Blog'];

function NavigationBar({ window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(navItems[0]);

  // Handle navigation item click to update the selected item state
  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  // Toggle the state of the mobile drawer
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Drawer content for mobile view
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        component="img"
        src={logo1}
        alt="Logo"
        sx={{
          height: 'auto',
          width: '150px',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* Add "Get the App" Button */}
      <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
        <Button
          sx={{
            fontWeight: 'bold',
            fontSize: '15px',
            backgroundColor: '#ff5722',
            color: 'white',
            textTransform: 'none',
            width: '80%',
            height: '50px',
            borderRadius: '10px',
            boxShadow: '0px 10px 35px rgba(218, 53, 31, 0.48)',
            transition: 'all 0.5s ease',  // Smooth transition for the hover effect
            '&:hover': {
                      backgroundColor: '#e64a19', // Darker shade of the button's color
                      transform: 'scale(1.05)', // Slightly increase the size
                      boxShadow: '0px 12px 40px rgba(218, 53, 31, 0.6)', // Enhanced shadow
                    },
          }}
          
        >
          Get the App
        </Button>
      </Box>
    </Box>
  );

  // Container for the responsive drawer (mobile optimization)
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <AppBar
      component="nav"
      sx={{
        borderBottom: 'none',
        boxShadow: 'none',
        backgroundColor: 'transparent',
        paddingTop: '20px',
        paddingBottom: '100px',
        paddingLeft: { xs: '0', sm: '0', md: '0', lg: '110px' },
        paddingRight: { xs: '0', sm: '0', md: '0', lg: '110px' },
        height: { xs: '50px', sm: '60px', md: '70px' },
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Short border at the bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '85%',
          height: '2px',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        }}
      />
      {/* Toolbar containing the logo, search bar, navigation buttons, and mobile menu icon */}
      <Toolbar>
        {/* Logo Section */}
        <Box
          component="img"
          src={logo1}
          alt="Logo"
          sx={{
            paddingRight: '80px',
            display: 'flex',
            width: 'auto',
            height: 'auto',
          }}
        />

        {/* Search Bar Section (hidden on small screens) */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
            alignItems: 'center',
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search destinations..."
            sx={{
              backgroundColor: 'white',
              width: { md: '60px', lg: 'auto' },
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                border: 'none',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .MuiInputBase-input': {
                fontWeight: 'bold',
                color: 'black',
                height: '50px',
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'orange' }} />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        {/* Navigation Buttons (hidden on small screens) */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
            marginLeft: { xs: '8px', sm: '16px' },
            gap: 3,
            paddingRight: '10px',
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '5px', sm: '10px', md: '15px', lg: '20px' },
                color: 'black',
                textTransform: 'none',
                borderBottom: selectedItem === item ? '2px solid orange' : 'none',
                borderRadius: '0',
                '&:hover': {
                  borderBottom: '2px solid orange',
                  backgroundColor: 'transparent',
                },
                '&:focus': {
                  borderBottom: '2px solid orange',
                  backgroundColor: 'transparent',
                },
              }}
              onClick={() => handleMenuItemClick(item)}
            >
              {item}
            </Button>
          ))}

          {/* Call-to-Action Button */}
          <Button
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '5px', sm: '10px', md: '15px', lg: '20px' },
              backgroundColor: '#ff5722',
              color: 'white',
              textTransform: 'none',
              width: { xs: 'auto', sm: 'auto', md: '150px', lg: '180px' },
              height: { xs: 'auto', sm: '50px', mb: '70px', lg: '70px' },
              borderRadius: '10px',
              boxShadow: '0px 10px 35px rgba(218, 53, 31, 0.48)',
            }}
          >
            Get the App
          </Button>
        </Box>

        {/* Mobile Menu Icon (visible only on small screens) */}
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: 'flex', md: 'none' },
            position: 'fixed',
            top: '35px',
            right: '10px',
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': {
              backgroundColor: 'rgb(248, 248, 248)',
              width: '100%',
              height: '100%',
              boxSizing: 'border-box',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

// PropTypes for component props
NavigationBar.propTypes = {
  window: PropTypes.func,
};

export default NavigationBar;
