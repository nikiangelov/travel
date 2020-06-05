import * as React from 'react';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import withApollo from '../../apollo/with-apollo';
import useI18n from '../../hooks/useI18n';
import NProgress from 'nprogress';
import { useEditUserMutation } from '../../graphql/mutations/user.graphql';
import {
  CurrentUserQuery,
  CurrentUserDocument,
  useCurrentUserQuery,
} from '../../graphql/queries/user.graphql';
import { imageUploadHandler } from '../../utils/image-uploader';

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

  const [userAvatarIsLoading, setUserAvatarIsLoading] = React.useState(false);

  const { data: userData } = useCurrentUserQuery();
  const { currentUser } = userData || {};

  const [userAvatar, setUserAvatar] = React.useState(currentUser?.avatar);
  const [editUserMutation, { loading: isEditLoading }] = useEditUserMutation();
  const [editSuccessMessage, setEditSuccessMessage] = React.useState(false);

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
  });
  const { firstName, lastName, email } = formData;

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
  const handleImageUpload = async () => {
    setUserAvatarIsLoading(true);
    setEditSuccessMessage(false);
    const uploadedImageUrl = await imageUploadHandler('avatars/');
    if (uploadedImageUrl) {
      setUserAvatar(uploadedImageUrl);
      await editUserMutation({
        variables: {
          id: currentUser?._id || '',
          user: {
            avatar: uploadedImageUrl,
          },
        },
      });
      setEditSuccessMessage(true);
      setTimeout(() => {
        setEditSuccessMessage(false);
      }, 3000);
    }
    setUserAvatarIsLoading(false);
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();
    NProgress.start();
    setEditSuccessMessage(false);
    editUserMutation({
      variables: {
        id: currentUser?._id || '',
        user: {
          firstName: firstName.value,
          lastName: lastName.value,
        },
      },
      update: (store, { data }) => {
        if (!data || !data.editUser) {
          return null;
        }
        store.writeQuery<CurrentUserQuery>({
          query: CurrentUserDocument,
          data: {
            __typename: 'Query',
            currentUser: data.editUser,
          },
        });
      },
    })
      .then(() => {
        setEditSuccessMessage(true);
        setTimeout(() => {
          setEditSuccessMessage(false);
        }, 3000);
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
          <div className="text-center mb-5">
            <h2>{i18n.t('pages.settings.title')}</h2>
          </div>
          <div className="white-card-elevated py-5 px-5 elevation-5">
            <form onSubmit={handleFormSubmit}>
              <div className="form-row mb-4 mt-n5">
                <div className="col-lg-3 col-md-4 mx-auto">
                  <div
                    className="uploadAvatarPlaceholder mt-n2 mb-2"
                    style={{
                      backgroundImage: userAvatar ? `url('${userAvatar}')` : '',
                    }}
                  >
                    <button
                      type="button"
                      onClick={handleImageUpload}
                      className="uploadAvatarButton"
                    >
                      {!!userAvatarIsLoading && (
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        />
                      )}
                      {!userAvatarIsLoading && !userAvatar && (
                        <i className="icon fas fa-camera" />
                      )}
                      {!userAvatarIsLoading && !!userAvatar && (
                        <i className="icon edit fas fa-camera text-white" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
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
              <hr />
              <div className="d-flex justify-content-between">
                <button
                  type="submit"
                  disabled={!!isEditLoading}
                  className="btn btn-primary text-white"
                >
                  {!!isEditLoading && (
                    <span
                      className="spinner-grow spinner-grow-sm mr-2"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                  {!isEditLoading && <i className="fas fa-pen mr-2" />}
                  {i18n.t('pages.settings.save-button')}
                </button>
                {!!editSuccessMessage && (
                  <span className="btn btn-link text-success">
                    <i className="far fa-check-circle mr-1" />
                    Готово
                  </span>
                )}
              </div>
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
