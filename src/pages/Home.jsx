import * as React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Avatar, Box } from '@mui/material';
import Button from '@mui/material/Button';
import avatar1 from '../assets/images/avatar1.jpg';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import cloud_image from '../assets/images/cloud_image.png';
import plane_image from '../assets/images/plane_image.png';
import AvatarGroup from '@mui/material/AvatarGroup';
import flight_icon from '../assets/images/flight_icon.png';
import parasuite_icon from '../assets/images/parasuite_icon.png';
import cloud_icon from '../assets/images/cloud_icon.png';
import compas_icon from '../assets/images/compas_icon.png';
import live_icon from '../assets/images/live_icon.png';
import {  Divider } from '@mui/material';
import Footer from '../components/Footer';
import TravelApp from '../components/TravelApp';
import TravelCarousel from '../components/TravelCarousel';
import TravelBoxes from '../components/TravelBoxes';
import DealsBanner from '../components/DealsBanner';

const Home = () => {


    return (
        <Box
            sx={{
                backgroundColor: 'rgb(248, 248, 248)', 
                minHeight: '100vh', 
                width: '100vw', 
                boxSizing: 'border-box',
                overflow: 'hidden', 
            }}
        
        >
            <NavigationBar />

            <Box
                sx={{
                    paddingLeft: { xs: '0', sm: '0', md: '0', lg: '110px' },
                    paddingRight: { xs: '0', sm: '0', md: '0', lg: '110px' },
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: 2, sm: 3, md: 4 },
                    marginTop: { xs: 6, sm: 10, md: 5 },
                    padding: { xs: 2, sm: 3, md: 4 },
                    width: '100%',
                    flex: 1,
                    boxSizing: 'border-box',
                }}
            >
                <Box
                    sx={{
                        paddingLeft: { xs: '0', sm: '0', md: '0', lg: '110px' },
                        paddingRight: { xs: '0', sm: '0', md: '0', lg: '110px' },
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '50%',
                        padding: { xs: 2, sm: 3, md: 1 },
                    }}
                >
                    <p
                        style={{
                            fontSize: '4.5vw',
                            fontWeight: 'bold',
                        }}
                    >
                        People don't <br /> take trips, trips<br />
                        Take people
                    </p>
                    <p
                        style={{
                            fontSize: '1vw',
                            fontWeight: 'bold',
                        }}
                    >
                        To get the best of your adventure you just<br />
                        need to leave and go where you like. We are<br />
                        waiting for you!
                    </p>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 2,
                            marginTop: 4,
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: '#ff5722',
                                color: 'white',
                                textTransform: 'none',
                                fontWeight: 'bold',
                                fontSize: { xs: '16px', sm: '20px' },
                                width: { xs: '100%', sm: '190px' },
                                height: '70px',
                                borderRadius: '10px',
                                boxShadow: '0px 10px 35px rgba(218, 53, 31, 0.48)',
                                paddingTop: '5px',
                                transition: 'all 0.3s ease', // Smooth transition for the hover effect
                                '&:hover': {
                                  backgroundColor: '#e64a19', // Darker shade of the button's color
                                  transform: 'scale(1.05)', // Slightly increase the size
                                  boxShadow: '0px 12px 40px rgba(218, 53, 31, 0.6)', // Enhanced shadow
                                },
                              }}
                              
                        >
                            Plan a Trip &gt;
                        </Button>

                        <Box
                            sx={{
                                position: 'relative',
                                width: { xs: 80, sm: 100 },
                                height: { xs: 80, sm: 100 },
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: { xs: 80, sm: 100 },
                                    height: { xs: 80, sm: 100 },
                                    backgroundColor: 'transparent',
                                    border: '2px solid red',
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: '90%',
                                        height: '90%',
                                    }}
                                    src={avatar1}
                                />
                            </Avatar>
                            <PlayCircleFilledWhiteIcon
                                sx={{
                                    paddingRight: '10px',
                                    position: 'absolute',
                                    width: { xs: 40, sm: 60 },
                                    height: { xs: 40, sm: 60 },
                                    top: '50%',
                                    left: '100%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'black',
                                }}
                            />
                        </Box>

                        <p
                            style={{
                                paddingleft: '30px',
                                fontweight: 'bold',
                                fontsize: '1vw',
                                paddingLeft: '10px',
                                fontWeight: 'bold',
                                fontSize: { xs: '250px', sm: '258px' },
                                textAlign: { xs: 'center', sm: 'left' },
                            }}
                        >
                            Watch Our<br />
                            Story
                        </p>
                    </Box>
                    <img
  src={cloud_icon}
  alt="Icon"
  style={{
    position: 'absolute',
    top: '1%',
    left: '1%',
    transform: 'translate(-100%, -100%) rotate(-5deg)',
    width: 'auto',
    height: 'auto',
    maxWidth: '70px',
    maxHeight: '70px',
    animation: 'moveX 4s ease-in-out infinite',
  }}
/>

