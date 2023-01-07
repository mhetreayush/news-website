import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import { AiOutlineMenu } from "react-icons/ai";
const drawerWidth = 240;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { newsObj } = props;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        News
      </Typography>
      <Divider />
      <div className="flex flex-col gap-y-4">
        {React.Children.toArray(
          newsObj.map((item) => (
            <Link
              onClick={() => props.setCurrentPage(item.title)}
              className={`odd:bg-gray-100 text-left p-2 ${
                props.currentPage === item.title && "!bg-gray-600 text-white"
              } `}
              to={"/news-website/" + slugify(item.title)}
            >
              {item.title}
            </Link>
          ))
        )}
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div className="sticky top-0 bg-white drop-shadow-md">
        <Toolbar className="flex justify-between items-center py-4">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <AiOutlineMenu size={40} className="p-2 rounded-md bg-gray-200" />
          </IconButton>
          {props.currentPage !== "/" && (
            <Link
              onClick={() => props.setCurrentPage("/")}
              to="/news-website"
              className="px-4 py-2 rounded-md bg-gray-200 font-semibold"
            >
              Home
            </Link>
          )}
        </Toolbar>

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </div>

      <div>{props.children}</div>
    </>
  );
};

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
