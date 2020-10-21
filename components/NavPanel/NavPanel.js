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
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    alignItems: 'flex-start',
    background: 'transparent',
    color: '#fff',
    minHeight: 128,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    alignSelf: 'flex-end',
    flexGrow: 1,
    "& > h6": {
      fontSize: "18px"
    }
  },
  userControls: {
    display: "flex",
    alignItems: "center",
  }
  ,separator: {
    height: "40px"
    ,width: "1px"
    ,background: "#fff"
  }
  ,breadcrumbs: {
    fontSize: "14px"
  }
  ,fullName: {
    fontSize: '14px'
  }
}));

export default function ProminentAppBar({currentPageTitle, userFullName}) {
  const classes = useStyles();

  return (
  <>
    <Head >
      <title>{currentPageTitle ?? 'Личный профиль'}</title>
    </Head>

    <Container >

      <div className={classes.root}>
        <AppBar position="static" elevation='0' color='transparent'>
          <Toolbar className={classes.toolbar}>

            <div className={classes.title}>
              <Typography  variant="h6" noWrap>
                {(currentPageTitle ?? 'Личный профиль').toUpperCase()}
              </Typography>

              <Breadcrumbs color="inherit" aria-label="breadcrumb" className={classes.breadcrumbs}>
                <Link href="/" color='inherit'>
                  Главная
                </Link>

                <Typography >
                  {currentPageTitle ?? 'Личный профиль'}
                </Typography>

              </Breadcrumbs>
            </div>

            <div className={classes.userControls}>

              <IconButton aria-label="none notifications" color="inherit">
                <NotificationsNoneOutlined fontSize='large' />
              </IconButton>

              <div className={classes.separator}></div>


              <div>
                <IconButton aria-label="profile menu" color="inherit" >
                  <Avatar alt="" src="/static/images/avatar/3.jpg" />

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
