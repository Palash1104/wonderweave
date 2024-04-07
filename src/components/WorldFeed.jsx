import { Stack } from "@mui/material";

const WorldFeed = () => {
  return (
    <Stack
      sx={{
        backgroundImage: `url("https://img.pikbest.com/origin/09/11/25/78HpIkbEsTJ7C.png!w700wp")`,
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

export default WorldFeed;
