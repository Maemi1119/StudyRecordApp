import React, { useCallback } from 'react';
import { useForm } from '@inertiajs/react';
import Header from '@/Components/Header';
import Create from '@/Components/Create';
import Tables from '@/Components/Tables';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Study({auth,studies}) {
    
    //Survey Registration
    const { data, setData, post } = useForm({
        title: '',
        overview:'',
        pass: '',
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
            
            <Button variant="contained" onClick={() => setShow()} 
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >NEW</Button>
            
            
            {/*New Survey Record Creation Screen*/}
            <div id='create' className='hidden'>
                <Create  
                first={'Title'} 
                second={'Overview'} 
                third={'pass'} 
                firstPost={(e) => sTitle(e)}
                secondPost={(e) => sOverview(e)}
                thirdPost={(e) => sPass(e)}
                ></Create>
                <Button variant="outliend" onClick={() => setShow()}>BACK</Button>
                <Button variant="contained" onClick={() => submit()}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >SAVE</Button>
            </div>
            
            {/*Study List*/}
            <Tables Title='StudyTitle' num={studies} link={'/open/'}></Tables>
        </>
        );
}