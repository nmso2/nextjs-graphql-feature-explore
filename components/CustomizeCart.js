import { Box, Button, Typography } from "@mui/material";

const CustomizeCart = ({ property, setProperty }) => {
  return (
    <Box sx={property}>
      <Typography>Data</Typography>
      <Button
        onClick={() =>
          setProperty({
            position: "fixed",
            height: 200,
            width: 300,
            color: "white",
            border: "1px solid red",
            background: "blue",
            right: 10,
            bottom: 200,
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
