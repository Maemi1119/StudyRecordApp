import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import TextField from '@mui/material/TextField';
import Header from '@/Components/Header';
import Button from '@mui/material/Button';

export default function Experiment({researches}) {

    const { delete: destory } = useForm();
    const handleDelete = (id) => {
        if(confirm('削除すると復元できません。本当に削除しますか？')){
            destory(route("delete.research", id), {
                preserveScroll: true,
            });
        }
    };
    
    return(
        <>
            <Header>Content</Header>
            
            <div className='w-4/5 mx-auto my-10'>
                <h1 className="text-xl font-bold mt-6">Title</h1>
                <p>{researches.title}</p>
                
                <h1 className="text-xl font-bold mt-6">Body</h1>
                <p>{researches.body}</p>
                
                <h1 className="text-xl font-bold mt-6">References</h1>
                <p>{researches.link}</p>
                
                <div className="mt-10">
                    <Button variant="outlined" size='small' href={'/open/' + researches.study_id}
                    >BACK</Button>
                    <Button variant="outlined" size='small' onClick={()=>handleDelete(researches.id)}
                    >DELETE</Button>
                </div>
            </div>
        </>
        );
}