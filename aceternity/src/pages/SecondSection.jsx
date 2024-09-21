import * as React from "react";
import { Box, Typography, CardMedia } from "@mui/material";

const ImageCard = ({ image, height, width, sx }) => {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        ...sx,
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt="Image section"
        sx={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
};

export default function MirrorComponent() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#16171A",
        color: "white",
        padding: "50px",
        height: "auto",
      }}
    >
      <Box mb={8} sx={{ textAlign: "left", marginTop: "50px" }} className="w-3/5">
        <Typography
          className="font-semibold"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: "29px" }}
        >
          Idea to Website in Hours,
          <span
            className="font-bold"
            style={{
              backgroundImage: "linear-gradient(to right, #556EE6, #ADD8E6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            not Days.
          </span>
        </Typography>
        <Typography variant="subtitle1" mb={4} className="text-gray-500 font-semibold">
          Get the best in class components and templates to rapidly <br />
          prototype and build professional-looking websites.
        </Typography>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        mb={8}
        className="w-full gap-3"
        sx={{
          "@media (max-width: 768px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <ImageCard
          image="/seondSection/7.webp"
          height={{ xs: "300px", md: "680px" }}
          width={{ xs: "90%", md: "60%" }}
          sx={{
            borderRadius: "10px",
            marginLeft: { md: "-50%" },
            zIndex: 1,
            marginTop: { xs: "20px", md: "80px" },
          }}
        />

        <Box display="flex" flexDirection="column" sx={{ marginLeft: { xs: "0", md: "10px" }, alignItems: "center" }}>
          <ImageCard
            image="/seondSection/11.webp"
            height={{ xs: "150px", md: "350px" }}
            width={{ xs: "90%", md: "350px" }}
            sx={{ marginBottom: "20px", borderRadius: "10px" }}
          />
          <ImageCard
            image="/seondSection/4.webp"
            height={{ xs: "150px", md: "350px" }}
            width={{ xs: "90%", md: "350px" }}
            sx={{ borderRadius: "10px", marginBottom: "20px" }}
          />
          <ImageCard
            image="/seondSection/3.webp"
            height={{ xs: "150px", md: "250px" }}
            width={{ xs: "90%", md: "350px" }}
            sx={{ borderRadius: "10px" }}
          />
        </Box>

        <Box display="flex" flexDirection="column" sx={{ marginLeft: { xs: "0", md: "12px" }, marginTop: { xs: "20px", md: "-140px" }, alignItems: "center" }}>
          <ImageCard
            image="/seondSection/1.webp"
            height={{ xs: "300px", md: "600px" }}
            width={{ xs: "90%", md: "100%" }}
            sx={{ borderRadius: "10px" }}
          />
          <Box display="flex" sx={{ width: { xs: "100%", md: "100%" } }} className="gap-6" flexDirection={{ xs: "column", md: "row" }} alignItems={{ xs: "center", md: "flex-start" }}>
            <Box display="flex" flexDirection="column" sx={{ width: { xs: "90%", md: "50%" }, marginTop: { xs: "20px", md: "20px" }, alignItems: "center" }}>
              <ImageCard
                image="/seondSection/9.webp"
                height={{ xs: "150px", md: "300px" }}
                width={{ xs: "90%", md: "100%" }}
                sx={{ borderRadius: "10px", marginBottom: "10px" }}
              />
              <ImageCard
                image="/seondSection/10.webp"
                height={{ xs: "150px", md: "300px" }}
                width={{ xs: "90%", md: "100%" }}
                sx={{ borderRadius: "10px 10px 0 0", marginTop: "10px" }}
              />
            </Box>
            <ImageCard
              image="/seondSection/6.webp"
              height={{ xs: "300px", md: "622px" }}
              width={{ xs: "90%", md: "50%" }}
              sx={{ borderRadius: "10px 10px 0 0", marginTop: { xs: "20px", md: "20px" } }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
