"use client"
import { Box, Typography, Card, CardContent, CardMedia, Button, useTheme, useMediaQuery, Stack } from "@mui/material"
import AirIcon from "@mui/icons-material/Air"
import AcUnitIcon from "@mui/icons-material/AcUnit"
import ThermostatIcon from "@mui/icons-material/Thermostat"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import place1 from '../assets/images/place1.jpg';
import place2 from '../assets/images/place2.jpg';
import parasuite_icon from '../assets/images/parasuite_icon.png';
import cloud_icon from '../assets/images/cloud_icon.png';
import apple_icon from '../assets/images/apple_icon.png';
import playstore_icon from '../assets/images/playstore_icon.png';
import fence_icon from '../assets/images/fence_icon.png';

const TravelApp = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box
      sx={{
        paddingLeft: { xs: "0", sm: "0", md: "0", lg: "110px" },
        paddingRight: { xs: "0", sm: "0", md: "0", lg: "110px" },
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 2, sm: 3, md: 4 },
        marginTop: { xs: 6, sm: 10, md: 5 },
        padding: { xs: 2, sm: 3, md: 4 },
        width: "100%",
        flex: 1,
        boxSizing: "border-box",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          paddingLeft: { xs: "0", sm: "0", md: "0", lg: "150px" },
          paddingRight: { xs: "0", sm: "0", md: "0", lg: "110px" },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "50%",
          padding: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "30px",
            backgroundColor: "rgb(255, 255, 255)",
            display: "flex",
            flexDirection: "column",
            width: "60%",
            height: "600px",
            boxShadow: "20px -20px 40px rgba(212, 210, 210, 0.48)",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", padding: "20px" }}>
            <Box>
              <Typography
                sx={{
                  marginTop: "50px",
                  marginLeft: "50px",
                  fontSize: { xs: "10px", sm: "25px", md: "30px", lg: "50px" },
                  fontWeight: "bold",
                }}
              >
                -12°C
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", marginTop: "50px", marginLeft: "20px" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <AirIcon sx={{ color: "#ff6b35", mr: 1 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Wind
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    13 km
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AcUnitIcon sx={{ color: "#ff6b35", mr: 1 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Snow
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    80 cm
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Hot air balloon logo */}
          <Box sx={{ position: "absolute", top: "-50px", left: "-50px" }}>
            <Box
              component="img"
              src={parasuite_icon}
              alt="Hot air balloon logo"
              sx={{ height: 60, width: 60 }}
            />
          </Box>
          <Box sx={{ position: "absolute", top: "100%", left: "150%" }}>
            <Box
              component="img"
              src={cloud_icon}
              alt="Hot air balloon logo"
              sx={{ height: 60, width: 60 }}
            />
          </Box>

          {/* Destination cards in absolute positioned box */}
          <Box
            sx={{
              position: "absolute",
              borderRadius: "30px",
              backgroundColor: "rgb(255, 255, 255)",
              display: "flex",
              justifyContent: "space-between",
              width: "180%",
              height: "280px",
              left: "-15%",
              top:"30%",
              bottom: "20px",
              padding: "20px",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card sx={{ width: "48%", borderRadius: 4, overflow: "hidden", height: "100%" }}>
              <CardMedia
                component="img"
                height="160"
                image={place1}
                alt="Morocco desert"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="h2" sx={{ fontWeight: "bold", mb: 1 }}>
                  Morocco
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", color: "#999" }}>
                  <Typography variant="body2">YVR</Typography>
                  <Box component="span" sx={{ mx: 1 }}>
                    →
                  </Box>
                  <Typography variant="body2">LAX</Typography>
                  <Box component="span" sx={{ mx: 1 }}>
                    →
                  </Box>
                  <Typography variant="body2">DXB</Typography>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ width: "50%", borderRadius: 4, overflow: "hidden", height: "100%" }}>
              <CardMedia
                component="img"
                height="160"
                image={place2}
                alt="Denver road"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="h2" sx={{ fontWeight: "bold", mb: 1 }}>
                  Denver
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", color: "#999" }}>
                  <Typography variant="body2">YVR</Typography>
                  <Box component="span" sx={{ mx: 1 }}>
                    →
                  </Box>
                  <Typography variant="body2">LAX</Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Weather metrics at the bottom */}
          <Box
            sx={{
              position: "absolute",
              bottom: "-30px",
              left: "-5%",
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              p: 2,
              bgcolor: "#f9f9f9",
              borderRadius: 4,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  color: "#ff6b35",
                  bgcolor: "#fff",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  mb: 1,
                }}
              >
                <ThermostatIcon />
              </Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                -12 C°
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Temp
              </Typography>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  color: "#ff6b35",
                  bgcolor: "#fff",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  mb: 1,
                }}
              >
                <WbSunnyIcon />
              </Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                13 km
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Wind
              </Typography>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  color: "#ff6b35",
                  bgcolor: "#fff",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  mb: 1,
                }}
              >
                <LocationOnIcon />
              </Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                80 cm
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Snow
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          paddingLeft: { xs: "0", sm: "0", md: "0", lg: "110px" },
          paddingRight: { xs: "0", sm: "0", md: "0", lg: "110px" },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "50%",
          padding: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#666",
              letterSpacing: 2,
              mb: 2,
            }}
          >
            GET CONNECTED
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
              color: "#0a1929",
            }}
          >
            It is better to<br/> travel well than<br/> to arrive
            <Box
              component="img"
              src={fence_icon}
              alt="Signpost"
              sx={{ height: 40, width: 40, ml: 1, verticalAlign: "middle" }}
            />
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 1,
              fontWeight: "bold",
            }}
          >
            Your ultimate travel companion.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "#333",
            }}
          >
            Carries all the information you need while travelling.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: 8,
                py: 1.5,
                px: 3,
                textTransform: "none",
                bgcolor: "#fff",
                color: "#000",
                border: "2px solid #eee",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                "&:hover": {
                  bgcolor: "#f5f5f5",
                },
              }}
              startIcon={
                <Box component="img" src={playstore_icon} alt="Google Play" sx={{ height: 24 }} />
              }
            >
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="caption" display="block" sx={{ opacity: 0.7 }}>
                  Get it from
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Google Play
                </Typography>
              </Box>
            </Button>

            <Button
              variant="contained"
              sx={{
                borderRadius: 8,
                py: 1.5,
                px: 3,
                textTransform: "none",
                bgcolor: "#fff",
                color: "#000",
                border: "2px solid #eee",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                "&:hover": {
                  bgcolor: "#f5f5f5",
                },
              }}
              startIcon={
                <Box component="img" src={apple_icon} alt="Apple Store" sx={{ height: 24 }} />
              }
            >
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="caption" display="block" sx={{ opacity: 0.7 }}>
                  Download on the
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Apple Store
                </Typography>
              </Box>
            </Button>
          </Stack>
        </Box>

        {/* Cloud decoration */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            right: 20,
            opacity: 0.7,
          }}
        >
          <Box component="img" src={cloud_icon} alt="Cloud" sx={{ height: 60 }} />
        </Box>
      </Box>
    </Box>
  )
}

export default TravelApp
