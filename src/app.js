const dhisDevConfig = DHIS_CONFIG; // eslint-disable-line

if (process.env.NODE_ENV !== 'production') {
    jQuery.ajaxSetup({ headers: { Authorization: dhisDevConfig.authorization } }); // eslint-disable-line
}

import React from 'react';
import { render } from 'react-dom';
import log from 'loglevel';
import { init, config, getManifest } from 'd2/lib/d2';

import LoadingMask from 'd2-ui/lib/loading-mask/LoadingMask.component';

import 'react-tap-event-plugin';

import App from './app/App';
import Main from './app/Main.jsx';
import './app/app.scss';

render(<LoadingMask />, document.getElementById('app'));

/**
 * Renders the application into the page.
 *
 * @param d2 Instance of the d2 library that is returned by the `init` function.
 */
function startApp(d2) {
    console.log(d2);
    render(<Main d2={d2} />, document.querySelector('#app'));
}


getManifest('./manifest.webapp')
    .then(manifest => {
        const baseUrl = process.env.NODE_ENV === 'production' ? manifest.getBaseUrl() : dhisDevConfig.baseUrl;
        config.baseUrl = `${baseUrl}/api`;
    })
    .then(init)
    .then(startApp)
    .catch(log.error.bind(log));
