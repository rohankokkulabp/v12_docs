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
      page: 'https://github.com/botpress/botpress/discussions',
      name: 'Go to GitHub repository',
    },
    description:
      'Install Botpress v12 using our Open Source code',
  },
  {
    name: 'Download Botpress v12',
    url: {
      page: 'https://github.com/botpress/botpress/discussions',
      name: 'Get the Botpress Binaries',
    },
    description:
      'Download Botpress Binaries as per your OS',
  },
  {
    name: 'Botpress SDK',
    url: {
      page: 'https://weatherbox.complabs.in',
      name: 'Go to Botpress SDK',
    },
    description: 'Botpress SDK to understand code architecture used to build Botpress',
  },
  {
    name: 'Botpress Learning Center',
    url: {
      page: 'https://github.com/botpress/botpress/discussions',
      name: 'Go to Botpress Learning Center',
    },
    description:
      'Understand Botpress & Conversational AI Concepts for becoming a good Chatbot Developer',
  },
  {
    name: 'Botpress Solutions',
    url: {
      page: 'https://github.com/botpress/botpress/discussions',
      name: 'Go to Botpress Solutions',
    },
    description:
      ' List of Botpress templates / examples for common problems. Kick start your chatbot development with these ready-to-go custom modules, actions, hooks, and tools!',
  },
 
  {
    name: 'Get Support from the Community',
    url: {
      page: 'https://github.com/botpress/botpress/discussions',
      name: 'Go to github community',
    },
    description:
      'We have an active community helping each other succeed with Botpress. Most of our team is also helping on a best effort basis to make sure you get a great experience.',
  },

  {
    name: 'Botpress Support Portal',
    url: {
      page: 'https://weatherbox.complabs.in',
      name: 'Go to Botpress Support Portal',
    },
    description:
      'Our Team will help you with problems you are facing.',
  },
  {
    name: 'Botpress Youtube Channel',
    url: {
      page: 'https://weatherbox.complabs.in',
      name: 'Go to Botpress Youtube Channel',
    },
    description:
      'Well curated playlist on making best of the best chatbots using botpress',
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

function WebDevCard({ name, image, url, description }: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={url.page}>
            <img src={image}></img>
          </Link>
        </div>
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

export function WebDevCardsRow(): JSX.Element {
  return (
    <div className="row">
      {WebDevCards.map((special) => (
        <WebDevCard key={special.name} {...special} />
      ))}
    </div>
  );
}
