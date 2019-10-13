import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UsersTable from './UsersTable';
import BooksTable from './BooksTable';
import RentedBooks from './RentedBooksTable';
import RentingUsers from './RentingUsersTable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SetTabValue } from '../actions/tab';
import TabPanel from '../components/TabPanel';
import TestTable from './TestTable';

function mapStateToProps(state) {
    return {
        value: state.tab.value,
        users: state.users.users
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
          <Tab label="Test Table" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={props.value} index={0}>
        <UsersTable/>
      </TabPanel>
      <TabPanel value={props.value} index={1}>
        <RentingUsers/>
      </TabPanel>
      <TabPanel value={props.value} index={2}>
        <BooksTable/>
      </TabPanel>
      <TabPanel value={props.value} index={3}>
        <RentedBooks/>
      </TabPanel>
      <TabPanel value={props.value} index={4}>
        <TestTable users={props.users}/>
      </TabPanel>
    </div>
  );
}

export default connect(mapStateToProps)(withRouter(Menu))