<style>
{`
  @keyframes moveX {
    0%, 100% {
      transform: translateX(0) rotate(-5deg);
    }
    50% {
      transform: translateX(20px) rotate(-5deg);
    }
  }
`}
</style>
                </Box>

                <Box
                    sx={{
                        paddingLeft: { xs: '0', sm: '0', md: '0', lg: '110px' },
                        paddingRight: { xs: '0', sm: '0', md: '0', lg: '110px' },
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '50%',
                        padding: { xs: 2, sm: 3, md: 4 },
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            borderRadius: '30px',
                            backgroundColor: 'rgba(4, 191, 238, 0.34)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '550px',
                            height: '550px',
                        }}
                    >
                        <img
                            src={img1}
                            style={{
                                borderRadius: '20px',
                                maxWidth: '100%',
                                height: 'auto',
                                paddingBottom: '40px',
                                opacity: 1,
                            }}
                            alt="Example"
                        />
<Box
  sx={{
    backgroundColor: 'rgb(255, 255, 255)',
    position: 'absolute',
    top: '30%',
    left: '85%',
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '180px',
    height: '230px',
    animation: 'moveX 5s ease-in-out infinite',
  }}
>
  <img
    src={live_icon}
    alt="Icon"
    style={{
      position: 'absolute',
      top: '40%',
      left: '70%',
      transform: 'translate(-100%, -100%) rotate(0deg)',
      width: 'auto',
      height: 'auto',
      maxWidth: '70px',
      maxHeight: '70px',
    }}
  />
  <p
    style={{
      paddingTop: '110px',
      textAlign: 'center',
      fontSize: '1.5vw',
      fontWeight: 'bold',
    }}
  >
    24/7<br />
    <span
      style={{
        fontSize: '1vw',
        fontWeight: 'bold',
      }}
    >
      Guide Support
    </span>
  </p>
</Box>

<style>
{`
  @keyframes moveX {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(20px);
    }
  }
`}
</style>
                        <img
  src={parasuite_icon}
  alt="Icon"
  style={{
    position: 'absolute',
    top: '-5%',
    left: '-10%',
    transform: 'translate(-100%, -100%) rotate(0deg)',
    width: 'auto',
    height: 'auto',
    maxWidth: '70px',
    maxHeight: '70px',
    animation: 'float 3s ease-in-out infinite',
  }}
/>

    <style>
    {`
    @keyframes float {
        0%, 100% {
        transform: translate(-100%, -100%) rotate(-5deg) translateY(0);
        }
        50% {
        transform: translate(-100%, -100%) rotate(-5deg) translateY(-30px);
        }
    }
    `}
    </style>

                        <img
                            src={flight_icon}
                            alt="Icon"
                            style={{
                                position: 'absolute',
                                top: '1%',
                                left: '120%',
                                transform: 'translate(-100%, -100%) rotate(-5deg)',
                                width: 'auto',
                                height: 'auto',
                                maxWidth: '70px',
                                maxHeight: '70px',
                            }}
                        />
                        <img
  src={cloud_icon}
  alt="Icon"
  style={{
    position: 'absolute',
    top: '25%',
    left: '135%',
    transform: 'translate(-100%, -100%) rotate(-5deg)',
    width: 'auto',
    height: 'auto',
    maxWidth: '70px',
    maxHeight: '70px',
    animation: 'floatCloud 4s ease-in-out infinite',
  }}
/>

