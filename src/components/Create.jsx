import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function Create() {

  return (
    <>
      <div>
        <Container maxWidth="sm">
          <Typography
            sx={{ textDecoration: "underline", marginBottom: 2 }}
            color="secondary"
            variant="h5"
            align="center"
            gutterBottom
          >
            Create a New Note
          </Typography>
          <Button
            sx={{
              fontSize: 20,
              backgroundColor: "violet",
              "&:hover": { backgroundColor: "blue" },
            }}
            variant="contained"
            type="submit"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={() => {
              alert("clicked");
            }}
          >
            Submit
          </Button>
          <br />
          {/* <AcUnitIcon />
  <AcUnitIcon color="secondary" fontSize="large" /> */}
        </Container>
      </div>
    </>
  );
}
