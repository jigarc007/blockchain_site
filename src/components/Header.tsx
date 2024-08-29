"use client";
import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const menuLinks = [
  { id: 1, text: "Home" },
  { id: 1, text: "About" },
  { id: 1, text: "Department" },
  { id: 1, text: "Services" },
  { id: 1, text: "Contact Us" },
];
export default function Header() {
  const [activeMenu, setActiveMenu] = useState("Contact Us");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const theme = useTheme();
  const [width, setWidth] = useState(0)
  const handleResize = () => setWidth(window.innerWidth)
  useEffect(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleActive = (menuText: string) => {
    setActiveMenu(menuText);
  };
  const handleDrawerOpen = () => {
    setIsOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setIsOpenDrawer(false);
  };
  const renderDrawerMenu = () => {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={isOpenDrawer}
          style={{ background: "#000" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  mr: 2,
                },
                isOpenDrawer && { display: "none" },
              ]}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={isOpenDrawer}
        >
          <DrawerHeader style={{display:'flex', alignItems:'center'}}>
          <h1 style={{paddingTop: '12px'}}>Build</h1>

            <IconButton onClick={handleDrawerClose}>

              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {menuLinks?.map((item, index) => (
              <ListItem key={`${index}_${item?.text}`} disablePadding onClick={()=>{ setIsOpenDrawer(false)}}>
                <ListItemButton>
                  <ListItemText primary={item?.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={isOpenDrawer}>
          <DrawerHeader />
        </Main>
      </Box>
    );
  };
  return (
    <div className={styles.headerWrapper}>
      {width > 768 ? (
        <>
          <h1>Build</h1>
          <ul className={styles.header}>
            {menuLinks?.map((item, index) => (
              <li
                key={`${item.id}_${item.text}`}
                onClick={() => {
                  handleActive(item.text);
                }}
                className={`${styles.menu} ${
                  item?.text === activeMenu ? styles.activeMenu : ""
                }`}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </>
      ) : (
        renderDrawerMenu()
      )}
    </div>
  );
}
