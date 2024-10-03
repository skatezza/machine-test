import { Box, Typography } from '@mui/material';
import { copyConfig } from '../app/copy/copy-config';

export default function SecondSection() {
  const { secondSection } = copyConfig;

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
          {secondSection.title}{" "}
          <span
            className="font-bold"
            style={{
              backgroundImage: "linear-gradient(to right, #556EE6, #ADD8E6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            {secondSection.highlight}
          </span>
        </Typography>
        <Typography variant="subtitle1" mb={4} className="text-gray-500 font-semibold">
          {secondSection.subtitle}
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
        {secondSection.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-[23%] h-auto rounded-lg object-cover"
          />
        ))}
      </Box>
    </Box>
  );
}
