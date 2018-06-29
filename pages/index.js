import React from 'react'
import Head from 'next/head';
import { times } from 'lodash';

export default () => 
  <div class="angie-wrapper">
    <Head>
      <title>Angie Page</title>
      <link rel="stylesheet" href="/static/angie.css" />
    </Head>
    {times(1000, number => (
      <img src="/static/angie.jpg" alt="Beautiful lady named Angie pictured with text 'Angie'" />)
    )}
  </div>