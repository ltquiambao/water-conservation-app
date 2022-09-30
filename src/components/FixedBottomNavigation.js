import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import ShowerIcon from '@mui/icons-material/Shower';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import HomePage from './HomePage';
import DevicesPage from './DevicesPage';

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
      {value === index && (
        <Box sx={{ p: 0 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(1);
  const ref = React.useRef(null);
  // const [messages, setMessages] = React.useState(() => refreshMessages());

  // React.useEffect(() => {
  //   ref.current.ownerDocument.body.scrollTop = 0;
  //   setMessages(refreshMessages());
  // }, [value, setMessages]);

  return (
    <Box sx={{ p: 4, pb: 8 }} ref={ref}>
      <CssBaseline />
      <TabPanel value={value} index={0}>
        <div>Profile page</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <div>Home page</div> */}
        <HomePage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <div>Devices page</div> */}
        <DevicesPage />
      </TabPanel>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Devices" icon={<ShowerIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}