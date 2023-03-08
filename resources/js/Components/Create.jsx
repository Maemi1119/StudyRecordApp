import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Create({id,first,second,third,fourth,fifth,firstPost,secondPost,thirdPost,fourthPost,fifthPost,number}) {
    
    return(
        <>
            <div id={id}>
                <h1 className="text-xl font-bold mt-6">{first}</h1>
                <TextField fullWidth onChange={firstPost}/>
                
                <h1 className="text-xl font-bold mt-6">{second}</h1>
                <TextField fullWidth onChange={secondPost}/>
                
                <h1 fullWidth  className="text-xl font-bold mt-6">{third}</h1>
                <TextField fullWidth onChange={thirdPost}/>
                
                { first == 'Aim' &&
                <>
                    <h1 fullWidth  className="text-xl font-bold mt-6">{fourth}</h1>
                    <TextField fullWidth onChange={fourthPost}/>
                    <h1 fullWidth  className="text-xl font-bold mt-6">{fifth}</h1>
                    <TextField fullWidth onChange={fifthPost}/>
                </>
                }
            </div>
        </>
        );
}