import React from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/styles/Navbar.css';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <a>{t('nav.homepage')}</a>
      <a>{t('nav.portfolio')}</a>
      <a>{t('nav.goodStories')}</a>
      <a>{t('nav.forFun')}</a>
      <a>{t('nav.vault')}</a>
      <a>{t('nav.about')}</a>

    </nav>
  );
};

export default Navbar;
