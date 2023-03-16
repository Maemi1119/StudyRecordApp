import React from 'react';
import TextField from '@mui/material/TextField';

export default function Create({id,first,second,third,fourth,fifth,firstPost,secondPost,thirdPost,fourthPost,fifthPost,firstValue,secondValue,thirdValue,fourthValue,fifthValue,number}) {
    
    return(
        <>
            <div id={id}>
                <h1 className="text-xl font-bold mt-6">{first}</h1>
                <TextField fullWidth onChange={firstPost} defaultValue={firstValue}/>
                
                <h1 className="text-xl font-bold mt-6">{second}</h1>
                <TextField fullWidth onChange={secondPost} defaultValue={secondValue}/>
                
                <h1 fullWidth className="text-xl font-bold mt-6">{third}</h1>
                <TextField fullWidth onChange={thirdPost} defaultValue={thirdValue}/>
                
                { first == 'Aim' &&
                <>
                    <h1 fullWidth  className="text-xl font-bold mt-6">{fourth}</h1>
                    <TextField fullWidth onChange={fourthPost} defaultValue={fourthValue}/>
                    <h1 fullWidth  className="text-xl font-bold mt-6">{fifth}</h1>
                    <TextField fullWidth onChange={fifthPost} defaultValue={fifthValue}/>
                </>
                }
            </div>
        </>
        );
}