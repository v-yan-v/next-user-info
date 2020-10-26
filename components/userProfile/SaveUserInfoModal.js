import Modal from "@material-ui/core/Modal"
import Paper from "@material-ui/core/Paper"
import {makeStyles} from "@material-ui/core/styles"
import {Button, Grid, Hidden, IconButton, Typography} from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import {UPDATE_INFO_FAIL, UPDATE_INFO_SUCCESS} from "../../flux/userProfile/types"

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius : theme.spacing(4.5),
    padding      : '1rem 1.625rem',
    textTransform: 'none',
    minWidth     : '200px'
  },
    iconBtn: {
      position: 'absolute',
      right   : '0.5rem',
      top     : '0.5rem'
    },
    paper  : {
      borderRadius: theme.spacing(1.25),
      left        : '50%',
      padding     : theme.spacing(6),
      position    : "absolute",
      top         : '30%',
      transform   : 'translate(-50%, -50%)',
      width       : '600px',
      [theme.breakpoints.down("xs")]: {
        borderRadius: theme.spacing(3) + 'px ' + theme.spacing(3) + 'px 0 0',
        bottom: 0,
        left: 0,
        padding: theme.spacing(2),
        top: 'unset',
        transform: "unset",
        right: 0,
        width: 'auto',
      }
    },
    title: {
    marginBottom: theme.spacing(4)
    }
  })
)

export function SaveUserInfoModal ({onSubmit, onCancel, isOpen, actionResult, setEditingUserInfo}) {
  const classes = useStyles()

  const handleCloseEditing = () => {
    if (actionResult) {
      setEditingUserInfo(false)
    }
    else {
      onCancel()
    }
  }

  return (
    <Modal
      open={isOpen}
      onClose={handleCloseEditing}
      aria-labelledby="Confirm save user info"
      aria-describedby="Confirm save user info"
    >
      <Paper className={classes.paper}>

        <Typography gutterBottom variant={'h5'} component={'p'} align='center' className={classes.title} >
          {actionResult === '' ? 'Сохранить изменения?' : ''}
          {actionResult === UPDATE_INFO_FAIL ? 'Ошибка сохранения данных. Попробуйте позже.' : ''}
          {actionResult === UPDATE_INFO_SUCCESS ? 'Данные успешно сохранены' : ''}
        </Typography>

          <Grid container direction='column' spacing={4} alignItems='center'>
            {
              actionResult === '' ?
                <Grid item>
                  <Button className={classes.button} variant='contained' color='secondary' onClick={onSubmit}
                          type='submit'>Сохранить</Button>
                </Grid>
                : ''
            }

          <Grid item >
            {
              actionResult === '' ?
              <Button className={classes.button} variant='outlined' color='secondary' onClick={handleCloseEditing} >Не сохранять</Button>
              :
              <Button className={classes.button} variant='contained' color='secondary' onClick={handleCloseEditing} >Хорошо</Button>
            }

          </Grid>
        </Grid>

        <Hidden smDown >
          {actionResult === '' ?
            <IconButton className={classes.iconBtn} onClick={onCancel}>
              <CloseIcon/>
            </IconButton>
            : ''
          }
        </Hidden>
      </Paper>
    </Modal>
  )
}

