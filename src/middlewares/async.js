/* eslint-disable import/no-anonymous-default-export */
export default ({ dispatch }) =>
  (next) =>
  (action) => {
      //check to see if the action has a promise on its payload property
      //if it does, wait for it to resolve
      //it it doesnt, send the action to the next middleware
      if(!action.payload || !action.payload.then){
        return next(action);
      }

      //we want to wait for the promise to resolve( get data ) and create new action with that data and dispatch it
      action.payload.then(function(response){
        const newAction = {...action, payload: response};
        dispatch(newAction);
      });
  };
