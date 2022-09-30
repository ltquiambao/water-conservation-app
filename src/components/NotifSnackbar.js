import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function NotifSnackbar() {
  const [openLeakNotif, setOpenLeakNotif] = React.useState(false);
  const [openUsageThresh, setOpenUsageThresh] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpenLeakNotif(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpenUsageThresh(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setOpenLeakNotif(true);
  };

  const handleCloseLeakNotif = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenLeakNotif(false);
  };

  const handleCloseUsageThresh = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenUsageThresh(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={openLeakNotif}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={handleCloseLeakNotif}
      >
        <Alert onClose={handleCloseLeakNotif} severity="warning" sx={{ width: "100%" }}>
          There is a potential leak on your Kitchen Sink. Please check right away.
        </Alert>
      </Snackbar>
      <Snackbar
        open={openUsageThresh}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={handleCloseUsageThresh}
      >
        <Alert onClose={handleCloseUsageThresh} severity="info" sx={{ width: "100%" }}>
          You are already at 92% from your water usage limit 
        </Alert>
      </Snackbar>
    </Stack>
  );
}
