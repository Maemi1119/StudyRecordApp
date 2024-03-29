import React, { useState,useCallback } from 'react';
import { useForm,router } from '@inertiajs/react';
import Header from '@/Components/Header';
import Create from '@/Components/Create';
import Tables from '@/Components/Tables';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';

export default function Record({ auth, study, datas, researches, categories}) {
    
    //Record Form
    const { data, setData, post } = useForm({
        category_id:1,
        
        aim:'',
        method:'',
        tool:'',
        result:'',
        memo:'',
        
        title: '',
        body:'',
        link: '',
    });
    
    
    let record = false;
    let input = false;
    
    //Switching the display of the choose screen
    let create = false;
    const setShow = (e) =>{
        if (create == false){
            create = true;
            document.getElementById('create') . style . display = "block";
            document.getElementById('show') . style . display = "none";
        }else{
            create = false;
            document.getElementById('create') . style . display = "none";
            document.getElementById('show') . style . display = "block";
            record = true;
            input = true;
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
            input = false;
        }else{
            document.getElementById('experiment') . style . display = "none";
            record = false;
        }
    };
    const memory = () =>{
        if (input == false){
            document.getElementById('research') . style . display = "block";
            input = true;
            document.getElementById('experiment') . style . display = "none";
            record = false;
        }else{
            document.getElementById('research') . style . display = "none";
            input = false;
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
    
    //Category values
    let categoryList = [];
    const addCategory = categories.map((item) => (
            categoryList.push(item.category)
        ));
    const [value, setValue] = useState(categoryList[0]);
    const [inputValue, setInputValue] = useState('');
    
    //Validation
    const exVali = () => {
        if(document.getElementById('experiment').style.display == "block"){
            if(data.aim.length !== 0){
            }else{
                alert('"Aim" is blank.');
                return false;
            }
            if(data.method.length !== 0){
            }else{
                alert('"Method" is blank.');
                return false;
            }
            if(data.result.length !== 0){
            }else{
                alert('"Result" is blank.');
                return false;
            }
            return true;
        }else{
            return true;
        }
    };
    const reVali = () => {
        if(document.getElementById('research').style.display == "block"){
            if(data.title.length !== 0){
            }else{
                alert('"Title" is blank.');
                return false;
            }
            if(data.body.length !== 0){
            }else{
                alert('"Body" is blank.');
                return false;
            }
            if(data.link.length !== 0){
            }else{
                alert('"References" is blank.');
                return false;
            }
            return true;
        }else{
            return true;
        }
    };
    
    //post
    const submit = (e) =>{
        if( exVali() && reVali() ){
            e.preventDefault();
            post(`/record/${study.id}`);
        }
    };
    
    //Getting input values
    const sCategory = (newInputValue) =>{
        const categoryId = categories.filter((category) => category.category == newInputValue);
        setData('category_id', categoryId[0].id);
    };
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
    
    //delete Studies
    const { delete: destory } = useForm();
    const handleDelete = (id) => {
        if(confirm("If you delete it, you can't restore it. Are you sure you want to delete it?")){
            destory(route("delete.study", id), {
                preserveScroll: true,
            });
        }
    };
    
    return(
        <>
            <Header auth={auth}>Record</Header> 
            
            {/*Study Information*/}
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
                
                <Button id='show' variant="contained" onClick={(e) => setShow(e)} 
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
                    <Autocomplete
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        sCategory(newInputValue);
                      }}
                      disablePortal
                      options={categoryList}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Category"/> }
                    />
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
                    <Button variant="contained" onClick={(e) => submit(e)}
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >SAVE</Button>
                </div>
                
                {/*Research Record Entry Screen*/}
                <div id='research' className='hidden w-4/5 mx-auto my-10'>
                    <Autocomplete
                      disablePortal
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        sCategory(newInputValue);
                      }}
                      options={categoryList}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Category" /> }
                    />
                    <Create 
                    first={'Title'} 
                    second={'Body'} 
                    third={'References'}
                    firstPost={(e) => sTitle(e)}
                    secondPost={(e) => sBody(e)}
                    thirdPost={(e) => sLink(e)}
                    ></Create>
                    <Button variant="outliend" onClick={() => memory()}>BACK</Button>
                    <Button variant="contained" onClick={(e) => submit(e)}
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >SAVE</Button>
                </div>
                
                {/* Record Tables */}
                <Tables Title='Experiment/Survey Record' Category='Category ' num={datas} link={'/data/'} methods='get'></Tables>
                
                <Tables Title='Research Record' Category='Category ' num={researches} link={'/research/'} methods='get'></Tables>
                <div className='mt-10'>
                    <Button variant="outlined" onClick={() => router.get('/category/'+study.id)}
                    >Categories</Button>
                </div>
                <div className="mt-10">
                    <Button variant="outlined" size='small' onClick={() => router.get('/')}
                    >BACK</Button>
                    <Button variant="outlined" size='small' onClick={()=>handleDelete(study.id)}
                    >DELETE</Button>
                </div>
            </div>
        </>
        );
}