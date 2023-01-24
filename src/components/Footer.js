/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './navigation/NavSvg';
import { useTranslation } from 'react-i18next';

export default function Footer({ setDirection }) {
  const { t, i18n } = useTranslation('common');

  return (
    <div className="container px-20 flex flex-wrap justify-between w-full gap-5 items-center py-10 ">
      <div className="flex gap-10">
        <Logo />
        <div className="home text-sky-700">
          {' '}
          <Link to="/">{t('Home')}</Link>
        </div>
        <div className="home text-sky-700">
          {' '}
          <Link to="about">{t('about')}</Link>
        </div>
        <div className="home text-sky-700">
          {' '}
          <Link to="contact">{t('Contact')}</Link>
        </div>
        <div className="home text-sky-700">
          {' '}
          <Link to="blog">{t('Blog')}</Link>
        </div>
      </div>

      <div className="container2 gap-10 flex justify-end content-end mr-10">
        <button
          onClick={() => {
            i18n.changeLanguage('en');
            setDirection('ltr');
          }}
          type="button"
          className="language py-2 px-4 bg-sky-700 text-white font-roboto rounded-3xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-1/2/6"
        >
          {' '}
          {t('English')}
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage('ar');
            setDirection('rtl');
          }}
          type="button"
          className="language py-2 px-4 bg-sky-700 text-white font-roboto rounded-3xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-1/2/6"
        >
          {' '}
          {t('Arabic')}
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage('ku');
            setDirection('rtl');
          }}
          type="button"
          className="language py-2 px-4 bg-sky-700 text-white font-roboto rounded-3xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-1/2/6"
        >
          {' '}
          {t('Kurdish')}
        </button>
      </div>
    </div>
  );
}
