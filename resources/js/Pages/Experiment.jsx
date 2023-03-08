import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Header from '@/Components/Header';
import Button from '@mui/material/Button';

export default function Experiment({datas}) {
    console.log(datas);
    return(
        <>
            <Header>Content</Header>
            
            <h1 className="text-xl font-bold mt-6">Aim</h1>
            <p>{datas.aim}</p>
            
            <h1 className="text-xl font-bold mt-6">Method</h1>
            <p>{datas.method}</p>
            
            <h1 className="text-xl font-bold mt-6">Tools</h1>
            <p>{datas.tool}</p>
            
            <h1 className="text-xl font-bold mt-6">Result</h1>
            <p>{datas.result}</p>
            
            <h1 className="text-xl font-bold mt-6">memo</h1>
            <p>{datas.memo}</p>
            
        </>
        );
}