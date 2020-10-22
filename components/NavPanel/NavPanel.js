import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {NotificationsNoneOutlined} from '@material-ui/icons';
import {Breadcrumbs, Container, Hidden} from "@material-ui/core"
import Link from "@material-ui/core/Link"
import Avatar from "@material-ui/core/Avatar"
import Head from "next/head"

const useStyles = makeStyles((theme) => ({
  root         : {
    flexGrow: 1
  },
  menuButton   : {
    marginRight: theme.spacing(2)
  },
  toolbar      : {
    alignItems   : 'flex-start',
    background   : 'transparent',
    color        : '#fff',
    minHeight    : 128,
    paddingTop   : theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title        : {
    alignSelf: 'flex-end',
    flexGrow : 1,
    "& > h2" : {
      fontSize  : "1.125rem",
      [theme.breakpoints.down('sm')]: {
        fontSize: '.875rem'
      }
    }
  },
  userControls : {
    display   : "flex",
    alignItems: "center"
  }
  , separator  : {
    height       : "2.5rem"
    , width      : "1px"
    , background : "#fff"
    , [theme.breakpoints.down('sm')]: {
      height: '1.5rem'
    }
  }
  , breadcrumbs: {
    fontSize     : "0.875rem"
    , [theme.breakpoints.down('sm')]: {
      fontSize: '.75rem'
    }
  }
  , fullName   : {
    fontSize     : '.875rem'
    , [theme.breakpoints.down('sm')]: {
      fontSize: '.75rem'
    }
  }
  , avatar     : {
    height       : '2.5rem'
    , width      : '2.5rem'
    , [theme.breakpoints.down('sm')]: {
      height : '1.5rem'
      , width: '1.5rem'
    }
  }
  , iconSize   : {
    fontSize     : '2.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    }
  }
}));

export default function ProminentAppBar({currentPageTitle, userFullName, avatarImgSrc}) {
  const classes = useStyles();

  return (
  <>
    <Head >
      <title>{currentPageTitle ?? 'Личный профиль'}</title>
    </Head>

    <Container >

      <div className={classes.root}>
        <AppBar position="static" elevation='0' color='transparent' >
          <Toolbar className={classes.toolbar} disableGutters={true}>

            <div className={classes.title}>
              <Typography  variant="button" component='h2' noWrap>
                {(currentPageTitle ?? 'Личный профиль')}
              </Typography>

              <Breadcrumbs color="inherit" aria-label="breadcrumb" className={classes.breadcrumbs}>
                <Link href="/" color='inherit'>
                  Главная
                </Link>

                <Typography className={classes.breadcrumbs} >
                  {currentPageTitle ?? 'Личный профиль'}
                </Typography>

              </Breadcrumbs>
            </div>

            <div className={classes.userControls}>

              <IconButton aria-label="none notifications" color="inherit">
                <NotificationsNoneOutlined className={classes.iconSize} />
              </IconButton>

              <div className={classes.separator}></div>


              <div>
                <IconButton aria-label="profile menu" color="inherit" >
                  <Avatar alt={userFullName} src={avatarImgSrc} className={classes.avatar}/>
                </IconButton>

                <Hidden smDown >
                  <Typography variant='caption' className={classes.fullName}>
                    {userFullName ?? 'Иванова А.'}
                  </Typography>
                </Hidden>

              </div>

            </div>

          </Toolbar>
        </AppBar>
      </div>
    </Container>
  </>
  );
}
