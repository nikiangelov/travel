import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import useI18n from '../../hooks/useI18n';
import { useRouter } from 'next/router';
import linkBuilder from '../../utils/link-builder';

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
            const loc = linkBuilder(window.location.href, 'bg', true);
            router.replace(loc);
          }}
          className="mb-2"
        >
          <span className="flag-icon flag-icon-bg mr-2" />
          <span>{i18n.t('common.bulgarian')}</span>
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            setLocale('en');
            const loc = linkBuilder(window.location.href, 'en');
            router.replace(loc);
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
