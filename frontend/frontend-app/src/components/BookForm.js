import React from 'react';
import { TextField, Button } from '@material-ui/core';

export default function UserForm(props) {
    const { values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset } = props

    return(
        <form onSubmit={handleSubmit}>
            <TextField
                id="author"
                name="author"
                label="Author"
                value={values.author}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.author && touched.author) && errors.author}
                fullWidth
             />
            <TextField
                id="title"
                name="title"
                label="Title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.title && touched.title) && errors.title}                
                fullWidth
             />
            <TextField
                error={errors.isbn && touched.isbn}
                id="isbn"
                name="isbn"
                label="ISBN"
                value={values.isbn}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.isbn && touched.isbn) && errors.isbn}                     
                fullWidth
            />
            <TextField
                error={errors.count && touched.count}
                id="count"
                name="count"
                label="Count"
                value={values.count}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.count && touched.count) && errors.count}                      
                fullWidth
            />
            <TextField
                error={errors.bookGenre && touched.bookGenre}
                id="bookGenre"
                name="bookGenre"
                label="bookGenre"
                value={values.bookGenreId}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.bookGenre && touched.bookGenre) && errors.bookGenre} 
                InputLabelProps={{
                    shrink: true,
                  }}
                fullWidth
            />
            <TextField
                error={errors.releaseDate && touched.releaseDate}
                id="releaseDate"
                name="releaseDate"
                label="Release Date"
                type="datetime-local"
                value={values.releaseDate}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.releaseDate && touched.releaseDate) && errors.releaseDate} 
                InputLabelProps={{
                    shrink: true,
                  }}
                fullWidth
            />
            <TextField
                error={errors.addDate && touched.addDate}
                id="addDate"
                name="addDate"
                label="Add Date"
                type="datetime-local"
                value={values.addDate}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.addDate && touched.addDate) && errors.addDate} 
                InputLabelProps={{
                    shrink: true,
                  }}
                fullWidth
            />
            <TextField
                error={errors.modifiedDate && touched.modifiedDate}
                id="modifiedDate"
                name="modifiedDate"
                label="Modified Date"
                type="datetime-local"
                value={values.modifiedDate}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.modifiedDate && touched.modifiedDate) && errors.modifiedDate} 
                InputLabelProps={{
                    shrink: true,
                  }}
                fullWidth
            />            
            <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary">
                Submit
            </Button>
        </form>
    )
}
