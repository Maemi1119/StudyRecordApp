import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import TextField from '@mui/material/TextField';
import Header from '@/Components/Header';
import Button from '@mui/material/Button';

export default function Experiment({researches}) {
    
    const { delete: destory } = useForm();
    const handleDelete = (id) => {
        if(confirm('削除すると復元できません。本当に削除しますか？')){
            destory(route("deleteresearch", id), {
                preserveScroll: true,
            });
        }
    };
    
    return(
        <>
            <Header>Content</Header>
            
            <h1 className="text-xl font-bold mt-6">Aim</h1>
            <p>{researches.title}</p>
            
            <h1 className="text-xl font-bold mt-6">Method</h1>
            <p>{researches.body}</p>
            
            <h1 className="text-xl font-bold mt-6">Tools</h1>
            <p>{researches.link}</p>
            
            <Button variant="outlined" size='small' href={'/open/' + researches.study_id}
            >BACK</Button>
            <Button variant="outlined" size='small' onClick={()=>handleDelete(researches.id)}
            >DELETE</Button>
        </>
        );
}