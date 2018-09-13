import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router';
import {renderRoutes} from 'react-router-config'
import Routes from '../client/Routes';
import {Provider} from 'react-redux';
import serialize from 'serialize-javascript'

//renderre
export default (req, store) => {
    //console.log(store)
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
           <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    );

    return `
    <html>
       <head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css">
       <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/egopulse-react-infinite-calendar@1.1.18/styles.min.css">
       <base href="/" />       
       </head>
       <body>
         <div id="root">${content}</div>
         <script>
            window.INITIAL_STATE = ${serialize(store.getState())}
         </script>
         <script src="bundle.js"></script>
       </body>
      </html>
    `
}