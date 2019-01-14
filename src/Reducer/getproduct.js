export default function getproduct(state=[],action) {
  switch (action.type) {
    case 'product':
    return [action.payload];


    default:return state;

  }

}
