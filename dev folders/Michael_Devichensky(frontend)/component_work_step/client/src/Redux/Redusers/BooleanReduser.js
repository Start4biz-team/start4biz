export const BooleanReduser = (state = false, actions) => {
   switch (actions.type) {
      case 'BOOLEAN_TRUE_ACTIONS' :
         return state = true;
      case 'BOOLEAN_FALSE_ACTIONS' :
         return state = false;
      default: 
         return state;
   } 
};