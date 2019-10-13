import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

export default function UserForm(props) {
    const { values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset } = props

    return(
        <form onSubmit={handleSubmit}>
            <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.firstName && touched.firstName) && errors.firstName}
                fullWidth
             />
            <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.lastName && touched.lastName) && errors.lastName}                
                fullWidth
             />
            <TextField
                error={errors.email && touched.email}
                id="email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.email && touched.email) && errors.email}                     
                fullWidth
            />
            <TextField
                error={errors.phone && touched.phone}
                id="phone"
                name="phone"
                label="Phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.phone && touched.phone) && errors.phone}                      
                fullWidth
            />
            <TextField
                error={errors.birthDate && touched.birthDate}
                id="birthDate"
                name="birthDate"
                label="Birth Date"
                type="datetime-local"
                value={values.birthDate}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.birthDate && touched.birthDate) && errors.birthDate} 
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