<style>
{`
  @keyframes floatCloud {
    0%, 100% {
      transform: translate(-100%, -100%) rotate(-5deg) translateY(0);
    }
    50% {
      transform: translate(-100%, -100%) rotate(-5deg) translateY(-15px);
    }
  }
`}
</style>

                        <img
                            src={compas_icon}
                            alt="Icon"
                            style={{
                                position: 'absolute',
                                top: '130%',
                                left: '120%',
                                transform: 'translate(-100%, -100%) rotate(-5deg)',
                                width: 'auto',
                                height: 'auto',
                                maxWidth: '150px',
                                maxHeight: '150px',
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{ 
                    paddingLeft: { xs: '0', sm: '0', md: '0', lg: '110px' },
                    paddingRight: { xs: '0', sm: '0', md: '0', lg: '110px' },            
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'column' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: 2, sm: 3, md: 4 },
                    marginTop: { xs: 6, sm: 10, md: 5 },
                    width: '100%',
                    flex: 1, 
                    boxSizing: 'border-box',
                }}
            >
                
                <AvatarGroup
                    renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
                    total={4251}
                    spacing="small"
                    sx={{
                        // Responsive scaling of AvatarGroup
                        '@media (max-width: 600px)': {
                            fontSize: '14px', // Smaller font size on small screens
                        },
                        '@media (min-width: 600px) and (max-width: 960px)': {
                            fontSize: '18px', // Medium font size on medium screens
                        },
                        '@media (min-width: 960px)': {
                            fontSize: '22px', // Larger font size on larger screens
                        },
                     }}
                >
                    <Avatar 
                        alt="Remy Sharp" 
                        src={avatar1} 
                        sx={{
                            width: { xs: 40, sm: 50, md: 80 }, // Responsive width of the avatar
                            height: { xs: 40, sm: 50, md: 80 }, // Responsive height of the avatar
                        }} 
                    />
                    <Avatar 
                        alt="Travis Howard" 
                        src={avatar1} 
                        sx={{
                            width: { xs: 40, sm: 50, md: 80 },
                            height: { xs: 40, sm: 50, md: 80 },
                        }} 
                    />
                    <Avatar 
                        alt="Cindy Baker" 
                        src={avatar1} 
                        sx={{
                            width: { xs: 40, sm: 50, md: 80 },
                            height: { xs: 40, sm: 50, md: 80 },
                        }} 
                    />
                </AvatarGroup>
                <p style={{
                        fontSize: '1.5vw',
                        fontWeight: 'bold',
                        margin:0
                    }}>
                    Traveled more than<br />2000 places
                 </p>  
            </Box>

            <Box
                sx={{
                    paddingLeft: { xs: '0', sm: '0', md: '0', lg: '40px' },
                    paddingRight: { xs: '0', sm: '0', md: '0', lg: '40px' },            
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: 2, sm: 3, md: 4 },
                    marginTop: { xs: 6, sm: 10, md: 5 },
                    padding: { xs: 2, sm: 3, md: 4 },
                    width: '100%',
                    flex: 1, 
                    boxSizing: 'border-box',
                        
                }} 
            >
                <Box
                    sx={{ 
                        position:'relative',
                        paddingTop: { xs: 2, sm: 3, md: 4 },
                        paddingBottom: { xs: 2, sm: 3, md: 4 },
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row',md:'row' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height:'350px',
                        boxSizing: 'border-box',
                        
                        borderRadius: '35px',
                        backgroundColor: 'rgb(15, 34, 143)',  


                     }}
                >
                    <Box
                        sx={{
                            top: '-10%',
                            left: '8%',
                            paddingLeft:'10px',
                            position: 'absolute',
                            borderRadius: '30px',
                            flexDirection: { xs: 'column', sm: 'column',md:'row' },
                            backgroundColor: 'rgb(50, 203, 241)',
                            width: { xs: '100%', sm: '400px' }, // Responsive width
                            height: { xs: 'auto', sm: '300px' }, // Responsive height
                            maxWidth: '100%',
                            maxHeight: '100%',
                            display: { xs: 'none', md: 'block' }, // Visible on xs, hidden on md and above
                        }}
                    >
                    <Box
                        component="img"
                        src={img2}
                        alt="img2"
                        sx={{
                            position: 'absolute',
                            top: '-50%',
                            left: '1%',
                            width: { xs: '50%', sm: '400px' }, // Responsive width
                            height: { xs: 'auto', sm: '400px' }, // Responsive height
                            display: { xs: 'none', md: 'block' }, // Visible on xs, hidden on md and above
                        }}
                    />


                        <Box
                            component="img"
                            src={cloud_image}
                            alt="cloud"
                            sx={{
                                position: 'absolute',
                                top: '40%',
                                left: '-1%',
                                width: 'auto',
                                height: 'auto',
                                maxWidth: '400px',
                                maxHeight: '400px',
                                transform: 'rotate(15deg)'
                            }}
                        />

                    </Box>
                    <p style={{color:"white",fontweight:'bold',fontSize:'35px',paddingBottom:'120px',fontFamily:'sans-serif'}}>Your travel companion that carries <br/>all the information</p>
                    
                    <Box
                        component="img"
                        src={img3}
                        alt="img3"
                        style={{
                            position: 'absolute',
                            top: '-72%',
                            left: '70%',
                            width: 'auto',
                            height: 'auto',
                            maxWidth: '600px',
                            maxHeight: '600px',
                            display: { xs: 'none',sm:'none',md:'none'}, // Visible on xs, hidden on sm and above
                        }}
                    />
                    <Box
                        component="img"
                        src={plane_image}
                        alt="img3"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '40%',
                            transform:'rotate(-5deg)',
                            width: 'auto',
                            height: 'auto',
                            maxWidth: '250px',
                            maxHeight: '250px',
                        }}
                    />
                    <Box
                    component="img"
                    src={cloud_image}
                    alt="cloud"
                    style={{
                        position: 'absolute',
                        top: '40%',
                        left: '65%',
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '150px',
                        maxHeight: '150px',
                        transform: 'rotate(15deg)',
                        animation: 'moveX 5s ease-in-out infinite',
                    }}
                    />

                    <style>
                    {`
                    @keyframes moveX {
                        0%, 100% {
                        transform: translateX(0) rotate(15deg);
                        }
                        50% {
                        transform: translateX(20px) rotate(15deg);
                        }
                    }
                    `}
                    </style>
                    </Box>
                     </Box>

                <TravelBoxes/>
            
                <TravelCarousel/>

            <Box 
                sx={{ 
                    paddingLeft: { xs: '0', sm: '0', md: '0', lg: '110px' },
                    paddingRight: { xs: '0', sm: '0', md: '0', lg: '110px' }, 
                    }}
                >
            <Divider sx={{ my: 2   , borderColor: 'black' ,opacity:0.2}} /> 
            </Box>

            <DealsBanner/>
            <TravelApp/>

            <Footer/>

        </Box>
    );
};

export default Home;
