import { withFormik } from 'formik';
import * as Yup from 'yup';
import RentForm from '../containers/RentForm';
import { RentBookRequest } from '../actions';

const EnhancedRentForm = withFormik({
    mapPropsToValues(){
        return {
            bookId: '',
            userId: '',
            fromDate: '',
            toDate: '',
        }
    },
    handleSubmit(values, { props }) {
        const rental = {
            bookId: values.bookId,
            userId: values.userId,
            fromDate: values.fromDate,
            toDate: values.toDate,
        }
        props.dispatch(RentBookRequest(rental, props.redirect))
    },
    validationSchema: Yup.object().shape({
        bookId: Yup.number().required(),
        userId: Yup.number().required(),
        fromDate: Yup.date().required(),
        toDate: Yup.date().required()
    })
})(RentForm)

export default EnhancedRentForm