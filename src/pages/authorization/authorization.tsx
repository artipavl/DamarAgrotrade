import React, { FC } from 'react';
import Box from '../../components/Box/box';
import Title from '../../components/title/title';
import * as Yup from 'yup';
import { withFormik, FormikProps } from 'formik';
import {
  AuthorizationBox,
  Button,
  Input,
  RegForm,
  Text,
  TextOverflow,
  Label,
  Errors,
} from './authorization.style';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <RegForm>
      <Label>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          errors={touched.email && errors.email && errors.email}
        />
        {touched.email && errors.email && <Errors>{errors.email}</Errors>}
      </Label>

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

      <Button type="submit" disabled={isSubmitting}>
        Авторизація
      </Button>
    </RegForm>
  );
};

interface MyFormProps {}

const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      email: '',
      password: '',
    };
  },

  validationSchema: SignupSchema,

  handleSubmit: (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  },
})(InnerForm);

type AuthorizationProps = {};

const Authorization: FC<AuthorizationProps> = props => {
  return (
    <Box>
      <AuthorizationBox>
        <Title title={'Авторизація'} before after center />
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
      </AuthorizationBox>
    </Box>
  );
};

export default Authorization;
