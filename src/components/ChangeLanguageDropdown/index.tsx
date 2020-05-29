import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import useI18n from '../../hooks/useI18n';
import { useRouter } from 'next/router';

const ChangeLanguageDropdown = () => {
  const i18n = useI18n();
  const { activeLocale, locale: setLocale } = i18n;
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="btn-sm btn-light" caret>
        {!!activeLocale && activeLocale === 'bg' && (
          <span className="flag-icon flag-icon-bg" />
        )}
        {!!activeLocale && activeLocale === 'en' && (
          <span className="flag-icon flag-icon-us" />
        )}
      </DropdownToggle>
      <DropdownMenu style={{ zIndex: 1030 }}>
        <DropdownItem header>{i18n.t('common.select-language')}</DropdownItem>
        <DropdownItem
          onClick={() => {
            setLocale('bg');
            router.replace('/');
          }}
          className="mb-2"
        >
          <span className="flag-icon flag-icon-bg mr-2" />
          <span>{i18n.t('common.bulgarian')}</span>
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            setLocale('en');
            router.replace('/index?lang=en');
          }}
          className="mb-2"
        >
          <span className="flag-icon flag-icon-us mr-2" />
          <span>English</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ChangeLanguageDropdown;
