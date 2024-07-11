import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { bookHorse } from '../action';
import './BookingForm.css';

const BookingSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
});

function BookingForm() {
  const dispatch = useDispatch();
  const horses = ['Horse 1', 'Horse 2', 'Horse 3', 'Horse 4'];

  return (
    <div className="booking-form">
      <h2>Book Your Horse Ride</h2>
      <Formik
        initialValues={{ name: '', email: '', phone: '', horse: '', date: '', time: '' }}
        validationSchema={BookingSchema}
        onSubmit={values => {
          dispatch(bookHorse(values));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field as="select" name="horse">
              <option value="" label="Select horse" />
              {horses.map(horse => (
                <option key={horse} value={horse}>
                  {horse}
                </option>
              ))}
            </Field>
            <Field type="date" name="date" />
            <Field type="time" name="time" />
            <Field name="name" placeholder="Name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field name="email" placeholder="Email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="phone" placeholder="Phone" />
            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BookingForm;