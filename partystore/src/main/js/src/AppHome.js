import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

import 'font-awesome/css/font-awesome.min.css';
import Steps from './Steps.js';
import TabbedView from './TabbedView.js';
import {DrinkDefaultView} from './DrinkDefaultView.js';
import {OtherStuffView} from './OtherStuffView.js';
import {CartDefaultView} from './CartDefaultView.js';
import partyGif from './party.gif';

const drawerWidth = 260;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,


  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  grow: {
    flexGrow: 1,
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

  Badge: {
    height: '19px',
    widht: '28px',
  },

});

class AppHome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedKey:"CAKE",
      cartNumber: 0
    };
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.changeCartNumber = this.changeCartNumber.bind(this);
  }

  changeCartNumber(e){
      this.setState({
        cartNumber: this.state.cartNumber + 1
      });
  }

  handleListItemClick(e, index){
    console.log(index);
    this.setState({
        selectedKey:index
    });
  }

  handleLogout(e){
    this.props.history.push('/logout');
  }

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar style={{opacity:1,backgroundImage: `url(${partyGif})`}}>
            <Typography variant="h6" color="inherit" noWrap>
              Party Store
            </Typography>

            <div className={classes.grow} />
            <div style={{paddingRight:'4%'}} className={classes.sectionDesktop}>
              <a><i color="inherit" style={{align:'center'}} className="fa fa-user fa-lg"></i></a>
              <a>&nbsp; {this.props.userName}</a>
            </div>
            <div style={{paddingRight:'7%'}} className={classes.sectionDesktop}>
              <a href="/logout" style={{color:'white', textDecoration:'none'}}>
                <i type="submit" style={{align:'center'}} className="fa fa-power-off fa-lg"></i>
                &nbsp; Logout
              </a>
            </div>


          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItem selected={this.state.selectedKey === "CAKE"} onClick = {event => this.handleListItemClick(event, "CAKE")} button key="CAKE">
              <ListItemIcon><i className="fa fa-birthday-cake fa-lg"></i></ListItemIcon>
              <ListItemText primary="Cake" />
            </ListItem>
            <ListItem selected={this.state.selectedKey === "T_SHIRT"} onClick = {event => this.handleListItemClick(event, "T_SHIRT")} button key="T_SHIRT">
              <ListItemIcon><i className="fa fa-snowflake-o fa-lg"></i></ListItemIcon>
              <ListItemText primary="T Shirt" />
            </ListItem>
            <ListItem button key="DRINK" selected={this.state.selectedKey === "DRINK"} onClick = {event => this.handleListItemClick(event, "DRINK")}>
              <ListItemIcon><i className="fa fa-glass fa-lg"></i></ListItemIcon>
              <ListItemText primary="Drinks" />
            </ListItem>
            <ListItem button key="OTHER_STUFF" selected={this.state.selectedKey === "OTHER_STUFF"} onClick = {event => this.handleListItemClick(event, "OTHER_STUFF")}>
              <ListItemIcon><i className="fa fa-cube fa-lg"></i></ListItemIcon>
              <ListItemText primary="Other Stuff" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="CART" selected={this.state.selectedKey === "CART"} onClick = {event => this.handleListItemClick(event, "CART")}>
              <Badge badgeContent={this.state.cartNumber} color="secondary">
              <ListItemIcon><i className="fa fa-shopping-cart fa-lg"></i></ListItemIcon>
              </Badge>
              <ListItemText primary="CART" />
            </ListItem>
            <ListItem button key="ORDER_HISTORY" selected={this.state.selectedKey === "ORDER_HISTORY"} onClick = {event => this.handleListItemClick(event, "ORDER_HISTORY")}>
              <ListItemIcon><i className="fa fa-shopping-bag fa-lg"></i></ListItemIcon>
              <ListItemText primary="Order History" />
            </ListItem>
            <ListItem button key="PROFILE" selected={this.state.selectedKey === "PROFILE"} onClick = {event => this.handleListItemClick(event, "PROFILE")}>
              <ListItemIcon><i className="fa fa-user-o fa-lg"></i></ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="ABOUT_US" selected={this.state.selectedKey === "ABOUT_US"} onClick = {event => this.handleListItemClick(event, "ABOUT_US")}>
              <ListItemIcon><i className="fa fa-info fa-lg"></i></ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button key="CONTACT_US" selected={this.state.selectedKey === "CONTACT_US"} onClick = {event => this.handleListItemClick(event, "CONTACT_US")}>
              <ListItemIcon><i className="fa fa-phone fa-lg"></i></ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {['CAKE','T_SHIRT'].includes(this.state.selectedKey) ? <TabbedView onCartValueChange={this.changeCartNumber} selectedKey={this.state.selectedKey} /> : undefined}
{ ['DRINK'].includes(this.state.selectedKey) ? <DrinkDefaultView onCartValueChange={this.changeCartNumber} selectedKey={this.state.selectedKey} /> : undefined}
{ ['OTHER_STUFF'].includes(this.state.selectedKey) ? <OtherStuffView onCartValueChange={this.changeCartNumber} selectedKey={this.state.selectedKey} /> : undefined}
{ ['CART'].includes(this.state.selectedKey) ? <CartDefaultView onCartValueChange={this.changeCartNumber} selectedKey={this.state.selectedKey} /> : undefined}
        </main>
      </div>
    );
  }
}

AppHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHome);
