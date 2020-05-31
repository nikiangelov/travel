import * as React from 'react';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import withApollo from '../../apollo/with-apollo';
import { useLoginUserMutation } from '../../graphql/mutations/user.graphql';
import { setAccessToken } from '../../utils/auth';
import useI18n from '../../hooks/useI18n';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import {
  CurrentUserDocument,
  CurrentUserQuery,
} from '../../graphql/queries/user.graphql';
import constants from '../../constants';
import Link from 'next/link';
import linkBuilder from '../../utils/link-builder';

const LoginPage: React.FunctionComponent = () => {
  const i18n = useI18n();
  const { activeLocale } = i18n;
  const router = useRouter();

  const [loginErrors, setLoginErrors] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [loginUserMutation, { loading: isLoading }] = useLoginUserMutation();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginErrors(false);
    NProgress.start();
    loginUserMutation({
      variables: {
        email: `${userEmail}`,
        password: `${userPassword}`,
      },
      update: (store, { data }) => {
        if (!data || !data.loginUser) {
          return null;
        }
        store.writeQuery<CurrentUserQuery>({
          query: CurrentUserDocument,
          data: {
            __typename: 'Query',
            currentUser: data.loginUser.user,
          },
        });
      },
    })
      .then(({ data }) => {
        if (data && data.loginUser && data.loginUser.accessToken) {
          setAccessToken(data.loginUser.accessToken);
          if (activeLocale && activeLocale !== constants.defaultLanguage) {
            router.push(`/index?lang=${activeLocale}`);
          } else {
            router.push('/');
          }
        }
      })
      .catch(({ graphQLErrors }) => {
        const { validationErrors } = graphQLErrors[0];
        if (validationErrors) {
          setLoginErrors(true);
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
                <h2>{i18n.t('pages.login.title')}</h2>
                <p className="text-muted">
                  {i18n.t('pages.login.description')}
                </p>
              </div>
              <img
                src={require('../../assets/illustrations/backpack2.svg')}
                className="card-illustration mt-1 mb-4 ml-2"
                alt="Write illustration"
              />
            </div>
            {!!loginErrors && (
              <div className="alert alert-danger" role="alert">
                {i18n.t('errors.forms.wrong_email_and_password')}
              </div>
            )}
            <form onSubmit={handleFormSubmit} className="text-left pt-3">
              <div className="form-group">
                <label htmlFor="emailInput">{i18n.t('common.email')}</label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={e => setUserEmail(e.target.value)}
                  className={`form-control ${loginErrors && 'is-invalid'}`}
                  id="emailInput"
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">
                  {i18n.t('common.password')}
                </label>
                <input
                  type="password"
                  value={userPassword}
                  onChange={e => setUserPassword(e.target.value)}
                  className={`form-control ${loginErrors && 'is-invalid'}`}
                  id="passwordInput"
                />
              </div>
              <div className="d-flex">
                <button
                  type="submit"
                  className="btn btn-primary text-white mt-2"
                  disabled={!!isLoading}
                >
                  {!!isLoading && (
                    <span
                      className="spinner-grow spinner-grow-sm mr-2"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                  {!isLoading && <i className="fas fa-sign-in-alt mr-2" />}
                  {i18n.t('pages.login.login-button')}
                </button>
                <Link
                  href={linkBuilder('/members/register', i18n.activeLocale)}
                >
                  <a type="submit" className="btn btn-link ml-auto mt-2">
                    {i18n.t('pages.register.register-button')}
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default withApollo(LoginPage);
