/* eslint-disable import/no-anonymous-default-export */
import stateSchema from "./stateSchema";
import tv4 from "tv4";


export default ({ dispatch, getState }) => (next) => (action) => {
    next(action);

    if(!tv4.validate(getState(), stateSchema)) {
        console.log('invalid state schema detected');
    };
};

