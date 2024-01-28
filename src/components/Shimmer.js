import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const  Shimmer = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
};

export default Shimmer;