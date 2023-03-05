import React, { useCallback } from 'react';
import { useForm } from '@inertiajs/react';
import Header from '@/Components/Header';
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
                <h1 className="text-xl font-bold mt-6">StudyTitle</h1>
                <TextField onChange={(e) => sTitle(e)}/>
                
                <h1 className="text-xl font-bold mt-6">Overview</h1>
                <TextField fullWidth onChange={(e) => sOverview(e)}/>
                
                <h1 className="text-xl font-bold mt-6">Password</h1>
                <TextField onChange={(e) => sPass(e)}/>
            
                <Button variant="outliend" onClick={() => setShow()}>BACK</Button>
                <Button variant="contained" onClick={() => submit()}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >SAVE</Button>
            </div>
        
        
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>StudyTitle</TableCell>
                    <TableCell align="right">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {studies.map((row) => (
                        <>
                            <TableRow
                              key={row.title}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                                <TableCell align="right">{row.created_at}</TableCell>
                            <Button variant="contained" href={'/'}
                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >OPEN</Button>
                            </TableRow>
                        </>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>    
                
                
        </>
        );
}