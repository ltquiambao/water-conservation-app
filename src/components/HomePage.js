import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TriviaCard from './TriviaCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minHeight: 100
}));

export default function HomePage() {
  return (
    <Box sx={{ width: '100%'}}>
      <Stack spacing={2}>
        <TriviaCard />
        <Item elevation={0} >
          <Grid container spacing={2} columns={16} minHeight={100}>
            <Grid xs={8} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="body1">Your Average water usage</Typography>
            </Grid>
            <Grid xs={8} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h4">613.5 L</Typography>
            </Grid>
          </Grid>
        </Item>
        <Item elevation={0} variant="outlined">
          <Grid container spacing={2} columns={16} minHeight={100}>
            <Grid xs={8} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h6">Your Total September savings*</Typography>
            </Grid>
            <Grid xs={8} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h4">26%</Typography>
            </Grid>
          </Grid>
        </Item>
        <Item elevation={0} >
          <Grid container spacing={2} columns={16} minHeight={100}>
            <Grid xs={8} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="body1">Compared to homes around you.<br />Your savings are in the</Typography>
            </Grid>
            <Grid xs={8} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h4">Top 18%</Typography>
            </Grid>
          </Grid>
        </Item>

      </Stack>
    </Box>
  );
}
