"use client"

import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  IconButton,
  Divider,
  Link,
  InputAdornment,
  styled,
} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import YouTubeIcon from "@mui/icons-material/YouTube"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import DriveEtaIcon from "@mui/icons-material/DriveEta" 
import map from '../assets/images/map.avif';
import woo from '../assets/images/woo.png';
import paypal from '../assets/images/paypal.png';
import stripe from '../assets/images/stripe.png';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#1E1155", 
  color: "white",
  padding: theme.spacing(1, 20),
  borderRadius:'30px'
  

}))

const NewsletterInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    color: "white",
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(255, 255, 255, 0.7)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
  },
})

const SubmitButton = styled(IconButton)({
  backgroundColor: "#FF6347", // Orange-red color
  color: "white",
  borderRadius: "8px",
  padding: "8px",
  "&:hover": {
    backgroundColor: "#E55A40",
  },
})

const SocialIcon = styled(IconButton)({
  color: "white",
  margin: "0 8px",
})

const FooterLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  display: "block",
  marginBottom: "8px",
  "&:hover": {
    textDecoration: "underline",
  },
})

const FooterHeading = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "16px",
})

const PaymentIcon = styled("img")({
  height: "24px",
  marginLeft: "12px",
})

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted email:", email)
    setEmail("")
  }

  return (
    <Box
    sx={{
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
            <FooterContainer>
      <Container maxWidth="lg" >
        {/* Top section */}
        <Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="h2" fontWeight="bold">
              Leading the way
            </Typography>
            <Typography variant="h5" component="h2" fontWeight="bold">
              in adventure
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "center" } }}>
            <SocialIcon aria-label="dribbble">
              <DriveEtaIcon />
            </SocialIcon>
            <SocialIcon aria-label="youtube">
              <YouTubeIcon />
            </SocialIcon>
            <SocialIcon aria-label="instagram">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon aria-label="twitter">
              <TwitterIcon />
            </SocialIcon>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              mx: 3, // Horizontal margin for spacing
              height: "100px", // Set height for the vertical divider
            }}
          />

          <Grid item xs={12} md={4} sx={{   paddingLeft:'200px',  }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mb: 1 }}>
                Join our Newsletter
              </Typography>
              <Box sx={{ display: "flex" }}>
                <NewsletterInput
                  placeholder="Your e-mail"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SubmitButton type="submit" aria-label="submit">
                          <ArrowForwardIcon />
                        </SubmitButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)", my: 3 }} />

        {/* Middle section */}
        <Grid container spacing={15} sx={{ mb: 3 }}>
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h5" component="h2" fontWeight="bold" sx={{ display: "flex", alignItems: "center" }}>
                <Box component="span" sx={{ color: "#FF6347", mr: 1 }}>
                  ✦
                </Box>{" "}
                Kanra
              </Typography>
            </Box>
            <Box
              component="img"
              src={map}
              alt="Map"
              sx={{
                width: "100%",
                maxWidth: "100px",
                borderRadius: "12px",
                backgroundColor: "#F5F5DC", // Light background for the map
              }}
            />
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <FooterHeading variant="h6">Contact</FooterHeading>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: "1rem" }} />
              <FooterLink href="mailto:getemail@kanra.com">getemail@kanra.com</FooterLink>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PhoneIcon sx={{ mr: 1, fontSize: "1rem" }} />
              <FooterLink href="tel:(270)555-0117">(270) 555-0117</FooterLink>
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <FooterHeading variant="h6">Company</FooterHeading>
            <FooterLink href="#">Career</FooterLink>
            <FooterLink href="#">Developers</FooterLink>
            <FooterLink href="#">Our Story</FooterLink>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <FooterHeading variant="h6">Kanra</FooterHeading>
            <FooterLink href="#">Why Kanra</FooterLink>
            <FooterLink href="#">Customer</FooterLink>
            <FooterLink href="#">Press Info</FooterLink>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <FooterHeading variant="h6">Resources</FooterHeading>
            <FooterLink href="#">Career</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Features</FooterLink>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)", my: 3 }} />

        {/* Bottom section */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2">© 2023 Rylic Studio | All Rights Reserved</Typography>
          </Grid>

          <Grid item>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PaymentIcon src={stripe}alt="Stripe" sx={{ width:'auto' ,height:'50px'}}/>
              <PaymentIcon src={paypal}alt="PayPal" sx={{ width:'auto' ,height:'50px'}}/>
              <PaymentIcon src={woo} alt="WooCommerce" sx={{ width:'auto' ,height:'50px'}} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>

    </Box>
  )
}
