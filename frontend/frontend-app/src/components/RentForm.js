import React from 'react';
import { TextField, Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { RentBookRequest} from '../actions/index';

export default function RentForm(props) {

    const bookItems = props.books.map((book) => {
        return (
            <MenuItem value={book.id}>{book.title}</MenuItem>
        )
    })

    const userItems = props.users.map((user) => {
        return (
            <MenuItem value={user.id}>{user.firstName} {user.lastName}</MenuItem>
        )
    })

    const [bookId, setBookId] = React.useState('');
    const [userId, setUserId] = React.useState('');
    const [fromDate, setFromDate] = React.useState('');
    const [toDate, setToDate] = React.useState('');

    const handleBookId = event => {
        setBookId(event.target.value);
      };
    
    const handleUserId = event => {
        setUserId(event.target.value)
    }

    const handleFromDate = event => {
        setFromDate(event.target.value)
    }

    const handleToDate = event => {
        setToDate(event.target.value)
    }

      function handleSubmit(){
        const rental = {
            bookId: bookId,
            userId: userId,
            fromDate: fromDate,
            toDate: toDate
        }
        props.dispatch(RentBookRequest(rental, props.redirect))
        props.redirect('/')
    }

    return(
        <form onSubmit={handleSubmit}>
            <InputLabel htmlFor="book-helper">Book</InputLabel>
                <Select
                    fullWidth
                    value={bookId}
                    onChange={handleBookId}
                    inputProps={{
                    name: 'bookId',
                    id: 'book-helper',
                }}>
                {bookItems}
                </Select>
                <InputLabel htmlFor="user-helper">Users</InputLabel>
                <Select
                    fullWidth
                    value={userId}
                    onChange={handleUserId}
                    inputProps={{
                    name: 'userId',
                    id: 'user-helper',
                }}>
                {userItems}
                </Select>           
            <TextField
                id="fromDate"
                name="fromDate"
                label="From Date"
                type="datetime-local"
                value={fromDate}
                onChange={handleFromDate}
                InputLabelProps={{
                    shrink: true,
                  }}
                fullWidth
            />
            <TextField
                id="toDate"
                name="toDate"
                label="to Date"
                type="datetime-local"
                value={toDate}
                onChange={handleToDate}
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
