import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TriviaCard from "./TriviaCard";
import Avatar from "@mui/material/Avatar";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary, 
}));

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function ProfilePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5" gutterBottom>
        My Account
      </Typography>
      <Stack spacing={2}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Avatar sx={{ width: 64, height: 64 }}>
            <PersonPinIcon fontSize="large" />
          </Avatar>
          <Typography>John Doe</Typography>
        </Stack>
        <Divider variant="middle" />
        <Item elevation={0}>
          <Grid container spacing={4} columns={16} minHeight={50}>
            <Grid xs={6}>
              <Typography variant="body1">Address</Typography>
            </Grid>
            <Grid xs={10}>
              <Typography variant="body1">25 Lorem St. Ipsum, CA</Typography>
            </Grid>
          </Grid>
        </Item>
        <Divider variant="middle" />
        <Item elevation={0}>
          <Grid container spacing={4} columns={16} minHeight={50}>
            <Grid xs={6}>
              <Typography variant="body1">Phone no.</Typography>
            </Grid>
            <Grid xs={10}>
              <Typography variant="body1">+1 (XXX)-XXX-XXXX</Typography>
            </Grid>
          </Grid>
        </Item>
        <Item elevation={0}>
          <Grid container spacing={4} columns={16} minHeight={50}>
            <Grid xs={6}>
              <Typography variant="body1">Devices installed</Typography>
            </Grid>
            <Grid xs={10}>
              <Typography variant="body1">9</Typography>
            </Grid>
          </Grid>
        </Item>
      </Stack>
    </Box>
  );
}
