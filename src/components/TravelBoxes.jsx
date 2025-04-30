import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import img1 from '../assets/images/img1.jpg';
import live_icon from '../assets/images/live_icon.png';

const TravelBoxes = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: 2,
        padding: 2,
        paddingLeft: { xs: 0, sm: 0, md: 0, lg: "110px" },
        paddingRight: { xs: 0, sm: 0, md: 0, lg: "110px" },
        height: "600px",
        paddingTop: "200px",
        position: "relative",
      }}
    >
      {/* Left Section */}
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 3,
          borderRadius: 8,
          boxShadow: 3,
          backgroundColor: "rgba(119, 81, 81, 0.61)",
          display: { xs: "none", sm: "block" },
        }}
      >
        <img
          src={img1}
          alt="Traveler"
          style={{
            borderRadius: "10px",
            position: "absolute",
            top: "10%",
            left:'20%'
          }}
          sx={{
            width: { xs: "50%", sm: "70%", md: "80%" }, // Responsive width
            display: { xs: "none", sm: "none" }, // Hide on small screens
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Pushes content to corners
            alignItems: "center",
            position: "absolute",
            top: "75%",
            width: { xs: "10%", sm: "25%", md: "39%" }, // Responsive width
            padding: "10px 20px",
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            fontSize={{ xs: 20, md: 35 }} // Responsive font size
            sx={{ marginRight: "10px", textAlign: "left" }}
          >
            Explore the world <br /> with us 🌍
          </Typography>
          <Button
            variant="contained"
            sx={{
              height: "50%",
              borderRadius: "20px",
              backgroundColor: "rgb(223, 67, 67)",
              padding: "10px 20px",
              fontWeight: "bold",
            }}
          >
            Plan a Trip &gt;
          </Button>
        </Box>
      </Card>

      {/* Right Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 2,
        }}
      >
        {/* Blog */}
        <Card
          sx={{
            padding: 2,
            borderRadius: 8,
            boxShadow: 3,
            backgroundColor: "rgba(53, 218, 218, 0.61)",
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              Read our blog ↗️
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              We have shared our journey and some stories.
            </Typography>
          </CardContent>
        </Card>

        {/* Workflow */}
        <Card
          sx={{
            padding: 2,
            borderRadius: 8,
            boxShadow: 3,
            backgroundColor: "rgba(119, 81, 81, 0.61)",
            height: "150%",
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
            Chat With Expert ↗️<br/>
            <img src={live_icon} width={100} height={100} style={{ paddingLeft:"100px" ,paddingTop:'40px'}}>
            </img>
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
            3,000+ expert team members who create incredible projects.
            </Typography>
          </CardContent>
        </Card>

        {/* Chat with Expert */}
        <Card
          sx={{
            backgroundColor: "rgba(185, 211, 68, 0.61)",
            padding: 2,
            borderRadius: 8,
            boxShadow: 3,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ textAlign: "center", flexGrow: 1 }}>
            <Typography variant="h6" fontWeight="bold">
             
              See our <br/>workflow ↗️
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
            It’s a must that we would <br/>like to share our workflow to <br/>build trust.
            
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default TravelBoxes;
