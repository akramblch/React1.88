import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

 function SelectColor() {
  const [color, setColor] = React.useState('');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          label="Цвет"
          onChange={handleChange}
        >
          <MenuItem value={10}>White</MenuItem>
          <MenuItem value={20}>Red</MenuItem>
          <MenuItem value={30}>Black</MenuItem>
          <MenuItem value={40}>Green</MenuItem>
          <MenuItem value={50}>Blue</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default SelectColor;