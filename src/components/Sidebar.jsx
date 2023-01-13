import React from 'react'
import { AppBar, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from '@mui/material'
import { AccountCircle, Article, Groups, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'


const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs:"none",sm:"block"} , marginRight:3}}>
     <Box position="fixed">
     <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                  <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                  <Article/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                  <Groups/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#marketplace">
              <ListItemIcon>
                  <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                  <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                  <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                  <AccountCircle/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#theme">
              <ListItemIcon>
                  <ModeNight/>
              </ListItemIcon>
              <Switch onChange={(e)=>setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
          </List>
     </Box>
    </Box>
  )
}

export default Sidebar