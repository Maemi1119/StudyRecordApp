import React, { useState,useCallback } from 'react';
import { useForm } from '@inertiajs/react';
import Header from '@/Components/Header';
import RadioButtonsGroup from '@/Components/RadioButtonsGroup';
import Create from '@/Components/Create';
import Tables from '@/Components/Tables';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Record({ study, datas, researches }) {
    
    const categories = ['none', 'apple', 'banana'];
    
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
    
    let record = false;
    let imput = false;
    
    //Switching the display of the choose screen
    let create = false;
    const setShow = () =>{
        if (create == false){
            create = true;
            document.getElementById('create') . style . display = "block";
            document.getElementById('show') . style . display = "none";
        }else{
            create = false;
            document.getElementById('create') . style . display = "none";
            document.getElementById('show') . style . display = "block";
            record = true;
            imput = true;
            recordEx();
            memory();
        }
    };
    
    //Switching the display of the record screen
    const recordEx = (e) =>{
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
    
    let share = false;
    let sharepass = () =>{
        if (share == false){
            share = true;
            document.getElementById('share') . style . display = "block";
            document.getElementById('shareBtn') . style . display = "none";
        }else{
            share = false;
            document.getElementById('share') . style . display = "none";
            document.getElementById('shareBtn') . style . display = "block";
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
    
    const { delete: destory } = useForm();
    const handleDelete = (id) => {
        if(confirm('削除すると復元できません。本当に削除しますか？')){
            destory(route("delete.study", id), {
                preserveScroll: true,
            });
        }
    };
    
    return(
        <>
            <Header>Record</Header> 
            
            <div className='w-4/5 mx-auto my-10'>
                <div className='w-4/5 my-10'>
                <h1 className="text-xl font-bold mt-6">StudyTitle</h1>
                <p>{study.title}</p>
                <h1 className="text-xl font-bold mt-6">Overview</h1>
                <p>{study.overview}</p>
                    <div id='share' className='hidden'>
                        <h1 className="text-xl font-bold mt-6">ShareID</h1>
                        <p>{study.id}</p>
                        <h1 className="text-xl font-bold mt-6">Pass</h1>
                        <p>{study.pass}</p>
                        <Button id='close' variant="outlined" size='small' onClick={() => sharepass()} 
                        >close</Button>
                    </div>
                <Button id='shareBtn' variant="outlined" size='small' onClick={() => sharepass()} 
                >share</Button>
                </div>
                
                <Button id='show' variant="contained" onClick={() => setShow()} 
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >NEW RECORD</Button>
                
                {/*Choose Screen*/}
                <div id='create' className='hidden w-4/5 my-10'>
                    <Button id='hide' variant="contained" onClick={() => setShow()} 
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >CLOSE</Button>
                    <p>Please choose what you are about to record.</p>
                    <Button variant="outlined" size="large" onClick={() => recordEx()}>
                        Experiment/Survey
                    </Button>
                    <Button variant="outlined" size="large" onClick={() => memory()}>
                        Research
                    </Button>
                </div>
                
                {/*Experiment/Survey Record Entry Screen*/}
                <div id='experiment' className='hidden w-4/5 mx-auto my-10'>
                    {/*<RadioButtonsGroup ></RadioButtonsGroup>*/}
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
                <div id='research' className='hidden w-4/5 mx-auto my-10'>
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
                
                <Tables Title='Experiment/Survey Record' Category='Category ' num={datas} link={'/data/'}></Tables>
                
                <Tables Title='Research Record' Category='Category ' num={researches} link={'/research/'}></Tables>
                
                <Button variant="outlined" href={'/category/'+study.id}
                >CreateCategory</Button>
                <div className="mt-10">
                    <Button variant="outlined" size='small' href={'/'}
                    >BACK</Button>
                    <Button variant="outlined" size='small' onClick={()=>handleDelete(study.id)}
                    >DELETE</Button>
                </div>
            </div>
        </>
        );
}