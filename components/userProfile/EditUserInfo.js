import TextField from "@material-ui/core/TextField"
import {Button, Grid, Hidden} from "@material-ui/core"
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import {makeStyles} from "@material-ui/core/styles"
import {useFormik} from "formik"

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
    '& .MuiFormHelperText-root' : {
      position: 'absolute',
      top: '100%',
    }
  }
}))

export function EditUserInfo () {
  const classes = useStyles()

  const validate = values => {
    let errors = {}

    if (!values.userFullName) {
      errors.userFullName = 'Обязательно введите Имя'
    }
    else if (!/[А-ЯЁа-яё\s]+/.test(values.userFullName)){
      errors.userFullName = 'Разрешены только буквы русского алфавита'
    }

    if (!values.email) {
      errors.email = 'Обязательно укажите email'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Введён некорректный адрес почты'
    }

    if (!values.phone) {
      errors.phone = 'Обязательно укажите номер телефона'
    }

    return errors
  }

  const formik = useFormik({
  initialValues: {
    email: '',
    phone: '',
    userFullName: '',
  },
  validate,
  onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })


  return (
    <form style={{padding: '3rem 1rem'}} onSubmit={formik.handleSubmit}>
      <Grid container spacing={6} md={12} alignItems="flex-start" justify="space-between" className={classes.root}>

        <Grid container  item lg={4} sm={12} spacing={3} alignItems='center' justify='space-around' wrap='nowrap' >
          <Hidden smDown >
            <Grid item xs={1}>
              <AssignmentIndIcon color='secondary' className={classes.iconSize} />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={10}>
            <TextField
              className={classes.textField}
              variant='outlined'
              label='Фамилия Имя Отчество'
              placeholder='Введите ФИО'
              name='userFullName'
              fullWidth
              InputLabelProps={{shrink: true}}
              value={formik.values.userFullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.userFullName && formik.errors.userFullName}
              error={Boolean(formik.touched.userFullName && formik.errors.userFullName)}
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
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.email && formik.errors.email}
              error={Boolean(formik.touched.email && formik.errors.email)}
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
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.phone && formik.errors.phone}
              error={Boolean(formik.touched.phone && formik.errors.phone)}
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