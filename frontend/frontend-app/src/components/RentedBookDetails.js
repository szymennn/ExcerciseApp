import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, TableBody, TableHead, TableCell, TableRow, Paper, makeStyles } from '@material-ui/core';

function mapStateToProps(state){
    console.log(state)
    return {
        bookDetails: state.books.bookDetails
    }
}

const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });

function RentedBookDetails(props){
    const classes = useStyles();

    const userRentals = props.bookDetails.borrowHistory.map((borrow, index) => {
        let fromDate = new Date(borrow.fromDate)
        let toDate = new Date(borrow.toDate)
        return(
        <TableRow>
            <TableCell>{borrow.bookId}</TableCell>
            <TableCell>{fromDate.toDateString()}</TableCell>
            <TableCell>{toDate.toDateString()}</TableCell>
            <TableCell>{borrow.isReturned.toString()}</TableCell>
        </TableRow>
        )
    })

    return(
        <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
            <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Release Date</TableCell>
            <TableCell>ISBN</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Add Date</TableCell>
            <TableCell>Modified Date</TableCell>
            <TableCell>Book Genre Id</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell>{props.bookDetails.id}</TableCell>
            <TableCell>{props.bookDetails.author}</TableCell>
            <TableCell>{props.bookDetails.title}</TableCell>
            <TableCell>{props.bookDetails.releaseDate}</TableCell>
            <TableCell>{props.bookDetails.isbn}</TableCell>
            <TableCell>{props.bookDetails.count}</TableCell>
            <TableCell>{props.bookDetails.addDate}</TableCell>
            <TableCell>{props.bookDetails.modifiedDate}</TableCell>
            <TableCell>{props.bookDetails.bookGenreId}</TableCell>
            </TableRow>
        </TableBody>
     </Table>
             <Table>
             <TableHead>
                 <TableRow>
                 <TableCell>Book Id</TableCell>
                 <TableCell>From Date</TableCell>
                 <TableCell>To Date</TableCell>
                 <TableCell>Is Returned</TableCell>
                 </TableRow>
             </TableHead>
             <TableBody>
                 {userRentals}
             </TableBody>
          </Table>
          </Paper>
    )
}

export default connect(mapStateToProps)(withRouter(RentedBookDetails))