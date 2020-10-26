import TextField from "@material-ui/core/TextField"
import {Button, Grid, Hidden} from "@material-ui/core"
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import {makeStyles} from "@material-ui/core/styles"
import {useFormik} from "formik"
import {SaveUserInfoModal} from "./SaveUserInfoModal"
import {useState} from "react"
import {UPDATE_INFO_FAIL, UPDATE_INFO_SUCCESS} from "../../flux/userProfile/types"

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: theme.spacing(4.5),
    padding: '1rem 1.625rem',
    textTransform: 'none',
    minWidth: '200px'
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

export function EditUserInfo ({setEditingUserInfo}) {
  const classes = useStyles()

  const [openModal, setOpenModal] = useState(false)
  const [thisForm, setThisForm] = useState(null)
  const [actionResult, setActionResult] = useState('')

  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const dispatchSubmit = () => {
    thisForm.dispatchEvent(new Event('submit', {cancelable: true}))
  }

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
      try {
        // в нормальном приложении тут будет вызов actionCreator
        localStorage.setItem('userData', JSON.stringify(values))
        setActionResult(UPDATE_INFO_SUCCESS)
      }
      catch (e) {
        console.error(e.message)
        setActionResult(UPDATE_INFO_FAIL)
      }
    }
  })


  return (
  <>

    <form style={{padding: '3rem 1rem'}} onSubmit={formik.handleSubmit} ref={thisNode => setThisForm(thisNode)}>
      <Grid container spacing={6}  alignItems="flex-start" justify="space-between" className={classes.root}>

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
          <Button
            type='button'
            variant='contained'
            color='secondary'
            className={classes.button}
            onClick={handleOpenModal}
            disabled={(Object.keys(formik.touched).length === 0) || (Object.keys(formik.errors).length !== 0)}
          >
            Сохранить изменения
          </Button>
        </Grid>

      </Grid>
    </form>

    <SaveUserInfoModal onSubmit={dispatchSubmit} onCancel={handleCloseModal} isOpen={openModal} actionResult={actionResult} setEditingUserInfo={setEditingUserInfo}/>
  </>
  )
}