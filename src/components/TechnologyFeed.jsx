import { Stack } from "@mui/material";

const TechnologyFeed = () => {
  return (
    <Stack
      sx={{
        backgroundImage: `url("https://media.istockphoto.com/id/1383447162/vector/90s-retro-vaporwave-aesthetics-digital-screen-user-interface-cute-old-computer-ui-elements.jpg?s=612x612&w=0&k=20&c=NRDpByU-7UXfW-RgxyPDjukoPiPb-P7-5-_MnBc7pyo=")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        zIndex: -1,
      }}
    ></Stack>
  );
};

export default TechnologyFeed;
