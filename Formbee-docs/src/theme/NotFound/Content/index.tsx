import React, { useEffect } from 'react';

import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function NotFoundContent({className}: Props): JSX.Element {
    useEffect(() => {
      // Redirect to the intro page (adjust the path as necessary)
      window.location.href = '/docs';
    }, []);
  
    return (
      <div>
        <h1>Page Not Found. Redirecting to Intro...</h1>
      </div>
    );
}