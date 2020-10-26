import {Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"
import PhoneIcon from "@material-ui/icons/Phone"
import React from "react"
import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
  iconSize: {
    height: '1.875rem',
    width: '1.875rem',
    [theme.breakpoints.down('sm')]: {
      height: '1.25rem',
      width: '1.25rem',
    }
  }
  ,userInfoList: {
    fontSize: '1.125rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.85rem'
    }
  }
  ,userInfoListIcon: {
    marginLeft: theme.spacing(7),
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    }
  }
  ,userInfoListItem: {
    padding: theme.spacing(2)
  }
}))

export function UserInfo ({userEmail, userPhone}) {
  const classes = useStyles()

  {/* тут нужно мапить все нужные поля в список */}
  return (
      <List>
        <ListItem className={classes.userInfoListItem}>
          <ListItemIcon className={classes.userInfoListIcon}>
            <AlternateEmailIcon  className={classes.iconSize} color='secondary'/>
          </ListItemIcon>
          <ListItemText>{userEmail ?? 'user@domain.com'}</ListItemText>
        </ListItem>

        <Divider/>

        <ListItem className={classes.userInfoListItem}>
          <ListItemIcon className={classes.userInfoListIcon}>
            <PhoneIcon className={classes.iconSize} color='secondary'/>
          </ListItemIcon>
          <ListItemText>{userPhone ?? '987-234-5454'}</ListItemText>
        </ListItem>
      </List>
  )
}