import TextField from "@material-ui/core/TextField"
import {Button, Grid, Hidden} from "@material-ui/core"
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import {makeStyles} from "@material-ui/core/styles"
import {useState} from "react"

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: '36px',
    padding: '1rem 1.625rem',
    textTransform: 'none'
  },
  iconSize: {
    height: '1.875rem',
    width: '1.875rem'
  },
  root: {
    padding: theme.spacing(2)
  },
  separator: {
    background: theme.palette.primary.light,
    height: '6rem',
    width: '1px'
  },
  textField: {
    color: theme.palette.primary.light,
  }
}))

export function EditUserInfo () {
  const classes = useStyles()
  const [formData, setFormData] = useState({userFullName: null, email: null, phone: null})

  const handleInputChange = (evt) =>  {
    let name = evt.target.name
    let value = evt.target.value

    setFormData({...formData, [name]: value})
  }

  return (
    <form style={{padding: '1rem'}}>
      <Grid container spacing={3} md={12} justify="space-between" className={classes.root}>

        <Grid container  item lg={4} sm={12} spacing={3} alignItems='center' justify='space-around' wrap='nowrap' >
          <Hidden smDown >
            <Grid item xs={1}>
              <AssignmentIndIcon color='secondary' className={classes.iconSize} />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={10}>
            <TextField
              variant='outlined'
              label='Фамилия Имя Отчество'
              placeholder='Введите ФИО'
              name='userFullName'
              fullWidth
              InputLabelProps={{shrink: true}}
              value={formData.userFullName}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Hidden mdDown>
          <div className={classes.separator}></div>
        </Hidden>

        <Grid container  item lg={4} sm={12} spacing={3} alignItems='center' justify='space-around' wrap='nowrap' >
          <Hidden smDown >
            <Grid item xs={1}>
              <AlternateEmailIcon color='secondary' className={classes.iconSize} />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={10} >
            <TextField
              className={classes.textField}
              variant='outlined'
              label='email'
              name='email'
              placeholder='Введите email'
              fullWidth
              InputLabelProps={{shrink: true}}
              value={formData.email}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Hidden mdDown>
          <div className={classes.separator}></div>
        </Hidden>

        <Grid container item lg={4} sm={12} spacing={3} alignItems='center' justify='space-around' wrap='nowrap' >
          <Hidden smDown >
            <Grid item xs={1}>
              <PhoneIcon color='secondary' className={classes.iconSize} />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={10}>
            <TextField
              className={classes.textField}
              variant='outlined'
              label='Номер телефона'
              name='phone'
              placeholder='Введите телефон'
              fullWidth
              InputLabelProps={{shrink: true}}
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} container justify='center' >
          <Button  variant='contained' color='secondary' className={classes.button} >Сохранить изменения</Button>
        </Grid>

      </Grid>
    </form>
  )
}