import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  AccountCircle,
  Category,
  Coffee,
  Dashboard,
  Liquor,
  SportsEsports,
} from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

export default function ResponsiveDrawer({ children }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pages = [
    {
      label: "Dashboard",
      icon: <Dashboard />,
      to: "/",
    },
    {
      label: "Categories",
      icon: <Category />,
      to: "/categories",
    },
    {
      label: "User Management",
      icon: <AccountCircle />,
      to: "/user-management",
    },
    {
      label: "Game",
      icon: <SportsEsports />,
      to: "/game",
    },
    {
      label: "Coffee",
      icon: <Coffee />,
      to: "/coffee",
    },
    {
      label: "Alcohol",
      icon: <Liquor />,
      to: "/alcohol",
    },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <Box
          component="img"
          sx={{
            height: 60,
          }}
          alt="Your logo."
          src={
            "https://i.pinimg.com/originals/9f/92/9f/9f929f6023c10f6311ecc7273f710557.png"
          }
        />
        <Typography variant="h5">Diyoor</Typography>
      </Toolbar>
      <Divider />
      <List>
        {pages.map((page) => {
          return (
            <ListItem key={page.label} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(page.to);
                }}
              >
                <ListItemIcon>{page.icon}</ListItemIcon>
                <ListItemText>{page.label}</ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        <ListItem>
          <Button variant="contained" sx={{ width: "100%" }}>
            sign out
          </Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: 200 }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 300,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 250,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">{children}</Box>
    </Box>
  );
}
