import auth0 from "auth0-js";

export const webAuth = new auth0.WebAuth({
  domain: "kutz-tutorial.us.auth0.com",
  clientID: "mPw3aO42fNGZQ3v9gvZ6bLGo0ORcJf0J",
  responseType: "token id_token",
  redirectUri: `${window.location.origin}/authorize`,
});

export const otpStart = ({ email }) => {
  return new Promise((resolve, reject) => {
    const variables = { email, connection: "email", send: "code" };
    webAuth.passwordlessStart(variables, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

export const otpLogin = ({ email, otp }) => {
  return new Promise((resolve, reject) => {
    webAuth.passwordlessLogin(
      { email, connection: "email", verificationCode: otp },
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

export const logout = () => {
  webAuth.logout({
    returnTo: `${window.location.origin}`,
    clientID: "mPw3aO42fNGZQ3v9gvZ6bLGo0ORcJf0J",
  });
};
