import { useState, useEffect } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['Review', 'Photoshop', 'Technology', 'Design', 'A.I.', 'Code'];

const getStyles = (
  name: string,
  personName: readonly string[],
  theme: Theme
) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const Editor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const { postId } = useParams();
  const posts = useSelector((state: PostsState) => state.posts);
  const post = posts.find((post) => post.id === postId);
  const [personName, setPersonName] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (post) setPersonName([...post.categories]);
  }, []);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postSelected: PostType = {
      id: post?.id || Date.now().toString(),
      title: e.currentTarget.titlePost.value,
      body: e.currentTarget.body.value,
      img: e.currentTarget.imageUrl.value,
      categories: e.currentTarget.selectMultipleCategories.value.split(','),
    };
    if (
      postSelected.img.length < 1 ||
      postSelected.title.length < 1 ||
      postSelected.body.length < 1 ||
      e.currentTarget.selectMultipleCategories.value.length < 1
    )
      setErrorMsg('All field are required');
    else {
      dispatch(addPost(postSelected));
      navigate('/');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        onSubmit={submitHandler}
        component="form"
        sx={{
          '& > :not(style)': { m: 3 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          id="titlePost"
          label="Title"
          variant="standard"
          defaultValue={post?.title}
          required
        />
        <TextField
          defaultValue={post?.img}
          fullWidth
          required
          id="imageUrl"
          label="Image URL"
          helperText="Provide a valid HTTP URL address of an image."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ImageIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          defaultValue={post?.body}
          fullWidth
          id="body"
          label="Body"
          multiline
          rows={8}
          required
        />
        {errorMsg && <div className="message error">{errorMsg}</div>}
        <div className="form-footer">
          <FormControl sx={{ width: 240 }}>
            <InputLabel id="multipleCategorieslabel">Chip *</InputLabel>
            <Select
              fullWidth
              required
              labelId="multipleCategorieslabel"
              id="multipleCategories"
              multiple
              value={personName}
              onChange={handleChange}
              input={
                <OutlinedInput id="selectMultipleCategories" label="Chip" />
              }
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              defaultValue={post?.categories}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="form-footer-buttons">
            <Button
              variant="outlined"
              type="button"
              size="large"
              onClick={() => navigate('/')}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              size="large"
              endIcon={<SendIcon />}
            >
              Submit
            </Button>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Editor;
