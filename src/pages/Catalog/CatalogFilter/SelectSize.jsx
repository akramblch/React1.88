import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { CustomContext } from '../../../utils/context';

function SelectSize() {
  const {category, size, setSize} = useContext(CustomContext)

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
      
            {
                category === 'shoes' ? 
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={size}
                label="Размер"
                onChange={handleChange}
              >
                <MenuItem value={36}>36</MenuItem>
                <MenuItem value={37}>37</MenuItem>
               <MenuItem value={38}>38</MenuItem>
               <MenuItem value={39}>39</MenuItem>
               <MenuItem value={40}>40</MenuItem>
               <MenuItem value={41}>41</MenuItem>
               <MenuItem value={42}>42</MenuItem>
               </Select>
               
                : category  === 't-short' || category === 'sweatshirts' ? 
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={size}
                label="Размер"
                onChange={handleChange}
              >
           
              <MenuItem value='s'>S</MenuItem>
                <MenuItem value='m'>M</MenuItem>
               <MenuItem value='l'>L</MenuItem>
               <MenuItem value='xl'>XL</MenuItem>
               <MenuItem value='xxl'>XXL</MenuItem>
               </Select> 
               : category === 'pants' ? 
               <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={size}
               label="Размер"
               onChange={handleChange}
             >
                <MenuItem value={34}>34</MenuItem>
                <MenuItem value={36}>36</MenuItem>
               <MenuItem value={38}>38</MenuItem>
               <MenuItem value={40}>40</MenuItem>
               <MenuItem value={42}>42</MenuItem>
                </Select> : ''
            }   
          
     
      </FormControl>
    </Box>
  );
}
export default  SelectSize;