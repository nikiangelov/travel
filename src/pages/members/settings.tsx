import * as React from 'react';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import withApollo from '../../apollo/with-apollo';
import linkBuilder from '../../utils/link-builder';
import { useRouter } from 'next/router';
import { I18nContext } from '../../lib/i18n';
// import { privateRoute } from '../../hocs/privateRoute';

const SettingsPage: React.FunctionComponent = () => {
  const { activeLocale, locale: setLocale } = React.useContext(I18nContext);
  const router = useRouter();

  return (
    <AnimatedLayout>
      <h2>Hello somebody</h2>
      <h3>
        url: {linkBuilder('/members/profile?lang=de&user=2', activeLocale)}
      </h3>
      <h4>lang: {activeLocale}</h4>
      <button
        onClick={() => {
          setLocale('bg');
          router.replace('/');
        }}
        className="btn btn-success mr-3"
      >
        Bulgarian
      </button>
      <button
        onClick={() => {
          setLocale('en');
          router.replace('/index?lang=en');
        }}
        className="btn btn-success mr-3"
      >
        English
      </button>
    </AnimatedLayout>
  );
};

export default withApollo(SettingsPage, {
  protectedRoute: true,
});
