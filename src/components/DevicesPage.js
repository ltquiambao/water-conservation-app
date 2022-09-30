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
import Badge from "@mui/material/Badge";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import ShowerIcon from "@mui/icons-material/Shower";
import AddIcon from "@mui/icons-material/Add";
import { Icon } from "@iconify/react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CustomGrid = ({ deviceData }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid xs={2} sm={4} md={4}>
      <Item onClick={handleClickOpen}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Badge
            invisible={!(deviceData.isWaterLeaking || deviceData.isWaterContam)}
            badgeContent={<WarningAmberIcon fontSize="small" />}
            color="warning"
          >
            {/* <Avatar sx={{ width: 56, height: 56 }}>
              <LocalDrinkIcon fontSize="large" />
            </Avatar> */}
            {deviceData.deviceIcon}
          </Badge>
          {/* <Typography>Kitchen Sink</Typography> */}
          {deviceData.deviceName}
        </Stack>
      </Item>
      <DeviceModal
        handleClose={handleClose}
        open={open}
        deviceDetails={deviceData}
      />
    </Grid>
  );
};
export default function DevicesPage({ devicesData, devicesLiveData }) {
  const mapDataProps = (prop) => {
    const map = {
      leakDetected: "isWaterLeaking",
      contaminationDetected: "isWaterContam",
    };
    return map[prop] || prop;
  };

  const mapDataIcon = (icon) => {
    const map = {
      SinkA: (
        <Avatar sx={{ width: 56, height: 56, backgroundImage: "url(ocean-calm.jpg)" }} >
          <Icon icon="fa-solid:sink" width="36" height="36" />
        </Avatar>
      ),
      SinkB: (
        <Avatar sx={{ width: 56, height: 56, backgroundImage: "url(ocean-calm.jpg)" }}>
          <LocalDrinkIcon fontSize="large" />
        </Avatar>
      ),
    };
    return map[icon] || icon;
  };

  const mapDataName = (name) => {
    return <Typography>{name}</Typography>;
  };

  const reformatData = (devicesData, devicesLiveData) => {
    const mappedDevicesData = devicesData.map((device) => {
      const mappedProps = {};
      const deviceLiveData = devicesLiveData.find(
        (deviceLive) => deviceLive.deviceId === device.deviceId
      );
      Object.keys({ ...deviceLiveData, ...device }).forEach((prop) => {
        if (prop === "deviceIcon") {
          mappedProps[prop] = mapDataIcon(device[prop]);
        } else if (prop === "deviceName") {
          mappedProps[prop] = mapDataName(device[prop]);
        } else {
          mappedProps[mapDataProps(prop)] =
            device[prop] || deviceLiveData[prop];
        }
      });
      return mappedProps;
    });
    return mappedDevicesData;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" gutterBottom>
        My <b>SmartWaterSaver</b> Devices
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {reformatData(devicesData, devicesLiveData).map((deviceData) => {
          return (
            <CustomGrid key={deviceData.deviceId} deviceData={deviceData} />
          );
        })}
        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Avatar sx={{ width: 56, height: 56, backgroundImage: "url(ocean-calm.jpg)"}}>
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
              <Avatar sx={{ width: 56, height: 56, backgroundImage: "url(ocean-calm.jpg)"}}>
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
              <Avatar sx={{ width: 56, height: 56, backgroundImage: "url(ocean-calm.jpg)"}}>
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
              <Avatar sx={{ width: 56, height: 56, backgroundImage: "url(ocean-calm.jpg)"}}>
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
              <Avatar sx={{ width: 56, height: 56, backgroundImage: "url(ocean-calm.jpg)"}}>
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
              <Avatar sx={{ width: 56, height: 56, backgroundImage: "url(ocean-calm.jpg)"}}>
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
