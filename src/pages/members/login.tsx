import * as React from 'react';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import withApollo from '../../apollo/with-apollo';
import { useLoginUserMutation } from '../../graphql/mutations/user.graphql';

const LoginPage: React.FunctionComponent = () => {
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [loginUserMutation] = useLoginUserMutation();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      userEmail,
      userPassword,
    });

    loginUserMutation({
      variables: {
        email: `${userEmail}`,
        password: `${userPassword}`,
      },
    })
      .then(response => {
        console.log(
          '%cresponse',
          'background-color:green; color: white;',
          response,
        );
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <AnimatedLayout>
      <h1>Login Page</h1>
      <p>Enter your details here</p>
      <hr />
      <div className="row">
        <div className="col-md-5">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default withApollo(LoginPage);
