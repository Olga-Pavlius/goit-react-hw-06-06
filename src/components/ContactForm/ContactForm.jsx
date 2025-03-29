import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { ErrorMessage } from "formik";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();
  const initialValues = {
    name: "",
    number: "",
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required!"),
    number: Yup.number().positive().integer().required("Required!"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(addContact({ ...values, id: nanoid() }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.formdiv}>
          <label htmlFor={nameId} className={css.label}>
            Name
          </label>
          <Field type="text" name="name" id={nameId} className={css.input} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.formdiv}>
          <label htmlFor={numberId} className={css.label}>
            Number
          </label>
          <Field
            type="number"
            name="number"
            className={css.input}
            id={numberId}
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;