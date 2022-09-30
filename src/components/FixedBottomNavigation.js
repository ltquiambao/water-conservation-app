import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import ShowerIcon from "@mui/icons-material/Shower";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import HomePage from "./HomePage";
import DevicesPage from "./DevicesPage";
import ProfilePage from "./ProfilePage";

// function refreshMessages() {
//   const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

//   return Array.from(new Array(50)).map(
//     () => messageExamples[getRandomInt(messageExamples.length)],
//   );
// }

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(1);
  const [devicesData, setDevicesData] = React.useState([]);
  const [devicesLiveData, setDevicesLiveData] = React.useState([]);
  const ref = React.useRef(null);
  // const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    const fetchData = async () => {
      const response1 = await axios.get(
        "https://bsoxz2jb68.execute-api.us-east-1.amazonaws.com/default/getSmartWaterDeviceData"
      );
      const newData = response1.data;
      setDevicesData(newData);

      const response2 = await axios.get(
        "https://g0cbf77co6.execute-api.us-east-1.amazonaws.com/default/getSmartWaterDeviceLiveData"
      );
      const newLiveData = response2.data;
      setDevicesLiveData(newLiveData);
    };
    fetchData();
  }, [value]);

  return (
    <Box sx={{ p: 4, pb: 8 }} ref={ref}>
      <CssBaseline />
      <TabPanel value={value} index={0}>
        <ProfilePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HomePage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DevicesPage
          devicesData={devicesData}
          devicesLiveData={devicesLiveData}
        />
      </TabPanel>

      <Paper
        sx={{ position: "fixed", pb: 2, bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Profile"
            icon={<AccountCircleIcon />}
          />
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction
            label="Devices"
            icon={<ShowerIcon />}
            onClick={() => console.log("Shower icon clicked!")}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
