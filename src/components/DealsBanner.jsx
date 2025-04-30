import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import plane from '../assets/images/plane_image.png';

const DealsBanner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: { xs: 2, sm: 3, md: 4 },
        marginTop: { xs: 6, sm: 10, md: 5 },
        padding: { xs: 2, sm: 3, md: 4 },
        width: '100%',
        flex: 1,
        boxSizing: 'border-box',
        paddingLeft: { xs: '0', sm: '0', md: '0', lg: '110px' },
        paddingRight: { xs: '0', sm: '0', md: '0', lg: '110px' },
        gap: 5,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#242582',
          color: 'white',
          padding: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          borderRadius: 10,
          paddingLeft: { xs: '0', sm: '0', md: '0', lg: '700px' },
          paddingRight: { xs: '0', sm: '0', md: '0', lg: '700px' },
        }}
      >
        {/* Plane image */}
        <Box
          component="img"
          src={plane} // Replace with the actual path to your plane image
          alt="Plane"
          sx={{
            width: '200px',
            height: 'auto',
            marginBottom: 2,
            height: '300px',
          }}
        />

        {/* Text Section */}
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            marginBottom: 2,
            left: '10%',
            gap: 2,
          }}
        >
          {/* Get Tickets Button */}
          <Button
            variant="contained"
            sx={{
              height: '100px',
              width: '200px',
              paddingBottom: '10px',
              backgroundColor: '#00b0f0',
              ':hover': {
                backgroundColor: '#007bbf',
                transform: 'scale(1.1)',
                transition: 'all 0.3s ease',
              },
              borderRadius: '8px',
              fontWeight: 'bold',
            }}
          >
            Get Tickets
          </Button>
          <Typography variant="h4" fontWeight="bold">
            Find the best deals
          </Typography>
        </Box>

        {/* Sponsor Section */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 200,
            right: 100,
            textAlign: 'right',
          }}
        >
          <Typography variant="body1" fontWeight="bold">
            Sponsored by -
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            HAWKS
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DealsBanner;
