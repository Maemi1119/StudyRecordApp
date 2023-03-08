import React, { useState,useCallback } from 'react';
import { useForm } from '@inertiajs/react';
import Header from '@/Components/Header';
import Create from '@/Components/Create';
import Tables from '@/Components/Tables';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Record({ study, datas, researches }) {

    const { data, setData, post } = useForm({
        aim:'',
        method:'',
        tool:'',
        result:'',
        memo:'',
        title: '',
        overview:'',
        link: '',
        check:'',
    });
    
    var record = false;
    var imput = false;
    
    //Switching the display of the choose screen
    let create = false;
    const setShow = () =>{
        if (create == false){
            document.getElementById('create') . style . display = "block";
            create = true;
        }else{
            document.getElementById('create') . style . display = "none";
            create = false;
        }
    };
    
    //Switching the display of the record screen
    const recordEx = () =>{
        if (record == false){
            document.getElementById('experiment') . style . display = "block";
            record = true;
            document.getElementById('research') . style . display = "none";
            imput = false;
        }else{
            document.getElementById('experiment') . style . display = "none";
            record = false;
        }
    };
    const memory = () =>{
        if (imput == false){
            document.getElementById('research') . style . display = "block";
            imput = true;
            document.getElementById('experiment') . style . display = "none";
            record = false;
        }else{
            document.getElementById('research') . style . display = "none";
            imput = false;
        }
    };
    
    
    //post
    const submit = () =>{
        post(`/record/${study.id}`);
    };
    
    //Getting input values
    const sAim = useCallback((e) =>{
        setData('aim', e.target.value);
    });
    const sMethod = useCallback((e) =>{
        setData('method', e.target.value);
    });
    const sTools = useCallback((e) =>{
        setData('tool', e.target.value);
    });
    const sResult = useCallback((e) =>{
        setData('result', e.target.value);
    });
    const sMemo = useCallback((e) =>{
        setData('memo', e.target.value);
    });
    const sTitle = useCallback((e) =>{
        setData('title', e.target.value);
    });
    const sBody = useCallback((e) =>{
        setData('body', e.target.value);
    });
    const sLink = useCallback((e) =>{
        setData('link', e.target.value);
    });
    
    return(
        <>
            <Header>Record</Header> 
            
            <Button variant="contained" onClick={() => setShow()} 
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >NEW RECORD</Button>
            
            {/*Choose Screen*/}
            <div id='create' className='hidden'>
                <h1 className="text-xl font-bold mt-6">Please choose what you are about to record.</h1>
                <Button variant="outlined" size="large" onClick={() => recordEx()}>
                    Experiment/Survey
                </Button>
                <Button variant="outlined" size="large" onClick={() => memory()}>
                    Research
                </Button>
            </div>
            
            {/*Experiment/Survey Record Entry Screen*/}
            <div id='experiment' className='hidden'>
                <Create  
                first={'Aim'} 
                second={'Method'} 
                third={'Tools'} 
                fourth={'Result'} 
                fifth={'memo'}
                firstPost={(e) => sAim(e)}
                secondPost={(e) => sMethod(e)}
                thirdPost={(e) => sTools(e)}
                fourthPost={(e) => sResult(e)}
                fifthPost={(e) => sMemo(e)}
                >
                </Create>
                <Button variant="outliend" onClick={() => recordEx()}>BACK</Button>
                <Button variant="contained" onClick={() => submit()}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >SAVE</Button>
            </div>
            
            {/*Research Record Entry Screen*/}
            <div id='research' className='hidden'>
                <Create 
                first={'Title'} 
                second={'Body'} 
                third={'References'}
                firstPost={(e) => sTitle(e)}
                secondPost={(e) => sBody(e)}
                thirdPost={(e) => sLink(e)}
                ></Create>
                <Button variant="outliend" onClick={() => memory()}>BACK</Button>
                <Button variant="contained" onClick={() => submit()}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >SAVE</Button>
            </div>
            
            <Tables Title='Experiment/Survey Record' Category='Category' num={datas} link={'/data/'}></Tables>
            
            <Tables Title='Research Record' Category='Category' num={researches} link={'/research/'}></Tables>
            
        </>
        );
}