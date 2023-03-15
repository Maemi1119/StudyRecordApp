import React, { useState,useCallback } from 'react';
import {Inertia} from "@inertiajs/react";
import { useForm } from '@inertiajs/react';
import TextField from '@mui/material/TextField';
import Header from '@/Components/Header';
import Button from '@mui/material/Button';
import Create from '@/Components/Create';
import Autocomplete from '@mui/material/Autocomplete';

export default function Research({researches,category, categories, user}) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        id:researches.id,
        category_id:researches.category_id,
        title:researches.title,
        body:researches.body,
        link:researches.link,
        study_id:researches.study_id,
        _method:'put',
    });
    
    console.log(data);
    
    const { delete: destory } = useForm();
    const handleDelete = (id) => {
        if(confirm('削除すると復元できません。本当に削除しますか？')){
            destory(route("delete.research", id), {
                preserveScroll: true,
            });
        }
    };
    
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
    
    
    let categoryList = [];
    const addCategory = categories.map((item) => (
            categoryList.push(item.category)
        ));
        
    const [value, setValue] = useState(categoryList[researches.category_id-1]);
    const [inputValue, setInputValue] = useState('');
    
    const sCategory = (newInputValue) =>{
        const categoryId = categories.filter((category) => category.category == newInputValue);
        setData('category_id', categoryId[0].id);
    };
    const sTitle = useCallback((e) =>{
        setData('title', e.target.value);
    });
    const sBody = useCallback((e) =>{
        setData('body', e.target.value);
    });
    const sLink = useCallback((e) =>{
        setData('link', e.target.value);
    });
    
    const submit = (e) => {
        e.preventDefault();
        post('/updateresearch/'+researches.id);
    };
    
    return(
        <>
            <Header>Content</Header>
            
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
                first={'Title'} 
                second={'Body'} 
                third={'References'}
                firstPost={(e) => sTitle(e)}
                secondPost={(e) => sBody(e)}
                thirdPost={(e) => sLink(e)}
                firstValue={data.title}
                secondValue={data.body}
                thirdValue={data.link}
                ></Create>
                <Button variant="outliend" onClick={() => setShow()}>BACK</Button>
                <Button variant="contained" onClick={(e) => submit(e)}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >SAVE</Button>
            </div>
            
            
            <div id='result' className='w-4/5 mx-auto my-10'>
                <h1 className="text-xl font-bold mt-6">Title</h1>
                <p>{researches.title}</p>
                
                <h1 className="text-xl font-bold mt-6">Category</h1>
                <p>{category[0].category}</p>
                
                <h1 className="text-xl font-bold mt-6">Body</h1>
                <p>{researches.body}</p>
                
                <h1 className="text-xl font-bold mt-6">References</h1>
                <p>{researches.link}</p>
                
                <p className='mt-10'>作成者　{user[0].name}</p>
                
                <Button variant="outlined" size='small' onClick={() => setShow()}
                >Modify</Button>
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