import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box container backgroundColor="#00296B" marginTop="50px">
      <Box
        margin="0px auto"
        pt="56px"
        sx={{
          maxWidth: { xs: "84%", sm: "90%", md: "84%" },
          //   height: { md: "480px" },
        }}
      >
        <Box
          sx={{
            display: { md: "flex" },
            gap: { md: "32px" },
            // height: { md: "279px" },
          }}
        >
          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "14px" },
              lineHeight: { xs: "28px", sm: "20px" },
              fontWeight: { xs: "600", sm: "400" },
              width: { xs: "600", sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "19px" },
                lineHeight: { xs: "28px", sm: "23px" },
                fontWeight: { xs: "600", sm: "700" },
              }}
              letterSpacing="-0.02em"
            >
              Company
            </Typography>
            <Link href="#" color="inherit">
              About Us
            </Link>
            <Link href="#" color="inherit">
              Careers
            </Link>
            <Link href="#" color="inherit">
              Patnerships
            </Link>
            <Link href="#" color="inherit">
              Meet the team
            </Link>
            <Link href="#" color="inherit">
              Press
            </Link>
            <Link href="#" color="inherit">
              Board of directors
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "14px" },
              lineHeight: { xs: "28px", sm: "20px" },
              fontWeight: { xs: "600", sm: "400" },
              width: { xs: "600", sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "19px" },
                lineHeight: { xs: "28px", sm: "23px" },
                fontWeight: { xs: "600", sm: "700" },
              }}
              letterSpacing="-0.02em"
            >
              Links
            </Typography>
            <Link href="#" color="inherit">
              Convert
            </Link>
            <Link href="#" color="inherit">
              News
            </Link>
            <Link href="#" color="inherit">
              Contact Us
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "14px" },
              lineHeight: { xs: "28px", sm: "20px" },
              fontWeight: { xs: "600", sm: "400" },
              width: { xs: "600", sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "19px" },
                lineHeight: { xs: "28px", sm: "23px" },
                fontWeight: { xs: "600", sm: "700" },
              }}
              letterSpacing="-0.02em"
            >
              Resources
            </Typography>
            <Link href="#" color="inherit">
              Currency Encyclopedia
            </Link>
            <Link href="#" color="inherit">
              Historical currency exchange
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "14px" },
              lineHeight: { xs: "28px", sm: "20px" },
              fontWeight: { xs: "600", sm: "400" },
              width: { xs: "600", sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "19px" },
                lineHeight: { xs: "28px", sm: "23px" },
                fontWeight: { xs: "600", sm: "700" },
              }}
              letterSpacing="-0.02em"
            >
              Product
            </Typography>
            <Link href="#" color="inherit">
              API
            </Link>
            <Link href="#" color="inherit">
              Integration matrix
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "14px" },
              lineHeight: { xs: "28px", sm: "20px" },
              fontWeight: { xs: "600", sm: "400" },
              width: { xs: "600", sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "19px" },
                lineHeight: { xs: "28px", sm: "23px" },
                fontWeight: { xs: "600", sm: "700" },
              }}
              letterSpacing="-0.02em"
            >
              Support
            </Typography>
            <Link href="#" color="inherit">
              Help Center
            </Link>
            <Link href="#" color="inherit">
              FAQ
            </Link>
            <Link href="#" color="inherit">
              File a complaint
            </Link>
            <Link href="#" color="inherit">
              Fraud report
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "14px" },
              lineHeight: { xs: "28px", sm: "20px" },
              fontWeight: { xs: "600", sm: "400" },
              width: { xs: "600", sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "19px" },
                lineHeight: { xs: "28px", sm: "23px" },
                fontWeight: { xs: "600", sm: "700" },
              }}
              letterSpacing="-0.02em"
            >
              Legal
            </Typography>
            <Link href="#" color="inherit">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit">
              Terms and Conditions
            </Link>
            <Link href="#" color="inherit">
              Cookie Policy
            </Link>
          </Stack>
        </Box>

        <Box margin="20px 0px">
          <hr style={{"height":"1px", "backgroundColor":"#CBD5E1"}}/>
        </Box>

        <Box
          display="flex"
          padding="20px 0px"
          justifyContent="space-between"
          alignItems="center"
          color="#F8FAFC"
        >
          <Typography
            sx={{
              fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "19px" },
              lineHeight: { xs: "28px", sm: "23px" },
              fontWeight: { xs: "600", sm: "800" },
            }}
            letterSpacing="-0.02em"
          >
            Street Rate
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "12px" },
              lineHeight: { xs: "28px", sm: "18px" },
              fontWeight: { xs: "600", sm: "400" },
            }}
            letterSpacing="-0.02em"
          >
            © 2022 Bevel All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
