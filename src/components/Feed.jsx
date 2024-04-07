import { subjects } from "../utils/constants";
import { Box, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%",
        boxShadow: "none",
        borderRadius: 2,
        backgroundColor: "rgb(28, 74, 227)",
        py: 2,
      }}
    >
      {subjects.map((subject, idx) => (
        <Box
          key={idx}
          sx={{
            width: { xs: "100%", sm: "358px", md: "300px" },
            m: 1,
            "&:hover": {
              transform: "scale(1.1)",
              transition: "transform 0.5s",
            },
          }}
        >
          <Link to={`/${subject.name}`}>
            <CardMedia
              component="img"
              height="200px"
              image={subject.image}
              alt={subject.name}
            />
            <CardContent
              sx={{
                backgroundColor: "#1e1e1e",
                height: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0 0 10px 10px",
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold" color={"#FFF"}>
                {subject.name}
              </Typography>
            </CardContent>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Feed;
