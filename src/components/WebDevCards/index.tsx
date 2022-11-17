/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const WebDevCards = [
  {
    name: 'v12 Open Source',
    url: {
      page: 'https://github.com/botpress/botpress/',
      name: 'Go to GitHub Repository',
    },
    description:
      'Install Botpress v12 using our Open Source code',
  },
  {
    name: 'Botpress SDK',
    url: {
      page: 'https://botpress.com/reference/',
      name: 'Go to Botpress SDK',
    },
    description: 'Understand code architecture used in Botpress',
  },
  {
    name: 'Botpress Learning Center',
    url: {
      page: 'https://learn.botpress.com/',
      name: 'Go to Botpress Learning Center',
    },
    description:
      'Understand Botpress & Conversational AI Concepts for becoming a good Chatbot Developer',
  },
  {
    name: 'Botpress Blogs',
    url: {
      page: 'https://botpress.com/blog',
      name: 'Go to Botpress Blogs',
    },
    description:
      'Essays, opinions, and advice on the act of computer programming from Botpress',
  },

  {
    name: 'Botpress Solutions',
    url: {
      page: 'https://github.com/botpress/solutions',
      name: 'Go to Botpress Solutions',
    },
    description:
      ' List of Botpress templates / examples for common problems. Kick start your chatbot development with these ready-to-go custom modules, actions, hooks, and tools!',
  },

  {
    name: 'Get Support from the Community',
    url: {
      page: 'https://github.com/botpress/botpress/discussions',
      name: 'Go to Github Community',
    },
    description:
      'We have an active community helping each other succeed with Botpress. Most of our team is also helping on a best effort basis to make sure you get a great experience.',
  },
  {
    name: 'Botpress Youtube Channel',
    url: {
      page: 'https://www.youtube.com/c/Botpress',
      name: 'Go to Botpress Youtube Channel',
    },
    description:
      'Youtube playlists for building botpress chatbots',
  },

  

];

interface Props {
  name: string;
  image: string;
  url: {
    page?: string;
    codepen?: string;
  };
  description: JSX.Element;
}

function WebDevCard({ name, url, description }: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link to={url.page}>
              {url.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebDevCardSingle({ name, url, description }: Props) {
  return (
    <div className="col col--12 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className="card__body">
          <h3 style={{ textAlign: "center" }}>Download Botpress v12 Binaries</h3>
          <p style={{ textAlign: "center" }}>If you are an Enterprise customer or looking to deploy Botpress on your own infrastructure.
            <br />By downloading, you are agreeing to our <a href='https://botpress.com/privacy'>privacy policy</a> and to our <a href='https://botpress.com/terms'>terms of service</a>.</p>
        </div>
        <div className="card__footer">
          <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    ><div className='row'>
    <div className="button-group button-group--block padding-horiz--md">
      <Link to="https://s3.amazonaws.com/botpress-binaries/botpress-v12_30_5-darwin-x64.zip">
        Mac
      </Link>
    </div><div className="button-group button-group--block padding-horiz--md">
      <Link to="https://s3.amazonaws.com/botpress-binaries/botpress-v12_30_5-win-x64.zip">
        Windows
      </Link>
    </div><div className="button-group button-group--block padding-horiz--md">
      <Link to="https://s3.amazonaws.com/botpress-binaries/botpress-v12_30_5-linux-x64.zip">
        Linux
      </Link>
    </div>

    </div>
    
    </div>
          
        </div>
      </div>
    </div>
  );
}

export function WebDevCardsRow(): JSX.Element {
  return (
    <div className="row">
      <WebDevCardSingle />
      {WebDevCards.map((special) => (
        <WebDevCard key={special.name} {...special} />
      ))}
    </div>
  );
}
