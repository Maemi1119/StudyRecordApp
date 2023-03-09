import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import TextField from '@mui/material/TextField';
import Header from '@/Components/Header';
import Button from '@mui/material/Button';

export default function Experiment({datas}) {
    
    const { delete: destory } = useForm();
    const handleDelete = (id) => {
        if(confirm('削除すると復元できません。本当に削除しますか？')){
            destory(route("deletedata", id), {
                preserveScroll: true,
            });
        }
    };

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
            
            <Button variant="outlined" size='small' href={'/open/' + datas.study_id}
            >BACK</Button>
            <Button variant="outlined" size='small' onClick={()=>handleDelete(datas.id)}
            >DELETE</Button>
        </>
        );
}