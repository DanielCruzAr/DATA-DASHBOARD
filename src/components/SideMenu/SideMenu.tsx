import * as React from "react";
import { Theme, CSSObject, useTheme } from "@mui/material/styles";
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import Person2Icon from "@mui/icons-material/Person2";
import Settings from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import NextLink from "next/link";
import scss from "./SideMenu.module.scss";
import { signOut } from "next-auth/react";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const menuRouteList = ["", "analytics", "profile", "settings", ""];
const menuListTranslations = [
    "Home",
    "Data",
    "Profile",
    "Settings",
    "Sign Out",
];
const menuListIcons = [
    <HomeIcon />,
    <EqualizerIcon />,
    <Person2Icon />,
    <Settings />,
    <ExitToAppIcon />,
];

const SideMenu = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const mobileCheck = useMediaQuery("(min-width: 600px)");

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleListItemButtonClick = (text: string) => {
        text === "Sign Out" ? signOut() : null;
        setOpen(false);
    };

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            open={open}
            sx={{
                width: drawerWidth,
                [`& .MuiDrawer-paper`]: {
                    left: 0,
                    top: mobileCheck ? 64 : 57,
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    boxSizing: "border-box",
                    ...(open && {
                        ...openedMixin(theme),
                        "& .MuiDrawer-paper": openedMixin(theme),
                    }),
                    ...(!open && {
                        ...closedMixin(theme),
                        "& .MuiDrawer-paper": closedMixin(theme),
                    }),
                },
            }}
        >
            <div className={scss.drawerHeader}>
                <IconButton onClick={handleDrawerToggle}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </div>

            <List>
                {menuListTranslations.map((text, index) => (
                    <ListItem
                        key={text}
                        disablePadding
                        sx={{ display: "block" }}
                    >
                        <NextLink
                            className={scss.link}
                            href={`/dashboard/${menuRouteList[index]}`}
                        >
                            <ListItemButton
                                onClick={() => handleListItemButtonClick(text)}
                                title={text}
                                aria-label={text}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {menuListIcons[index]}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        opacity: open ? 1 : 0,
                                    }}
                                />
                            </ListItemButton>
                        </NextLink>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default SideMenu;
