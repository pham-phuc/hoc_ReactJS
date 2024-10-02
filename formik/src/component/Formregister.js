import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
function Formregister() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      password: "",
      ConfirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "your name must be at least 5 character")
        .max(25, "your name must be under 25 character")
        .required("You must fill in this section!"),
      email: Yup.string()
        .email("Invalid Email")
        .required("You must fill in this section!"),
      address: Yup.string().required("You must fill in this section!"),
      password: Yup.string()
        .min(8, "your password must be at least 8 characters!")
        .required("You must fill in this section!"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "password that not match")
        .required("You must fill in this section!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="m-5">
      <h2 className="font-bold text-xl my-2">Register Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>Name: </label> <br />
        <input
          className="p-2 border w-60 my-5"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name && (
          <p className="text-red-600">*{formik.errors.name}</p>
        )}
        <br />
        <label className="w-30">Email: </label> <br />
        <input
          className="p-2 border w-60 my-5"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="text-red-600">*{formik.errors.email}</p>
        )}
        <br />
        <label>Address: </label> <br />
        <input
          className="p-2 border w-60 my-5"
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        {formik.errors.address && formik.touched.address && (
          <p className="text-red-600">*{formik.errors.address}</p>
        )}
        <br />
        <label>Password: </label> <br />
        <input
          className="p-2 border w-60 my-5"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && formik.touched.password && (
          <p className="text-red-600">*{formik.errors.password}</p>
        )}
        <br />
        <label>Confirm Password: </label> <br />
        <input
          className="p-2 border w-60 my-5"
          type="password"
          name="ConfirmPassword"
          value={formik.values.ConfirmPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.ConfirmPassword && formik.touched.ConfirmPassword && (
          <p className="text-red-600">*{formik.errors.ConfirmPassword}</p>
        )}
        <br />
        <input className="border p-3 w-20 bg-cyan-500" type="submit" name="Submit Form" />
      </form>
    </div>
  );
}

export default Formregister;
