import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export default function Dividers({categories, handleDelete}) {
  return (
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
          }}
        >
            {categories.map((item) => (
                <>
                    <Divider component="li" />
                    <ListItem>
                        <ListItemText primary={item.category} secondary={item.comment} />
                        <Button variant="outlined" size='small' onClick={()=>handleDelete(item.id)}
                        >DELETE</Button>
                    </ListItem>
                </>
                ))
            }
        </List>
  );
}