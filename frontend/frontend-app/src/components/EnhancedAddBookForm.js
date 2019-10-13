import { withFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import BookForm from './BookForm';
import { AddBook } from '../actions';

const EnhancedAddBookForm = withFormik({
    mapPropsToValues(props){
        return {
            author: '',
            title: '',
            isbn: '',
            count: '',
            bookGenre: '',
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
            bookGenre: values.bookGenre,
            releaseDate: values.releaseDate,
            addDate: values.addDate,
            modifiedDate: values.modifiedDate,
        }
        props.dispatch(AddBook(book))
        props.redirect('/')
    },
    validationSchema: Yup.object().shape({
        author: Yup.string().required(),
        title: Yup.string().required(),
        isbn: Yup.string().required(),
        count: Yup.number().required(),
        bookGenre: Yup.string().required(),
        releaseDate: Yup.date().required(),
        addDate: Yup.date().required(),
        modifiedDate: Yup.date().required(),
    })
})(BookForm)

export default EnhancedAddBookForm