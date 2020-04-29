import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import WorkStepContainer from './containers/WorkStepContainer';
import { store } from './Redux/store';

ReactDOM.render(
   <Provider store={store}>
      <React.StrictMode>
         <WorkStepContainer />
      </React.StrictMode>
   </Provider>,
  document.getElementById('root')
);

