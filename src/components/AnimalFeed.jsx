import {
  Stack,
  Box,
  Typography,
  Menu,
  MenuItem,
  TextareaAutosize,
  Button,
  Checkbox,
} from "@mui/material";
import { useState, useEffect } from "react";
import fetchFromApi from "../utils/fetchFromApi";
import { textToSpeech } from "../utils/textToSpeech";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const AnimalFeed = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAnimals, setSelectedAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeech = () => {
    if (isPlaying) {
      window.speechSynthesis.pause();
    } else {
      window.speechSynthesis.cancel(); // Cancel the current speech
      textToSpeech(responseText);
    }
    setIsPlaying(!isPlaying);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (animal) => {
    if (selectedAnimals.includes(animal)) {
      setSelectedAnimals(selectedAnimals.filter((a) => a !== animal));
    } else if (selectedAnimals.length < 3) {
      setSelectedAnimals([...selectedAnimals, animal]);
    }
  };

  const [responseText, setResponseText] = useState("");

  return (
    <Stack
      sx={{
        backgroundImage: `url("https://www.shutterstock.com/image-vector/sun-rays-falling-deep-into-600nw-1721181988.jpg")`,
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
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          p: 2,
        }}
      >
        <Button onClick={handleClick} variant="contained" color="secondary">
          Select Animal
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {animals.map((animal) => (
            <MenuItem key={animal} onClick={() => handleMenuItemClick(animal)}>
              <Checkbox checked={selectedAnimals.includes(animal)} />
              {animal}
            </MenuItem>
          ))}
        </Menu>
        <Button
          onClick={async () => {
            setIsLoading(true);
            window.speechSynthesis.cancel();
            const response = await fetchFromApi(selectedAnimals);
            setResponseText(response);
            setIsLoading(false);
          }}
          variant="contained"
          sx={{ mt: "300px" }}
        >
          Generate Story
        </Button>
      </Box>
      <Box
        sx={{
          m: 2,
          width: "70%",
          backgroundColor: "rgba(87, 87, 87, 0.76)",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <Typography
          variant="h4"
          fontFamily={"monospace"}
          letterSpacing={0}
          fontWeight={"bold"}
        >
          Selected Animals: {selectedAnimals.join(", ")}
        </Typography>
        <Box sx={{ m: 2 }}>
          <TextareaAutosize
            minRows={3}
            style={{
              width: "100%",
              height: "20vh",
              borderRadius: "20px",
              padding: "10px",
            }}
            value={isLoading ? "Loading..." : responseText}
          />
          <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
            <Button
              onClick={() => textToSpeech(responseText)}
              variant="contained"
            >
              Text - to - Speech
            </Button>
            <Button
              onClick={() => {
                window.speechSynthesis.pause();
              }}
              variant="contained"
            >
              Pause
            </Button>
            <Button
              onClick={() => {
                window.speechSynthesis.resume();
              }}
              variant="contained"
            >
              Play
            </Button>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default AnimalFeed;
