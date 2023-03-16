import React, { useCallback } from 'react';
import { useForm } from '@inertiajs/react';
import Header from '@/Components/Header';
import Dividers from '@/Components/Dividers';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Category({auth, study, categories}) {
    
    //Survey Registration
    const { data, setData, post } = useForm({
        category:'',
        comment: '',
    });
    
    
    //Getting input values
    const sCategory = useCallback((e, value) =>{
        setData('category', e.target.value);
    });
    const sComment = useCallback((e, value) =>{
        setData('comment', e.target.value);
    });

    //post
    const submit = () =>{
        post(`/createcategory/${study.id}`);
    };
    
    const { delete: destory } = useForm();
    const handleDelete = (id) => {
        if( id == categories[0].id ){
            alert('"NONE" cannot be deleted.');
        }else{
            if(confirm("If you delete it, you can't restore it. Are you sure you want to delete it?")){
                destory(route("delete.category", id), {
                    preserveScroll: true,
                });
            }
        }
    };
    
    return(
        <>
            <Header>Category</Header>
            
            <div className='w-4/5 mx-auto my-10'>
                <h1 className="text-xl font-bold mt-6">CreateCategories</h1>
                <h1 className="text-xl mt-4">Category</h1>
                <TextField onChange={(e) => sCategory(e)}/>
                
                <h1 className="text-xl mt-6">Comment</h1>
                <TextField fullWidth onChange={(e) => sComment(e)}/>
                <Button variant="contained" onClick={() => submit()}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >SAVE</Button>
            </div>
            
            <div className='w-4/5 mx-auto my-10'>
                <h1 className="text-xl font-bold mt-6">Categories</h1>
                <Dividers categories={categories} handleDelete={handleDelete}></Dividers>
            </div>
            
            <div className='w-4/5 mx-auto my-10'>
                <Button className='w-4/5' variant="outlined" size='small' href={'/open/' + study.id}
                >BACK</Button>
            </div>
        </>
        );
}