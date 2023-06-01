import React, { FC } from 'react';
import Box from '../../components/Box/box';
import Title from '../../components/title/title';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors } from 'formik';
import {
  RegistrationBox,
  Button,
  CheckBox,
  CheckDiv,
  FormHorizontalBox,
  Input,
  RegForm,
  Text,
  TextOverflow,
  Label,
  Errors,
  Accent,
} from './registration.style';

import Check from '../../img/check.png';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      'Invalid phone number'
    ),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirm: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  agree: Yup.boolean().required('Required'),
});

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirm: string;
  agree: boolean;
}

interface OtherProps {}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, values } = props;
  return (
    <RegForm>
      <FormHorizontalBox>
        <Label>
          <Input
            type="text"
            name="firstName"
            placeholder="Ім’я"
            errors={touched.firstName && errors.firstName && errors.firstName}
          />
          {touched.firstName && errors.firstName && (
            <Errors>{errors.firstName}</Errors>
          )}
        </Label>
        <Label>
          <Input
            name="lastName"
            placeholder="Прізвище"
            errors={touched.lastName && errors.lastName && errors.lastName}
          />
          {touched.lastName && errors.lastName && (
            <Errors>{errors.lastName}</Errors>
          )}
        </Label>
      </FormHorizontalBox>

      <FormHorizontalBox>
        <Label>
          <Input
            type="tel"
            name="phone"
            placeholder="Телефон"
            errors={touched.phone && errors.phone && errors.phone}
          />
          {touched.phone && errors.phone && <Errors>{errors.phone}</Errors>}
        </Label>
        <Label>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            errors={touched.email && errors.email && errors.email}
          />
          {touched.email && errors.email && <Errors>{errors.email}</Errors>}
        </Label>
      </FormHorizontalBox>
      <Label>
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          errors={touched.password && errors.password && errors.password}
        />
        {touched.password && errors.password && (
          <Errors>{errors.password}</Errors>
        )}
      </Label>

      <Label>
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="Підтвердити пароль"
          errors={
            touched.passwordConfirm &&
            errors.passwordConfirm &&
            errors.passwordConfirm
          }
        />
        {touched.passwordConfirm && errors.passwordConfirm && (
          <Errors>{errors.passwordConfirm}</Errors>
        )}
      </Label>

      <Label>
        <CheckBox
          type="checkbox"
          name="agree"
          errors={
            touched.passwordConfirm &&
            errors.passwordConfirm &&
            errors.passwordConfirm
          }
        />
        {touched.agree && errors.agree && <Errors>{errors.agree}</Errors>}
        <CheckDiv bg={Check} check={values.agree}>
          <p>
            я згоден на обробку і захист <Accent>персональних даних</Accent>
          </p>
        </CheckDiv>
      </Label>

      <Button type="submit" disabled={isSubmitting}>
        Зареєструватися
      </Button>
    </RegForm>
  );
};

interface MyFormProps {}

const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      passwordConfirm: '',
      agree: false,
    };
  },

  validate: values => {
    let errors: FormikErrors<FormValues> = {};
    if (values.password !== values.passwordConfirm) {
      errors.password = 'Паролі мають співпадати';
      errors.passwordConfirm = 'Паролі мають співпадати';
    }
    if (!values.agree) {
      errors.agree = 'Required';
    }
    return errors;
  },

  validationSchema: SignupSchema,

  handleSubmit: (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  },
})(InnerForm);

type RegistrationProps = {};

const Registration: FC<RegistrationProps> = props => {
  return (
    <Box>
      <RegistrationBox>
        <Title title={'Реєстрація'} before after center />
        <Text>
          Увійдіть, щоб використовувати всі можливості особистого кабінету
          <TextOverflow>
            : відстеження замовлень, налаштування передплати, зв'язки з
            соціальними мережами та інші. Ми ніколи і за жодних умов не
            розголошуємо особисті дані клієнтів. Контактна інформація буде
            використана тільки для оформлення замовлень та зручнішої роботи з
            сайтом
          </TextOverflow>
        </Text>
        <MyForm />
      </RegistrationBox>
    </Box>
  );
};

export default Registration;
