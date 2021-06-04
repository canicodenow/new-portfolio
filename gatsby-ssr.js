import React from 'react';
import './src/styles/Global.css';
import '@fontsource/rubik';
import '@fontsource/nunito';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
