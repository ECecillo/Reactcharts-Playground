import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button } from '@material-ui/core';

const ExampleForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.message) {
          errors.message = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // submit the form to your server here
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            name="name"
            render={({ field, form }) => (
              <TextField
                {...field}
                label="Name"
                margin="normal"
                fullWidth
                error={form.errors.name && form.touched.name}
              />
            )}
          />
          <ErrorMessage name="name" component="div" />
          <Field
            name="email"
            render={({ field, form }) => (
              <TextField
                {...field}
                label="Email"
                margin="normal"
                fullWidth
                error={form.errors.email && form.touched.email}
              />
            )}
          />
          <ErrorMessage name="email" component="div" />
          <Field
            name="message"
            render={({ field, form }) => (
              <TextField
                {...field}
                label="Message"
                margin="normal"
                fullWidth
                multiline
                rows="4"
                error={form.errors.message && form.touched.message}
              />
            )}
          />
          <ErrorMessage name="message" component="div" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ExampleForm;
