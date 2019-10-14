import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BooksTable from '../components/BooksTable';
import RentedBooksTable from '../components/RentedBooksTable';
import RentingUsersTable from '../components/RentingUsersTable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SetTabValue } from '../actions/tab';
import TabPanel from '../components/TabPanel';
import UsersTable from '../components/UsersTable'
import { UpdateUsersRequest, UpdateBooksRequest, UpdateRentedBooksRequest, UpdateRentingUsersRequest } from '../actions/index';

function mapStateToProps(state) {
    return {
        value: state.tab.value,
        users: state.users.users,
        books: state.books.books,
        rentingUsers: state.users.renting,
        rentedBooks: state.books.rented
    }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Menu(props) {
  const classes = useStyles();

  useEffect(() => {
    props.dispatch(UpdateUsersRequest(props.history.push))
    props.dispatch(UpdateBooksRequest(props.history.push))
    props.dispatch(UpdateRentedBooksRequest(props.history.push))
    props.dispatch(UpdateRentingUsersRequest(props.history.push))
  },[])

  const handleChange = (event, newValue) => {
    props.dispatch(SetTabValue(newValue))
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={props.value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Users" {...a11yProps(0)} />
          <Tab label="Renting Users" {...a11yProps(1)} />
          <Tab label="Books" {...a11yProps(2)} />
          <Tab label="Rented Books" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={props.value} index={0}>
        <UsersTable users={props.users} dispatch={props.dispatch}/>
      </TabPanel>
      <TabPanel value={props.value} index={1}>
        <RentingUsersTable users={props.rentingUsers} dispatch={props.dispatch}/>
      </TabPanel>
      <TabPanel value={props.value} index={2}>
        <BooksTable books={props.books} dispatch={props.dispatch}/>
      </TabPanel>
      <TabPanel value={props.value} index={3}>
        <RentedBooksTable books={props.rentedBooks} dispatch={props.dispatch}/>
      </TabPanel>
    </div>
  );
}

export default connect(mapStateToProps)(withRouter(Menu))
