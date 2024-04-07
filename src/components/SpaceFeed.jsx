import { Stack } from "@mui/material";

const SpaceFeed = () => {
  return (
    <Stack
      sx={{
        backgroundImage: `url("https://img.freepik.com/free-vector/outer-space-background-with-planets-stars_107791-17549.jpg")`,
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

export default SpaceFeed;
