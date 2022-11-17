import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const NavComponent = () => {
  return (
    <Grid
      sx={{
        maxWidth: { xs: "84%", sm: "90%", md: "84%" },
        minHeight: { xs: "56px", sm: "100px" },
        gap:{ sm:"140px", md:"223px", lg:"300px", xl:"419px"},
        justifyContent: {xs:"space-between", sm:"center"}
      }}
      minHeight="100px"
      display="flex"
      margin="0px auto"
      flexDirection="row"
      
    >
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Typography
          sx={{
            fontSize: { xs: "23px", sm: "20px", md: "24px", lg:"34px" },
            lineHeight: { xs: "28px", sm: "40px" },
            fontWeight: { xs: "600", sm: "700" },
          }}
          color="#00296B"
          letterSpacing="-0.04em"
        >
          Street Rate
        </Typography>
      </Grid>

      <Grid
        alignItems="center"
        sx={{
          fontSize: { sm: "12px", md: "16px" },
          gap: { sm: "13px", md: "20px", lg: "24px" },
          display: { xs: "none", sm: "flex" },
          width: { md: "606pxx" },
        }}
        fontWeight="400"
        lineHeight="24px"
        color="#94A3B8"
      >
        <Box gap="6px" display="flex">
          <img src="assets/svg/flag.svg" alt="flagImage" />
          <img src="assets/svg/DownArrow.svg" alt="arrow" />
        </Box>

        <Typography>Home</Typography>

        <Typography>Convert</Typography>

        <Typography>Currency Profile</Typography>

        <Typography>News</Typography>

        <Typography>Contact</Typography>
      </Grid>

      <Box
        p="12px"
        sx={{ display: { xs: "flex", sm: "none" } }}
        cursor="pointer"
      >
        <img src="assets/svg/MenuIcon.svg" alt="MenuIcon" />
      </Box>
      {/* <DrawerComponent isOpen={drawerState} setIsOpen={setDrawerState}/> */}
    </Grid>
  );
};

export default NavComponent;
