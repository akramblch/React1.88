import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

 function SelectBrand() {
  const {brand, setBrand} = React.useState('');

  const handleChange = (event) => {
    setBrand(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brand}
          label="Бренд"
          onChange={handleChange}
        >
          <MenuItem value={10}>Adidas</MenuItem>
          <MenuItem value={20}>Nike</MenuItem>
          <MenuItem value={30}>A&J</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default SelectBrand;