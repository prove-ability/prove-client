import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import RegisterTemplate from 'src/components/register/RegisterTemplate';

interface IAppProps {}

const RegisterPage: React.FC<IAppProps> = () => {
  return (
    <RegisterTemplate>
      <Helmet>
        <title>회원가입</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      {/* <RegisterFormContainer /> */}
    </RegisterTemplate>
  );
};

export default RegisterPage;

// tsrsfc
