import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TriviaCard from "./TriviaCard";
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: 100,
}));


export default function HomePage() {
  const [dateValue, setDateValue] = React.useState(dayjs('2022-09-30T21:11:54'));

  const handleChangeDateValue = (newValue) => {
    setDateValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <TriviaCard />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            label="Month"
            inputFormat="MMMM/YYYY"
            value={dateValue}
            onChange={handleChangeDateValue}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Item elevation={0} sx={{ backgroundImage: "url(ocean-calm-3.jpg)"}}>
          <Grid container spacing={2} columns={16} minHeight={100}>
            <Grid
              xs={8}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
            <Typography variant="body1">Your Average water usage</Typography>
            </Grid>
            <Grid
              xs={8}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h4">
                <b>613.5</b>
              </Typography>
              <Typography variant="caption">Litres</Typography>
            </Grid>
          </Grid>
        </Item>
        <Item elevation={0} variant="outlined">
          <Grid container spacing={2} columns={16} minHeight={100}>
            <Grid
              xs={8}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="body1" fontSize="medium">
                Your Total Water savings
              </Typography>
            </Grid>
            <Grid
              xs={8}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h4">
                <b>26%</b>
              </Typography>
            </Grid>
          </Grid>
        </Item>
        <Item elevation={0} sx={{ backgroundImage: "url(ocean-calm.jpg)" }}>
          <Grid container spacing={2} columns={16} minHeight={100}>
            <Grid
              xs={8}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="caption">
                Compared to homes around you.
              </Typography>
              <Typography variant="body1">Your savings are in the</Typography>
            </Grid>
            <Grid
              xs={8}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h4">
                Top <b>18%</b>
              </Typography>
            </Grid>
          </Grid>
        </Item>
      </Stack>
    </Box>
  );
}
