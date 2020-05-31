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
  useCurrentUserQuery,
} from '../../graphql/queries/user.graphql';

type InputField = {
  value: string;
  errors: string[];
};
type FormDataState = {
  [key: string]: InputField;
};
// TODO: not finished
const SettingsPage: React.FunctionComponent = () => {
  const i18n = useI18n();
  const router = useRouter();

  const { data: userData } = useCurrentUserQuery();
  const { currentUser } = userData || {};

  const [
    registerUserMutation,
    { loading: isLoading },
  ] = useRegisterUserMutation();
  const [formData, setFormData] = React.useState<FormDataState>({
    firstName: {
      value: currentUser?.firstName || '',
      errors: [],
    },
    lastName: {
      value: currentUser?.lastName || '',
      errors: [],
    },
    email: {
      value: currentUser?.email || '',
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
          <div className="white-card-elevated py-5 px-5 elevation-5">
            <div className="d-flex">
              <div className="flex-grow-1">
                <h2>{i18n.t('pages.register.title')}</h2>
                <p className="text-muted">
                  {i18n.t('pages.register.description')}
                </p>
              </div>
              <img
                src={require('../../assets/illustrations/backpack2.svg')}
                className="card-illustration mt-1 mb-4 ml-2"
                alt="Write illustration"
              />
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="col-md-6">
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
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="lastNameInput">
                      {i18n.t('common.lastName')}
                    </label>
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
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">{i18n.t('common.email')}</label>
                <input
                  type="email"
                  value={email.value}
                  className="form-control"
                  id="emailInput"
                  autoComplete="username"
                  disabled={true}
                />
                {!!email.errors &&
                  email.errors.map((error, index) => (
                    <div
                      key={`emailError${index}`}
                      className="invalid-feedback"
                    >
                      {i18n.t(`errors.forms.${error}`)}
                    </div>
                  ))}
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">
                  {i18n.t('common.password')}
                </label>
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
              <button
                type="submit"
                disabled={!!isLoading}
                className="btn btn-primary text-white"
              >
                {!!isLoading && (
                  <span
                    className="spinner-grow spinner-grow-sm mr-2"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                {!isLoading && <i className="fas fa-sign-in-alt mr-2" />}
                {i18n.t('pages.register.register-button')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default withApollo(SettingsPage, {
  protectedRoute: true,
});
