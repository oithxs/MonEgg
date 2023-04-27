import MenuIcon from "@mui/icons-material/Menu";
import { Toolbar, IconButton, Drawer } from "@mui/material";
import { useState } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PlaceIcon from '@mui/icons-material/Place';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';

export const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    size="large"
                    onClick={() => setOpen(true)}
                >
                    <MenuIcon fontSize="medium" />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={open}
                    onClose={() => setOpen(false)}
                    PaperProps={{ style: { width: 250 } }}
                >
                    <Box sx={{ width: '500', bgcolor: 'background.paper' }}>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="ホーム" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <LoginIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="サインイン" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PlaceIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="地点を設定" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                        <Divider />
                    </Box>
                </Drawer>
            </Toolbar>
        </>
    );
};
