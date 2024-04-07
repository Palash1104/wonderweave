import { AnimalFeed, Feed, Navbar, ScienceFeed, SpaceFeed, WorldFeed, HealthFeed, TechnologyFeed } from "./components";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Stack px={5} mt={2}>
        <Box>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/Animal Kingdom" element={<AnimalFeed />} />
            <Route path="/Science" element={<ScienceFeed />} />
            <Route path="/Space & Universe" element={<SpaceFeed />} />
            <Route path="/Our World" element={<WorldFeed />} />
            <Route path="/Health & Hygiene" element={<HealthFeed />} />
            <Route path="/Technology & Innovation" element={<TechnologyFeed />} />
          </Routes>
        </Box>
      </Stack>
    </BrowserRouter>
  );
}

export default App;
