import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

type AlertInfoPropType = {
  title: string;
  message: string;
  type: 'error' | 'warning' | 'success' | 'info';
};

const AlertInfo = ({ title, message, type }: AlertInfoPropType) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2} className="alertinfo">
      <Alert severity={type}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
      <Button size="small">
        <Link to="/">&#x21D0; Back to home page</Link>
      </Button>
    </Stack>
  );
};

export default AlertInfo;
