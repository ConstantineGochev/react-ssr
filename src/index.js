import 'babel-polyfill';
import express from 'express';
import {matchRoutes} from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

//import { debug } from 'util';

const app = express();

app.use(express.static('public'));

app.get('*',(req, res)=>{
    
    
    const store = createStore();
    const promises = matchRoutes(Routes, req.path).map(({route, match})=>{
             // route.dispatch_id(store)
             if(route.load_data){
                 return route.load_data ? route.load_data(store) : null
             }else if(route.loadDataWithMatch){
                return route.loadDataWithMatch ?route.loadDataWithMatch(store, match) : null;
             }
           
    });
    Promise.all(promises).then(()=>{
        res.send(renderer(req, store))
        //console.log(store);
        
    }).catch((e)=>{
        console.log(e)
    });
    //console.log(promises)

})


app.listen(3000, ()=>{
    console.log('server stated on port 3000')
})
