import React from 'react';
import { TextField, Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { RentBookRequest} from '../actions/index';

export default function RentForm(props) {
    const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props

    const bookItems = props.books.map((book) => {
        return (
            <MenuItem value={book.Id}>{book.title}</MenuItem>
        )
    })

    const userItems = props.users.map((user) => {
        return (
            <MenuItem value={user.Id}>{user.firstName} {user.lastName}</MenuItem>
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
                fullWidth
                value={bookId}
                onChange={handleBookId}
                inputProps={{
                name: 'bookId',
                id: 'book-simple',
                }}
            >
            {bookItems}
            </Select>
            <InputLabel htmlFor="user-simple">Users</InputLabel>
            <Select
                fullWidth
                value={userId}
                onChange={handleUserId}
                inputProps={{
                name: 'userId',
                id: 'user-simple',
                }}
            >
            {userItems}
            </Select>              */}
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
