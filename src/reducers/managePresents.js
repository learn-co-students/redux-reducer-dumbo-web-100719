// export function managePresents(state, action){
//     state = {numberOfPresents: 0}
//     action = {type: 'INCREASE'}
//         switch (action.type) {
//           case 'INCREASE':
//             return {...state, numberOfPresents: state.numberOfPresents + 1}
        
//           default:
//             return state;
//         }
// }

export function managePresents(state = {
    numberOfPresents: 0,
  }, action) {
    switch(action.type) {
  
      case "INCREASE":
        return Object.assign({}, state, {
          numberOfPresents: state.numberOfPresents + 1
        });
  
      default:
        return state;
    }
  };

