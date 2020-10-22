import {Avatar, Card, Hidden, IconButton, Typography} from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import React from "react"
import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
  avatarSize: {
    height     : '5rem',
    marginRight: theme.spacing(5.25),
    width      : '5rem',
    [theme.breakpoints.down('sm')]: {
      height     : '2.5rem',
      marginRight: theme.spacing(1.25),
      width      : '2.5rem',
    }
  }
  ,fullUserName: {
    fontSize: '1.875rem'
    ,flexGrow: 1
    ,[theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem'
    }
  }
  , userCard : {
    alignItems: "center",
    background: theme.palette.primary.main,
    borderRadius: theme.spacing(1.25),
    color     : theme.palette.primary.contrastText,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2)
    }
  }
}))

export function UserCard({userFullName}) {
  const classes = useStyles()

  return (
    <Card className={classes.userCard}>

      <Avatar className={classes.avatarSize}/>

      <Typography variant='h1' className={classes.fullUserName}>
        {userFullName ?? 'Иванова Анна Михайловна'}
      </Typography>

      <div>
        <Hidden mdDown>
          <Typography>Редактировать</Typography>
        </Hidden>

        <IconButton color='inherit'>
          <EditIcon/>
        </IconButton>
      </div>

    </Card>
  )
}