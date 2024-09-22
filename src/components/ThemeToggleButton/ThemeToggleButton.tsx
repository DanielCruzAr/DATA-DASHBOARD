import React from "react";
import {
    IconButton,
    Typography,
    useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Brightness4 from "@mui/icons-material/Brightness4";
import Brightness7 from "@mui/icons-material/Brightness7";

export type ThemeToggleButtonProps = {
    ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
};

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
    const mobileCheck = useMediaQuery("(min-width:500px)");
    const {
        ColorModeContext = React.createContext({ toggleColorMode: () => {} }),
    } = props;
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <>
            {mobileCheck && <Typography>{theme.palette.mode}</Typography>}
            <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
            >
                {theme.palette.mode === "dark" ? (
                    <Brightness7 />
                ) : (
                    <Brightness4 />
                )}
            </IconButton>
        </>
    );
};

export default ThemeToggleButton;
