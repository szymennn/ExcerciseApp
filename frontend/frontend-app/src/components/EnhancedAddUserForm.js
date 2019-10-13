import { withFormik } from 'formik';
import * as Yup from 'yup';
import UserForm from './UserForm';
import { AddUser } from '../actions/users';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const EnhancedAddUserForm = withFormik({
    mapPropsToValues(){
        return {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            birthDate: '',
            addDate: '',
            modifiedDate: ''
        }
    },
    handleSubmit(values, { props }) {
        const user = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            birthDate: values.birthDate,
            addDate: values.addDate,
            modifiedDate: values.modifiedDate
        }
        props.dispatch(AddUser(user, props.redirect))
    },
    validationSchema: Yup.object().shape({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().email().required(),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not vald'),
        birthDate: Yup.date().required(),
        addDate: Yup.date().required(),
        modifiedDate: Yup.date().required()
    })
})(UserForm)

export default EnhancedAddUserForm