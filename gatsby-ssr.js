import React from 'react';
import './src/styles/Global.css';
import '@fontsource/rubik';
import '@fontsource/nunito';
import Layout from './src/components/Layout.js';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
