import { Stack } from "@mui/material";

const HealthFeed = () => {
  return (
    <Stack
      sx={{
        backgroundImage: `url("https://img.freepik.com/free-vector/national-doctor-s-day-hand-drawn-background_23-2149438164.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712016000&semt=ais")`,
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

export default HealthFeed;
