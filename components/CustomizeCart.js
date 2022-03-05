import { Box, Button, Typography } from "@mui/material";

const CustomizeCart = ({ property, setProperty }) => {
  return (
    <Box sx={property}>
      <Typography>Data</Typography>
      <Button
        sx={{ alignItems: "right" }}
        onClick={() =>
          setProperty({
            position: "fixed",
            height: 0,
            width: 0,
            right: 0,
            bottom: 50,
            left: "100vw",
            transition: "1s",
          })
        }
      >
        Close
      </Button>
    </Box>
  );
};

export default CustomizeCart;
