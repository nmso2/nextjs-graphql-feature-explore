import {
  Box,
  Button,
  ClickAwayListener,
  Fab,
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Tooltip,
} from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import CustomizeCart from "./CustomizeCart";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const ChatSpeedDial = () => {
  // ============Customize Cart Start==============
  const [property, setProperty] = useState({
    position: "fixed",
    height: 0,
    width: 0,
    color: "#000000",
    border: "1px solid red",
    background: "#ffffff",
    right: 0,
    bottom: 50,
    left: "100vw",
    transition: "1s",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  });
  const showCart = () => {
    setProperty({
      position: "fixed",
      height: { md: 400, xs: 300 },
      width: { md: 300, xs: 200 },
      // border: "1px solid red",
      background: "#ffffff",
      right: 10,
      bottom: { md: 80, xs: 65 },
      left: { md: "71vw", xs: "19vw" },
      transition: "1s",
      borderRadius: 0,
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
      borderTopRightRadius: "20px",
      borderBottomRightRadius: "4px",
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      zIndex: 1,
    });
  };
  // ============Customize Cart End================

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          title="Live Chat "
          // contentEditable={true}
          placement="top-start"
          // onClose={handleTooltipClose}
          open={open}
          // disableFocusListener
          // disableHoverListener
          // disableTouchListener
        >
          <Fab
            component="div"
            // onClick={handleTooltipOpen}
            onClick={showCart}
            size="medium"
            variant="circular"
            sx={{
              borderRadius: "50%",
              top: "85%",
              position: "fixed",
              right: 15,
              zIndex: 3,
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "#45b9e0",
                color: "#ffffff",
                ":hover": {
                  backgroundColor: "#007aa3",
                },
              }}
              size="large"
              disableRipple
            >
              <FontAwesomeIcon icon={faComment} />
            </IconButton>
          </Fab>
        </Tooltip>
      </ClickAwayListener>
      <CustomizeCart property={property} setProperty={setProperty} />
    </Box>
  );
};

export default ChatSpeedDial;
