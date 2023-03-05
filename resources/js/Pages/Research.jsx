import React, { useState } from 'react';
import Header from '@/Components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Research() {
    
    return(
        <>
            <Header>ReseachRecord</Header>
            
            <div>
                <h1 className="text-xl font-bold mt-6">Title</h1>
                <TextField />
                
                <h1 className="text-xl font-bold mt-6">Body</h1>
                <TextField fullWidth defaultValue="Normal"/>
                
                <h1 className="text-xl font-bold mt-6">References</h1>
                <TextField />
            </div>
            
            <Button variant="contained">SAVE</Button>
        </>
        );
}