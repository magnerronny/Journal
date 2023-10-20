import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const Sidebar = ({ drawerWidth }) => {
  return (
    <>
      <Box
        component={'nav'}
        sx={{
          width: { sm: drawerWidth },
          flexShrink: {sm:0}
        }}
      >
        <Drawer
          variant="permanent"
          open
          sx={{
            display: {sx: 'block'},
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          <Toolbar>
            <Typography variant="h6"
              component={'div'}
              noWrap
            >
              Rommys
            </Typography>
          </Toolbar>
          <Divider/>

          <List>
            {
              [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril'
              ].map( item => (
                <ListItem key = {item} disablePadding >
                  <ListItemButton>
                    <ListItemIcon>
                      <TurnedInNot/>
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))
            }
          </List>
        </Drawer>
      </Box>
    </>
  )
}
