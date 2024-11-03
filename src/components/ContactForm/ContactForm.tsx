"use client";

import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { useState } from "react";
import { contactsInfo } from "@/src/data/contactsInfo";
import styles from "./ContactForm.module.sass";
import { FormItem } from "@/src/components/FormItem/FormItem";
import { useTranslations } from "next-intl";
import { Button } from "@/src/components/Button/Button";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

type FormikErrorType = {
  name?: string;
  subject?: string;
  email?: string;
  message?: string;
};

export const ContactForm = () => {
  const t = useTranslations("Contact.form");
  const tErrors = useTranslations("Contact.form.errors");
  const tPlaceholders = useTranslations("Contact.form.placeholders");
  const [isSend, setIsSend] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },
    validate: (values): FormikErrorType => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = tErrors("emailRequired")
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = tErrors("emailInvalid")
      }

      if (!values.name.trim()) {
        errors.name = tErrors("nameRequired")
      }
      if (!values.subject.trim()) {
        errors.subject = tErrors("subjectRequired")
      }
      if (!values.message.trim()) {
        errors.message = tErrors("messageRequired")
      } else if (values.message.trim().length < 10) {
        errors.message = tErrors("messageIsShort")
      }

      return errors;
    },
    onSubmit: (formData) => {
      emailjs
        .send(contactsInfo.emailJs.serviceId, contactsInfo.emailJs.templateId, formData, {
          publicKey: contactsInfo.emailJs.pubKey,
        })
        .then(() => {
          console.log("SUCCESS!");
          // functions for check mark in wrapperBtn
          setIsSend(true);
          setTimeout(() => setIsSend(false), 3000);
          formik.resetForm()
        })
        .catch((err) => console.log("FAILED...", err));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} method={"post"} className={styles.form}>
      <FormItem
        id={"name"}
        placeholder={tPlaceholders('name')}
        type={"text"}
        isError={formik.touched.name && !!formik.errors.name}
        errorText={formik.errors.name}

        {...formik.getFieldProps('name')}
      />
      <FormItem
        id={"subject"}
        placeholder={tPlaceholders('subject')}
        type={"text"}
        isError={formik.touched.subject && !!formik.errors.subject}
        errorText={formik.errors.subject}

        {...formik.getFieldProps('subject')}
      />
      <FormItem
        id={"email"}
        placeholder={tPlaceholders('email')}
        type={"email"}
        isError={formik.touched.email && !!formik.errors.email}
        errorText={formik.errors.email}

        {...formik.getFieldProps('email')}
      />
      <FormItem
        as={'textarea'}
        id={"message"}
        placeholder={tPlaceholders('message')}
        type={"text"}
        isError={formik.touched.message && !!formik.errors.message}
        errorText={formik.errors.message}

        {...formik.getFieldProps('message')}
      />
        <Button name={"send message"} type={"submit"} className={`${styles.submitButton} ${isSend ? styles.isSend : ''}`}>
          <IoCheckmarkDoneOutline/>
          {t("buttonSubmit")}
        </Button>
    </form>
  );
};
