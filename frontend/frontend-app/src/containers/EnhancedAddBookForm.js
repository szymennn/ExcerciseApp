import { withFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import BookForm from './BookForm';

const EnhancedAddBookForm = withFormik({
    mapPropsToValues(props){
        return {
            author: '',
            title: '',
            isbn: '',
            count: '',
            bookGenreId: '',
            releaseDate: '',
            addDate: '',
            modifiedDate: '',
        }
    },
    handleSubmit(values, { props }) {
        const book = {
            author: values.author,
            title: values.title,
            isbn: values.isbn,
            count: values.count,
            bookGenreId: values.bookGenreId,
            releaseDate: values.releaseDate,
            addDate: values.addDate,
            modifiedDate: values.modifiedDate,
        }
        props.dispatch()
    },
    validationSchema: Yup.object().shape({
        author: Yup.string().required(),
        title: Yup.string().required(),
        isbn: Yup.string().required(),
        count: Yup.number().required(),
        bookGenreId: Yup.number().required(),
        releaseDate: Yup.date().required(),
        addDate: Yup.date().required(),
        modifiedDate: Yup.date().required(),
    })
})(BookForm)

export default EnhancedAddBookForm