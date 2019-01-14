import {combineReducers} from 'redux';

import item from './item';
import getproduct from './getproduct';

const rootreducer = combineReducers({


item:item,
getproduct:getproduct,



})
export default rootreducer;
