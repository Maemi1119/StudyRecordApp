import React, { useState,useCallback } from 'react';
import { useForm } from '@inertiajs/react';
import TextField from '@mui/material/TextField';
import Header from '@/Components/Header';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Create from '@/Components/Create';

export default function Experiment({auth,datas,category,categories,user}) {
    
    //Modify Data Form
    const { data, setData, post, processing, errors, reset } = useForm({
        category_id:datas.category_id,
        aim:datas.aim,
        method:datas.method,
        tools:datas.tool,
        result:datas.result,
        memo:datas.memo,
        study_id:datas.study_id,
        _method:'put',
    });
    
    //delete Datas
    const { delete: destory } = useForm();
    const handleDelete = (id) => {
        if(confirm("If you delete it, you can't restore it. Are you sure you want to delete it?")){
            destory(route("delete.data", id), {
                preserveScroll: true,
            });
        }
    };
    
    // Show modify screen
    let modify = false;
    const setShow = () =>{
        if (modify == false){
            modify = true;
            document.getElementById('modify') . style . display = "block";
            document.getElementById('result') . style . display = "none";
        }else{
            modify = false;
            document.getElementById('modify') . style . display = "none";
            document.getElementById('result') . style . display = "block";
        }
    };
    
    // CategoryList
    let categoryList = [];
    const addCategory = categories.map((item) => (
            categoryList.push(item.category)
        ));
    const [value, setValue] = useState(categoryList[datas.category_id-1]);
    const [inputValue, setInputValue] = useState('');
    
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
        setData('tools', e.target.value);
    });
    const sResult = useCallback((e) =>{
        setData('result', e.target.value);
    });
    const sMemo = useCallback((e) =>{
        setData('memo', e.target.value);
    });
    
    //post
    const submit = (e) => {
        e.preventDefault();
        post('/updatedata/'+datas.id);
    };
    
    
    return(
        <>
            <Header auth={auth}>Content</Header>
            
            {/* Record Modify Screen */}
            <div id='modify' className='hidden w-4/5 mx-auto my-10'>
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
                fifth={'Memo'}
                firstPost={(e) => sAim(e)}
                secondPost={(e) => sMethod(e)}
                thirdPost={(e) => sTools(e)}
                fourthPost={(e) => sResult(e)}
                fifthPost={(e) => sMemo(e)}
                firstValue={data.aim}
                secondValue={data.method}
                thirdValue={data.tools}
                fourthValue={data.result}
                fifthValue={data.memo}
                ></Create>
                <Button variant="outliend" onClick={() => setShow()}>BACK</Button>
                <Button variant="contained" onClick={(e) => submit(e)}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >SAVE</Button>
            </div>
            
            {/* Show Record Contents */}
            <div id='result' className='w-4/5 mx-auto my-10'>
                <h1 className="text-xl font-bold mt-6">Category</h1>
                <p>{category[0].category}</p>
                
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
                
                <p className='mt-10'>作成者　{user[0].name}</p>
                
                <Button variant="outlined" size='small' onClick={() => setShow()}
                >Modify</Button>
                <div className="mt-10">
                    <Button variant="outlined" size='small' href={'/open/' + datas.study_id}
                    >BACK</Button>
                    <Button variant="outlined" size='small' onClick={()=>handleDelete(datas.id)}
                    >DELETE</Button>
                </div>
            </div>
        </>
        );
}