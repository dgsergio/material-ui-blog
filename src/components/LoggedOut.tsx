import { Box, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const LoggedOut = ({ onSigninHandler }: { onSigninHandler: () => void }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        margin: '0.2rem 0',
      }}
    >
      <Button onClick={onSigninHandler} size="small">
        Log-in / Sing-up
        <LoginIcon sx={{ ml: 1 }} />
      </Button>
    </Box>
  );
};

export default LoggedOut;
