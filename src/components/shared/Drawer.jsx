import { Drawer,  List,  ListItem, Link, ListItemText,  } from "@mui/material";
import React from "react";

const DrawerComponent = ({ isOpen, setIsOpen }) => {

  const styles = {
    sideNav: {
      marginTop: '-60px',
      zIndex: 3,
      marginLeft: '0px',
      position: 'fixed',
    },
    link: {
      color: 'black',
      textDecoration: 'none',
    }
  };

  console.log("shwing")
  return (
    <>
    {isOpen &&   <Drawer
          variant="temporary"
          open={isOpen}
          transitionDuration={1000}
        >
          <Link to='/about' style={styles.link}>
            <List>
              <ListItem button key='About Us'>
                <ListItemText primary='About Us' />
              </ListItem>
            </List>
          </Link>
          <Link to='/contact' style={styles.link}>
          <List>
            <ListItem button key='Contact Us'>
              <ListItemText primary='Contact Us' />
            </ListItem>
            </List>
          </Link>
        </Drawer>}
     
    </>
  );
};

export default DrawerComponent;
