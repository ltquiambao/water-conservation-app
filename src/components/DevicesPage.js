import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import DeviceModal from "./DeviceModal";
import Badge from '@mui/material/Badge';
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import ShowerIcon from "@mui/icons-material/Shower";
import AddIcon from "@mui/icons-material/Add";
import { Icon } from "@iconify/react";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function DevicesPage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        My Water Devices
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid xs={2} sm={4} md={4}>
          <Item onClick={handleClickOpen}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Badge badgeContent={<WarningAmberIcon fontSize="small"/>} color="warning">
                <Avatar sx={{ width: 56, height: 56 }}>
                  <LocalDrinkIcon fontSize="large" />
                </Avatar>
              </Badge>
              <Typography>Kitchen Sink</Typography>
            </Stack>
          </Item>
          <DeviceModal
            handleClose={handleClose}
            open={open}
            deviceDetails={deviceDetails}
          />
        </Grid>
        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Avatar sx={{ width: 56, height: 56 }}>
                <Icon icon="fa-solid:sink" width="36" height="36" />
              </Avatar>
              <Typography>Washroom Sink</Typography>
            </Stack>
          </Item>
        </Grid>
        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Avatar sx={{ width: 56, height: 56 }}>
                <Icon icon="fa-solid:sink" width="36" height="36" />
              </Avatar>
              <Typography>Bathroom Sink</Typography>
            </Stack>
          </Item>
        </Grid>
        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Avatar sx={{ width: 56, height: 56 }}>
                <LocalLaundryServiceIcon fontSize="large" />
              </Avatar>
              <Typography>Laundry</Typography>
            </Stack>
          </Item>
        </Grid>
        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Avatar sx={{ width: 56, height: 56 }}>
                <ShowerIcon fontSize="large" />
              </Avatar>
              <Typography>Bathroom Shower</Typography>
            </Stack>
          </Item>
        </Grid>
        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Avatar sx={{ width: 56, height: 56 }}>
                <Icon icon="mdi:toilet" width="36" height="36" />
              </Avatar>
              <Typography>Guest Toilet</Typography>
            </Stack>
          </Item>
        </Grid>
        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Avatar sx={{ width: 56, height: 56 }}>
                <Icon icon="mdi:toilet" width="36" height="36" />
              </Avatar>
              <Typography>Bathroom Toilet</Typography>
            </Stack>
          </Item>
        </Grid>
        <Grid
          xs={2}
          sm={4}
          md={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Fab aria-label="add">
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
}

const deviceDetails = {
  deviceIcon: (
    <Avatar>
      <LocalDrinkIcon />
    </Avatar>
  ),
  deviceName: <Typography>Kitchen Sink</Typography>,
  deviceId: "1e89330f-25e9-4ad7-aee7-e06cbf35646a",
  deviceLocation: "Lorem ipsum",
  isWaterFlowing: "Yes",
  isWaterContam: "No",
  phLevel: "7.5",
};
