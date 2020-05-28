import * as React from 'react';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import { useRouter } from 'next/router';
import withApollo from '../../apollo/with-apollo';
import { setAccessToken } from '../../utils/auth';
import useI18n from '../../hooks/useI18n';
import NProgress from 'nprogress';
import { useRegisterUserMutation } from '../../graphql/mutations/user.graphql';
import {
  CurrentUserQuery,
  CurrentUserDocument,
} from '../../graphql/queries/user.graphql';

type InputField = {
  value: string;
  errors: string[];
};
type FormDataState = {
  [key: string]: InputField;
};

const RegisterPage: React.FunctionComponent = () => {
  const i18n = useI18n();
  const router = useRouter();
  const [registerUserMutation] = useRegisterUserMutation();
  const [formData, setFormData] = React.useState<FormDataState>({
    firstName: {
      value: '',
      errors: [],
    },
    lastName: {
      value: '',
      errors: [],
    },
    email: {
      value: '',
      errors: [],
    },
    password: {
      value: '',
      errors: [],
    },
    passwordConfirm: {
      value: '',
      errors: [],
    },
  });
  const { firstName, lastName, email, password, passwordConfirm } = formData;

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const updateField = {
      ...formData[fieldName],
      value: e.target.value,
      errors: [],
    };
    const newFormData = { ...formData, [fieldName]: updateField };
    setFormData(newFormData);
  };
  const clearErrors = () => {
    const newFormData = { ...formData };
    Object.keys(formData).forEach(key => {
      newFormData[key] = { ...newFormData[key], errors: [] };
    });
    setFormData(newFormData);
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();
    NProgress.start();
    registerUserMutation({
      variables: {
        user: {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value,
          passwordConfirm: passwordConfirm.value,
        },
      },
      update: (store, { data }) => {
        if (!data || !data.registerUser) {
          return null;
        }
        store.writeQuery<CurrentUserQuery>({
          query: CurrentUserDocument,
          data: {
            __typename: 'Query',
            currentUser: data.registerUser.user,
          },
        });
      },
    })
      .then(({ data }) => {
        if (data && data.registerUser && data.registerUser.accessToken) {
          setAccessToken(data.registerUser.accessToken);
          router.push('/');
        }
      })
      .catch(({ graphQLErrors }) => {
        const { validationErrors } = graphQLErrors[0];
        if (validationErrors) {
          const errorKeys = Object.keys(validationErrors);
          const errorValues: Array<string[]> = Object.values(validationErrors);
          const newFormData = { ...formData };
          errorKeys.forEach((key, index) => {
            newFormData[key].errors = errorValues[index];
          });
          setFormData(newFormData);
        }
      })
      .finally(() => {
        NProgress.done();
      });
  };
  return (
    <AnimatedLayout>
      <div className="row">
        <div className="col-md-5 mx-auto">
          <h2>{i18n.t('pages.register.title')}</h2>
          <p className="text-muted">{i18n.t('pages.register.description')}</p>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="firstNameInput">
                {i18n.t('common.firstName')}
              </label>
              <input
                type="text"
                name="firstName"
                value={firstName.value}
                onChange={updateFormData}
                className={`form-control ${firstName.errors.length &&
                  'is-invalid'}`}
                id="firstNameInput"
              />
              {!!firstName.errors &&
                firstName.errors.map((error, index) => (
                  <div
                    key={`firstNameError${index}`}
                    className="invalid-feedback"
                  >
                    {i18n.t(`errors.forms.${error}`)}
                  </div>
                ))}
            </div>
            <div className="form-group">
              <label htmlFor="lastNameInput">{i18n.t('common.lastName')}</label>
              <input
                type="text"
                name="lastName"
                value={lastName.value}
                onChange={updateFormData}
                className={`form-control ${lastName.errors.length &&
                  'is-invalid'}`}
                id="lastNameInput"
              />
              {!!lastName.errors &&
                lastName.errors.map((error, index) => (
                  <div
                    key={`lastNameError${index}`}
                    className="invalid-feedback"
                  >
                    {i18n.t(`errors.forms.${error}`)}
                  </div>
                ))}
            </div>
            <div className="form-group">
              <label htmlFor="emailInput">{i18n.t('common.email')}</label>
              <input
                type="email"
                name="email"
                value={email.value}
                onChange={updateFormData}
                className={`form-control ${email.errors.length &&
                  'is-invalid'}`}
                id="emailInput"
                autoComplete="username"
              />
              {!!email.errors &&
                email.errors.map((error, index) => (
                  <div key={`emailError${index}`} className="invalid-feedback">
                    {i18n.t(`errors.forms.${error}`)}
                  </div>
                ))}
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">{i18n.t('common.password')}</label>
              <input
                type="password"
                name="password"
                value={password.value}
                onChange={updateFormData}
                className={`form-control ${password.errors.length &&
                  'is-invalid'}`}
                id="passwordInput"
                autoComplete="new-password"
              />
              {!!password.errors &&
                password.errors.map((error, index) => (
                  <div
                    key={`passwordError${index}`}
                    className="invalid-feedback"
                  >
                    {i18n.t(`errors.forms.${error}`)}
                  </div>
                ))}
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirmInput">
                {i18n.t('common.passwordConfirm')}
              </label>
              <input
                type="password"
                name="passwordConfirm"
                value={passwordConfirm.value}
                onChange={updateFormData}
                className={`form-control ${passwordConfirm.errors.length &&
                  'is-invalid'}`}
                id="passwordConfirmInput"
                autoComplete="new-password"
              />
              {!!passwordConfirm.errors &&
                passwordConfirm.errors.map((error, index) => (
                  <div
                    key={`passwordConfirmError${index}`}
                    className="invalid-feedback"
                  >
                    {i18n.t(`errors.forms.${error}`)}
                  </div>
                ))}
            </div>
            <button type="submit" className="btn btn-primary text-white">
              {i18n.t('pages.register.register-button')}
            </button>
          </form>
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default withApollo(RegisterPage);
