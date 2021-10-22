import React, { useContext, useEffect, useRef, useState } from 'react';
import useClickAway from 'react-use/lib/useClickAway';

import ApplicationContext from '@/context';

import { LANGUAGES } from '@ovh-ux/manager-config';
import { MESSAGES } from './constants';

import LanguageButton from './language/button.jsx';
import LanguageList from './language/list.jsx';

function LanguageMenu() {
  const ref = useRef();

  const shellI18n = useContext(ApplicationContext)?.shell?.i18n();

  const [show, setShow] = useState(false);
  const [userLocale, setUserLocale] = useState(shellI18n?.getLocale());

  const handleRootClose = () => setShow(false);

  useClickAway(ref, handleRootClose);

  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [availableLanguages, setAvailableLanguages] = useState([]);

  useEffect(() => {
    setCurrentLanguage(
      shellI18n?.getAvailableLocales().find(({ key }) => key === userLocale),
    );

    setAvailableLanguages(
      shellI18n?.getAvailableLocales().filter(({ key }) => key !== userLocale),
    );

    shellI18n.setLocale(userLocale);
  }, [userLocale]);

  if (!currentLanguage && availableLanguages.length === 0) {
    return <div></div>;
  }

  return (
    <div className="oui-navbar-dropdown" ref={ref}>
      <LanguageButton show={show} onClick={(nextShow) => setShow(nextShow)}>
        {currentLanguage.name}
      </LanguageButton>
      <LanguageList
        languages={availableLanguages}
        onSelect={(locale) => setUserLocale(locale)}
      ></LanguageList>
    </div>
  );
}

export default LanguageMenu;
