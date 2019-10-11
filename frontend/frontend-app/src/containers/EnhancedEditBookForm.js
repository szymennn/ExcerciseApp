import { withFormik } from 'formik';
import * as Yup from 'yup';
import BookForm from './BookForm';
import { EditBook } from '../actions';

const EnhancedEditBookForm = withFormik({
    mapPropsToValues(props){
        console.log(props)
        return {
            author: props.book.author || '',
            title: props.book.title || '',
            isbn: props.book.isbn || '',
            count: props.book.count || '',
            bookGenreId: props.book.bookGenreId || '',
            releaseDate: props.book.releaseDate || '',
            addDate: props.book.addDate || '',
            modifiedDate: props.book.modifiedDate || '',
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
        props.dispatch(EditBook(book, props.id, props.redirect))
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

export default EnhancedEditBookForm