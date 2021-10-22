import React, { useContext, useState } from 'react';

import ApplicationContext from './application.context';
import useUx from '@/core/ux';

export const ApplicationProvider = ({ children, environment }) => {
  let applicationContext = useContext(ApplicationContext);
  const [shell, setShell] = useState(null);
  const ux = useUx();

  applicationContext = {
    environment,
    ux,
    shell,
    setShell,
  };

  return (
    <ApplicationContext.Provider value={applicationContext}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;
