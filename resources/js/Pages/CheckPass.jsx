import React, { useCallback } from 'react';
import { useForm } from '@inertiajs/react';
import TextField from '@mui/material/TextField';
import Header from '@/Components/Header';
import InputError from '@/Components/InputError';
import Button from '@mui/material/Button';

export default function CheckPass({study,errors}) {
    
    const { data, setData, post } = useForm({
        pass:''
    });
    
    const sPass = useCallback((e) =>{
        setData('pass', e.target.value);
    });
    
    const submit = (e) => {
        e.preventDefault();
        post('/check/'+study.id);
    };
    
    return(
        <>
            <Header>CheckPassword</Header>
            <div className='w-4/5 mx-auto my-10'>
                <h1 className="text-xl font-bold mt-6">Please enter study password.</h1>
                <TextField onChange={(e) => sPass(e)}/>
                <InputError message={errors.missing} className="mt-2" />
                <Button variant="contained" onClick={(e) => submit(e)}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >ENTER</Button>
                <Button variant="outlined" href={'/'}
                >BACK</Button>
            </div>
        </>
        );
}