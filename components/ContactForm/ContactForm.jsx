// import css from "./ContactForm.module.css"

// export default function ContactForm ( ) {
//     return (
//         <form className={css.form}>
//             <div className={css.name}>
//                 <label>Name</label>
//                 <input type="text" />
//             </div>

//             <div className={css.number}>
//                 <label>Number</label>
//                 <input type="text" />
//             </div>
//             <button className={css.btn} type="submit">Add contact</button>
//         </form>
//     )
// }

// import { useFormik, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { nanoid } from "nanoid";
// import css from "./ContactForm.module.css";

// export default function ContactForm({ onAddContact }) {
//     const formik = useFormik({
//         initialValues: {
//             name: "",
//             number: "",
//         },
//         validationSchema: Yup.object({
//             name: Yup.string()
//                 .min(3, "Minimum 3 characters")
//                 .max(50, "Maximum 50 characters")
//                 .required("This field is required"),
//             number: Yup.string()
//                 .matches(/^\d{3}-\d{2}-\d{2}$/, "Format: 123-45-67")
//                 .required("Required"),
//         }),
//         onSubmit: (values, { resetForm }) => {
//             const newContact = {
//                 id: nanoid(),
//                 name: values.name,
//                 number: values.number,
//             };
//             onAddContact(newContact);
//             resetForm();
//         },
//     });

//     return (
//         <form className={css.form} onSubmit={formik.handleSubmit}>
//             <div className={css.name}>
//                 <label>Name</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formik.values.name}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.name && formik.errors.name && (
//                     <div className={css.error}>{formik.errors.name}</div>
//                 )}
//                 {/* <ErrorMessage name="name" /> */}
//             </div>

//             <div className={css.number}>
//                 <label>Number</label>
//                 <input
//                     type="text"
//                     name="number"
//                     value={formik.values.number}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.number && formik.errors.number && (
//                     <div className={css.error}>{formik.errors.number}</div>
//                 )}
//             </div>

//             <button className={css.btn} type="submit">Add contact</button>
//         </form>
//     );
// }

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Format: 123-45-67")
    .required("Required"),
});

export default function ContactForm({ onAddContact }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      validateOnChange={true} // Валідація при кожному вводі символу
      validateOnBlur={true} // Помилки залишаються після втрати фокусу
      onSubmit={(values, { resetForm }) => {
        onAddContact({ id: nanoid(), ...values });
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div className={css.name}>
            <label>Name</label>
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.number}>
            <label>Number</label>
            <Field type="text" name="number" className={css.input} />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>

          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}


