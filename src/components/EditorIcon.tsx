import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const EditorIcon = ({ add, id }: { add: boolean; id?: string }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    if (id) navigate('/editor/' + id);
    else navigate('/editor');
  };

  return (
    <div className="editor-icon">
      <Fab
        size="large"
        color={add ? 'primary' : 'secondary'}
        aria-label={add ? 'add' : 'edit'}
        onClick={clickHandler}
      >
        {add ? <AddIcon /> : <EditIcon />}
      </Fab>
    </div>
  );
};

export default EditorIcon;
