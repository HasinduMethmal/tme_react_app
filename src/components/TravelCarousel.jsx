"use client"
import place1 from '../assets/images/place1.jpg';
import place2 from '../assets/images/place2.jpg';
import place3 from '../assets/images/place3.jpg';
import place4 from '../assets/images/place4.jpg';
import { useState } from "react"
import { Box, Typography, IconButton, Card, CardMedia, useMediaQuery, useTheme } from "@mui/material"
import { ChevronLeft, ChevronRight, LocationOn } from "@mui/icons-material"

const destinations = [
  {
    id: 1,
    name: "Venice",
    image: place1,
    alt: "Venice canal with historic buildings",
  },
  {
    id: 2,
    name: "Iceland",
    image: place2,
    alt: "Small red house in Iceland's green landscape",
  },
  {
    id: 3,
    name: "Moab",
    image: place3,
    alt: "Red rock formations in Moab with a yellow van on the road",
  },
  {
    id: 4,
    name: "Arizona",
    image: place4,
    alt: "Arizona canyon landscape with a person",
  },
  {
    id: 5,
    name: "Arizona",
    image: place4,
    alt: "Arizona canyon landscape with a person",
  },
]

export default function TravelCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  const visibleItems = isMobile ? 1 : isTablet ? 2 : 4
  const totalSlides = Math.ceil(destinations.length / visibleItems)

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1))
  }

  const getVisibleDestinations = () => {
    const start = (activeIndex * visibleItems) % destinations.length
    const visibleDestinations = []

    for (let i = 0; i < visibleItems; i++) {
      const index = (start + i) % destinations.length
      visibleDestinations.push(destinations[index])
    }

    return visibleDestinations
  }

  return (
    <Box sx={{ width: "100%", padding: 4, maxWidth: "1200px", margin: "0 auto" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#2D0A43",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Discover the touch of nature{" "}
          <span role="img" aria-label="rainbow">
            🌈
          </span>
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            onClick={handlePrev}
            sx={{
              border: "1px solid #E0E0E0",
              borderRadius: "50%",
              width: { xs: 40, md: 60 },
              height: { xs: 40, md: 60 },
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              border: "1px solid #E0E0E0",
              borderRadius: "50%",
              width: { xs: 40, md: 60 },
              height: { xs: 40, md: 60 },
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "hidden",
          transition: "transform 0.5s ease",
        }}
      >
        {getVisibleDestinations().map((destination) => (
          <Card
            key={destination.id}
            sx={{
              borderRadius: "16px",
              overflow: "hidden",
              flex: `0 0 calc(${100 / visibleItems}% - ${((visibleItems - 1) * 12) / visibleItems}px)`,
              position: "relative",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={destination.image}
              alt={destination.alt}
              sx={{ objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "4px 12px",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <LocationOn sx={{ color: "#FF4D4F", fontSize: 20 }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {destination.name}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
