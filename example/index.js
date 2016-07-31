import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import decorator from '../';

ReactDOM.render(
    decorator(() => 'Little example'),
    document.getElementById('example')
);
