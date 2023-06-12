import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import { Container } from '@mui/material';
import { auth, provider } from '../firebase';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import LoggedOut from './LoggedOut';

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [user, setUser] = useState<null | GoogleApi>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    console.log('eff');
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user as GoogleApi);
        console.log(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signinHandler = () => {
    setAnchorEl(null);
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user as GoogleApi);
      console.log(result.user);
    });
  };

  const loggoutHandler = () => {
    setAnchorEl(null);
    signOut(auth)
      .then(() => {
        console.log('nos vimos');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ display: 'flex' }}
        className="topbar-container"
      >
        {!user && <LoggedOut onSigninHandler={signinHandler} />}
        {user && (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography fontSize="0.9rem" color="GrayText">
                Hi {user.displayName}!
              </Typography>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'login-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>
                    <img
                      src={user.photoURL}
                      alt={`${user.displayName} profile picture`}
                      className="topbar-profile-image"
                    />
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="login-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={loggoutHandler}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Log-out
              </MenuItem>
            </Menu>
          </>
        )}
      </Container>
    </>
  );
};

export default TopBar;
