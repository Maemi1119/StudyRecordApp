import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Link,router } from '@inertiajs/react';

export default function Header({ auth,children }) {
    return (
        <div className="bg-[#FFEBCD] h-24">
            <Grid container className="mt-6">
                <Grid xs={2} item className="pl-10">
                    <h1 className="text-4xl pl-10 leading-[96px] font-bold">{children}</h1>
                </Grid>
                
                <Grid xs={2} item className="absolute inset-y-11 right-10 w-36">
                    <Stack spacing={1}>
                        {auth.user ? (
                            <>
                                <Link href={route('profile.edit')}>EDIT ACCOUNT</Link>
                                <Link href={route('logout')} method="post">LOG OUT</Link>
                            </>
                        ) : (
                            <>
                                <Link href={route('login')}>LOG IN</Link>
                                <Link href={route('register')}>CREATE ACCOUNT</Link>
                            </>
                        )}
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
}