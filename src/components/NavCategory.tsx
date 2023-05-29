import { Button, ButtonGroup } from '@mui/material';

const NavCategory = () => {
  return (
    <div className="categories">
      <ButtonGroup
        variant="text"
        aria-label="outlined primary button group"
        size="small"
      >
        <Button>Category 1</Button>
        <Button>Category 2</Button>
        <Button>Category 3</Button>
      </ButtonGroup>
    </div>
  );
};

export default NavCategory;
