import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({title, items}) {
  return (
    <>
        <FormControl>
          <FormLabel>{title}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
          >
            {items.map((item,index) => {
                <FormControlLabel value={index} control={<Radio />} label={item} />;
            })}
          </RadioGroup>
        </FormControl>
    </>
  );
}