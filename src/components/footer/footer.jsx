import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
  Typography
} from '@material-ui/core';
import { withNamespaces } from 'react-i18next';
import { colors } from '../../theme'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DescriptionIcon from '@material-ui/icons/Description';
import BuildIcon from '@material-ui/icons/Build';

import BuiltWithModal from '../builtwith/builtwithModal.jsx'

const styles = theme => ({
  footer: {
    padding: '24px',
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    background: colors.white,
    border: '1px solid '+colors.borderGrey,
    borderBottom: 'none',
    marginTop: '48px',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
    }
  },
  heading: {
    marginBottom: '12px',
    paddingBottom: '9px',
    borderBottom: "3px solid "+colors.borderGrey,
    width: 'fit-content',
    marginLeft: '30px'
  },
  link: {
    paddingBottom: '12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  icon: {
    fill: colors.borderGrey,
    marginRight: '6px'
  },
  yearnIcon: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  builtWith:{
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  builtWithLink: {
    paddingTop: '12px'
  },
  builtHeading: {
    marginBottom: '12px',
    paddingBottom: '9px',
    borderBottom: "3px solid "+colors.borderGrey,
    width: 'fit-content',
  },
  products: {
    padding: '0px 24px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '24px'
    }
  },
  community: {
    padding: '0px 24px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '24px'
    }
  },
  socials: {
    padding: '0px 24px'
  }
});


class Footer extends Component {

  constructor(props) {
    super()

    this.state = {
      modalBuiltWithOpen: false,
    }
  }

  render() {
    const { classes, location } = this.props;
    const {
      modalBuiltWithOpen
    } = this.state

    if(location.pathname === '' || location.pathname === '/') {
      return null
    }

    return (
      <div className={classes.footer}>
        <div className={ classes.builtWith }>
          <Typography className={ classes.builtHeading } variant={ 'h6'}>AmpleSense DAO</Typography>
          <img
            alt=""
            src={ require('../../assets/AmpleSense-logo.jpg') }
            height={ '120px' }
          />
          <div  className={ `${classes.link} ${classes.builtWithLink}` } onClick={ () => { this.builtWithOverlayClicked() } } >
            <BuildIcon height='15px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Built with</Typography>
          </div>
        </div>
        <div className={ classes.products }>
          <Typography className={ classes.heading } variant={ 'h6'}>Products</Typography>
          <div  className={ classes.link } onClick={()=> window.open("https://yearn.finance", "_blank")} >
            <AttachMoneyIcon height='15px' className={ classes.icon } />
            <Typography variant={ 'h4'} >AmpleSense DAO</Typography>
          </div>
        </div>
        <div className={ classes.community }>
          <Typography className={ classes.heading } variant={ 'h6'}>Community</Typography>
          <div  className={ classes.link } onClick={()=> window.open("https://ycosystem.info", "_blank")} >
            <DescriptionIcon height='15px' className={ classes.icon } />
            <Typography variant={ 'h4'} >ycosystem.info</Typography>
          </div>
        </div>
        <div className={ classes.socials }>
          <div  className={ classes.link } onClick={()=> window.open("https://medium.com/iearn", "_blank")} >
            <img alt="" src={ require('../../assets/medium.svg') } height='24px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Medium</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://discord.gg/GcjxhWR", "_blank")} >
            <img alt="" src={ require('../../assets/discord.svg') } height='24px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Discord</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://t.me/yearnfinance", "_blank")} >
            <img alt="" src={ require('../../assets/telegram.svg') } height='24px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Telegram</Typography>
          </div>
          <div  className={ classes.link } onClick={()=> window.open("https://github.com/iearn-finance", "_blank")} >
            <img alt="" src={ require('../../assets/github.svg') } height='24px' className={ classes.icon } />
            <Typography variant={ 'h4'} >Github</Typography>
          </div>
        </div>
        { modalBuiltWithOpen && this.renderBuiltWithModal() }
      </div>
    )
  }

  renderBuiltWithModal = () => {
    return (
      <BuiltWithModal closeModal={ this.closeBuiltWithModal } modalOpen={ this.state.modalBuiltWithOpen } />
    )
  }

  builtWithOverlayClicked = () => {
    this.setState({ modalBuiltWithOpen: true })
  }

  closeBuiltWithModal = () => {
    this.setState({ modalBuiltWithOpen: false })
  }
}

export default withNamespaces()(withRouter(withStyles(styles)(Footer)));
