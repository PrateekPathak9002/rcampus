import * as React from 'react';
import { Grid, TextField, FormControl, Button } from '@mui/material';
import { FormEvent, useState } from 'react';

export default function LoginPage() {

    const [enrno, setEnrno] = useState('');
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const isUsernameEmpty = enrno.trim() === '';

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement);
        const response = await fetch('/api/login', {
            method: 'POST',
            body: formData
        })
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <form onSubmit={handleSubmit} method='post'>
                    <FormControl>
                        <TextField
                            required
                            id="filled-required"
                            label="Enrollment No"
                            variant="filled"
                            sx={{minWidth: '300px',minHeight:'50px', mb: 2 }}
                            value={enrno}
                            onChange={(e) => { setEnrno(e.target.value);setSubmitDisabled(!(enrno.length > 12));}}
                            name='enrno'
                            color={(!isUsernameEmpty && (enrno.length > 12)) ? 'success' : 'error'}
                            helperText = {(!isUsernameEmpty && (enrno.length > 12)) ? '' : 'Please enter a valid enrollment number'}
                        />
                        <TextField
                            required
                            id="filled-password-input"
                            label="Password"
                            variant="filled"
                            type='password'
                            name='password'
                            sx={{ mb: 2 }}
                        />
                        <Button variant="contained" color="success" type='submit' disabled={submitDisabled}>
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </Grid>
        </Grid>

    );
}