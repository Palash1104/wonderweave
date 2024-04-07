import React, { useState } from "react";
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { Grid } from "@mui/material";

const ScienceFeed = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      number: 1,
      text: "Science uses observation! We can use our senses to learn about the world. Which of these do we use to smell flowers?",
      options: ["Eyes", "Nose", "Ears", "Hands"],
    },
    {
      number: 2,
      text: "Water can change states!  What happens to ice when it gets warm outside?",
      options: [
        "It turns red.",
        "It melts into water.",
        "It grows bigger.",
        "It disappears.",
      ],
    },
    {
      number: 3,
      text: "Plants need sunlight to grow!  What helps a flower grow tall and strong?",
      options: ["Loud music", "Sunshine", "Candy", "Toys"],
    },
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <Stack
      display={"flex"}
      alignItems={"center"}
      sx={{
        backgroundImage: `url("https://i.pinimg.com/736x/6a/92/c9/6a92c9ed666d4df954c16e7d47eadc78.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        width: "100%",
      }}
    >
      <Box width={"800px"}>
        <Typography variant="h6" align="left" fontFamily={"Roboto"} mt={2}>
          Question {questions[currentQuestion].number}
        </Typography>
        <Typography variant="h4" fontFamily={"monospace"} letterSpacing={-0.9}>
          {questions[currentQuestion].text}
        </Typography>
        <RadioGroup
          sx={{
            backgroundColor: "rgba(235, 206, 110, 0.48)",
            pl: 2,
            mt: 2,
            borderRadius: "20px",
            width: "600px",
          }}
        >
          <Grid container spacing={2}>
            {questions[currentQuestion].options.map((option, index) => (
              <Grid item xs={6} key={index}>
                <FormControlLabel
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </Box>
      <Box
        width={"500px"}
        justifyContent={"space-between"}
        display={"flex"}
        alignItems={"center"}
        mt={5}
      >
        <Button variant="contained" onClick={handlePrevious}>
          Previous
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Stack>
  );
};

export default ScienceFeed;
