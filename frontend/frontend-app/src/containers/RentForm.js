import React from 'react';
import { TextField, Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';

export default function RentForm(props) {
    const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props

    const bookOptions = props.books.map((book) => {
        return (
            <option value={book.id}>{book.title}</option>
        )
    })  

    const userOptions = props.users.map((user) => {
        return (
            <option value={user.id}>{user.firstName} {user.lastName}</option>
        )
    })

    return(
        <form onSubmit={handleSubmit}>
            <TextField
                error={errors.bookId && touched.bookId}
                id="bookId"
                name="bookId"
                label="Book Id"
                value={values.bookId}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.bookId && touched.bookId) && errors.bookId}
                fullWidth
             />
            {/* <Select
            native
            value=''
            inputProps={{
                name: 'name',
                id: 'id'
            }}
            >
            {bookOptions}
            </Select>
            <Select
            native
            value=''
            inputProps={{
                name: 'name',
                id: 'id'
            }}
            >
            {userOptions}
            </Select>
        */}
            {<TextField
                error={errors.userId && touched.userId}
                id="userId"
                name="userId"
                label="User Id"
                value={values.userId}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.userId && touched.userId) && errors.userId}                
                fullWidth
             />}
            <TextField
                error={errors.fromDate && touched.fromDate}
                id="fromDate"
                name="fromDate"
                label="From Date"
                type="datetime-local"
                value={values.fromDate}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.fromDate && touched.fromDate) && errors.fromDate} 
                InputLabelProps={{
                    shrink: true,
                  }}
                fullWidth
            />
            <TextField
                error={errors.toDate && touched.toDate}
                id="toDate"
                name="toDate"
                label="to Date"
                type="datetime-local"
                value={values.toDate}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.toDate && touched.toDate) && errors.toDate} 
                InputLabelProps={{
                    shrink: true,
                  }}
                fullWidth
            />            
            <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary">
                Submit
            </Button>
        </form>
    )
}
