export default function(state=[],action){
  switch (action.type) {
    case 'item':return([action.payload]);

    default:return state

  }
}
