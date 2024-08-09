import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Paper,
  SvgIconProps,
  TextField,
} from "@mui/material";
import { useState } from "react";
import logo from "../assets/logo.svg";

const categories = [
  "🍽️ All recipes",
  "🥪 Breakfasts",
  "🍲 Soups",
  "🍔 Lunch",
  "🥐 Baking",
  "🧁 Desserts",
  "🍹 Drinks",
  "🍿 Snacks",
  "🥗 Salads",
];

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const expandIconProps: SvgIconProps = {
    fontSize: "small",
    viewBox: "0 0 16 20",
  };

  return (
    <AppBar className="bg-transparent shadow-none">
      <Paper
        className="flex flex-row items-center py-3 shadow-none"
        elevation={4}
        sx={{ px: 9 }}
      >
        <Box className="flex w-9/12 flex-row gap-3">
          <img src={logo} alt="logo" />
          <Box className="w-full max-w-[570px]">
            <TextField
              variant="outlined"
              label="Search"
              fullWidth
              size="small"
              InputProps={{ endAdornment: <SearchIcon /> }}
            />
          </Box>
        </Box>
        <Box className="flex w-3/12 flex-row justify-end gap-3 px-1">
          <Button
            id="basic-button"
            className="normal-case"
            size="medium"
            variant="text"
            sx={{ color: "text.secondary" }}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Recipes{" "}
            {open ? (
              <ExpandLessIcon {...expandIconProps} />
            ) : (
              <ExpandMoreIcon {...expandIconProps} />
            )}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            transformOrigin={{ horizontal: 130, vertical: -15 }}
          >
            {categories.map((category, i) => (
              <MenuItem
                key={category}
                value={category}
                divider={i < categories.length - 1}
                sx={{ width: "220px" }}
              >
                {category}
              </MenuItem>
            ))}
          </Menu>
          <Button variant="text" className="normal-case">
            Log in
          </Button>
          <Button variant="contained" className="normal-case">
            Sign up
          </Button>
        </Box>
      </Paper>
    </AppBar>
  );
};
