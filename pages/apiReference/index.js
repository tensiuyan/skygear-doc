import React from 'react';

import Header from '../../components/Header/Header';
import HeaderNav from '../../components/Header/Nav/Nav';
import TitleBar from '../../components/TitleBar/TitleBar';
import Footer from '../../components/Footer/Footer';

import guidesIcon from '../../static/images/icn-guides.svg';
import apiRefIcon from '../../static/images/icn-api-ref.svg';
import supportIcon from '../../static/images/icn-support.svg';

import './style.scss';

const ApiReferenceItem = ({url, title, titleClassName}) => (
  <a href={url} target="_blank">
    <div className="api-reference-item">
      <h2 className={titleClassName}>{title}</h2>
      <div className="right-arrow" />
    </div>
  </a>
);

const IosApiReferenceItem = (props) => {
  return ApiReferenceItem({
    ...props,
    titleClassName: 'ios-sdk'
  });
};

const AndroidApiReferenceItem = (props) => {
  return ApiReferenceItem({
    ...props,
    titleClassName: 'android-sdk'
  });
};

const JavascriptApiReferenceItem = (props) => {
  return ApiReferenceItem({
    ...props,
    titleClassName: 'js-sdk'
  });
};

export default () => (
  <div className="api-reference-page">
    <Header>
      <HeaderNav
        href="/guides/"
        img={guidesIcon}
        text="Guides"
      />
      <HeaderNav
        img={apiRefIcon}
        text="API reference"
        active
      />
      <HeaderNav
        href="/support/"
        img={supportIcon}
        text="Support"
      />
    </Header>
    <div className="api-reference-container">
      <div className="api-reference">
        <IosApiReferenceItem
          url="https://docs.skygear.io/ios/reference/"
          title="iOS SDK (User Auth, Push, Cloud DB, Pubsub)"
        />
        <AndroidApiReferenceItem
          url="https://docs.skygear.io/android/reference/"
          title="Android SDK (User Auth, Push, Cloud DB, Pubsub)"
        />
        <JavascriptApiReferenceItem
          url="https://doc.esdoc.org/github.com/skygeario/skygear-SDK-JS/"
          title="JavaScript SDK (User Auth, Push, Cloud DB, Pubsub)"
        />
        <IosApiReferenceItem
          url="http://cocoadocs.org/docsets/SKYKitChat/"
          title="iOS SDK (Chat)"
        />
        <AndroidApiReferenceItem
          url="https://docs.skygear.io/android/plugins/chat/reference/"
          title="Android SDK (Chat)"
        />
        <JavascriptApiReferenceItem
          url="https://doc.esdoc.org/github.com/skygeario/chat-SDK-JS/"
          title="JavaScript SDK (Chat)"
        />
        <JavascriptApiReferenceItem
          url="https://doc.esdoc.org/github.com/skygeario/skygear-SDK-JS/function/index.html"
          title="JS API Reference (Cloud Functions)"
        />
      </div>
      <Footer />
    </div>
  </div>
);
