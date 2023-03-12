import React, { useState, useCallback } from 'react';
import { useForm, Link } from '@inertiajs/react';
import escapeStringRegexp from "escape-string-regexp";
import Header from '@/Components/Header';
import Create from '@/Components/Create';
import Tables from '@/Components/Tables';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Study({auth, studies, study}) {

    //Survey Registration
    const { data, setData, post } = useForm({
        title: '',
        overview:'',
        pass: '',
    });
    
    const [searchKeyWord, setSearchKeyWord] =useState("");
    const onInput = (e) =>{
        setSearchKeyWord(e.target.value);
    };

    const values = Object.values(studies);
    const filteredList = values.filter((item) => {
        const escapedText = escapeStringRegexp(String(searchKeyWord).toLowerCase());
        const clearTitle = new RegExp(escapedText).test(String(item.title).toLowerCase());
        if ( !searchKeyWord.length==0 & clearTitle ){
            return item;
        }
    });
    
    //Switching the display of the registration screen
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
    
    
    //Getting input values
    const sTitle = useCallback((e, value) =>{
        setData('title', e.target.value);
    });
    const sOverview = useCallback((e, value) =>{
        setData('overview', e.target.value);
    });
    const sPass = useCallback((e, value) =>{
        setData('pass', e.target.value);
    });


    //post
    const submit = () =>{
        post('/create');
    };
        
    
    return(
        <>
            <Header>Study</Header>
            
            <div className='w-4/5 mx-auto my-10'>
                <h1 className="text-xl font-bold mt-6">StudySearch</h1>
                <div>
                    <TextField
                      fullWidth
                      type="text"
                      onInput={onInput}
                      placeholder={"input search keyword"}
                    />
                </div>
                <h1 className="text-xl font-bold mt-2">Result</h1>
                <Tables Title='StudyTitle' num={filteredList} link={'/open/'}></Tables>
            </div>
            
            <div className='w-4/5 mx-auto my-10'>
                <Button variant="contained" onClick={() => setShow()} 
                    className="text-white bg-gradieant-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >NEW STUDY</Button>
                
                
                {/*New Survey Record Creation Screen*/}
                <div id='create' className='hidden w-4/5 mx-auto my-10'>
                    <Create  
                    first={'Title'} 
                    second={'Overview'} 
                    third={'pass'} 
                    firstPost={(e) => sTitle(e)}
                    secondPost={(e) => sOverview(e)}
                    thirdPost={(e) => sPass(e)}
                    ></Create>
                    <Button variant="outlined" onClick={() => setShow()}>CLOSE</Button>
                    <Button variant="contained" onClick={() => submit()}
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >SAVE</Button>
                </div>
                
                {auth.user ? (
                     <>
                        {/*Study List*/}
                        <Tables Title='StudyTitle' num={study} link={'/open/'}></Tables>
                        <Link href={route('logout')} method="post">LOG OUT</Link>
                     </>
                ) : (
                    <div className='mt-10'>
                        <h1 className="text-xl font-bold mt-6">Login here</h1>
                        <Button variant="contained" href={route('login')}
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >LOG IN</Button>
                        <Button variant="outlined" href={route('register')}
                        >CREATE ACCOUNT</Button>
                    </div>
                )}
            </div>
        </>
        );
}