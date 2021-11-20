import React from "react";
import { Box, styled } from "@mui/system";
import useSettings from "../hooks/useSettings";
import { Typography } from "@material-ui/core";

const Session = (props) => {
  const { settings } = useSettings();
  return (
      <Box display="grid" gridTemplateRows="repeat(12,1fr)" gap={2} sx={{minHeight:"100%"}}>
          <Typography
            sx={{
              color: "white",
            }}
          >
            Session text
          </Typography>
        {/* <Box gridRow="span 3">
          <Typography
            sx={{
              color: "white",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            pellentesque blandit dapibus. Duis metus enim, pulvinar quis porta
            eu, porttitor vitae diam. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Curabitur
            blandit semper enim, ut pharetra turpis eleifend eu. Proin quis
            dictum sapien, sit amet venenatis nunc. Cras ut dapibus quam, quis
            ultricies libero. In vel odio et lectus mollis vulputate vel at
            velit. Nullam quis mi vel nisl dignissim faucibus quis at arcu. Nam
            leo diam, dapibus non ornare nec, porta ut enim. Praesent laoreet
            molestie accumsan. Duis tempus, leo eget consequat lacinia, felis
            neque viverra dolor, rutrum tristique nunc metus eget lacus.
            Vestibulum id aliquam elit. Vestibulum eleifend neque dui, ac
            posuere mi elementum sit amet. Phasellus condimentum lectus a ex
            porttitor, eget feugiat enim tristique. Donec pulvinar pellentesque
            lacus, in eleifend turpis tempus ut. In sit amet mollis enim, non
            rhoncus orci.
          </Typography>
        </Box> */}
      </Box>
  );
};
export default Session;
