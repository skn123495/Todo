import ACTION_TYPE from '../action/ActionTypes';

const initialState = {
  notes: [
    {id: 1, name: 'Ashlesha mam'},
    {id: 2, name: 'Loves Teaching'},
  ],
  message: 'No message',
};

export default function CrudReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPE.CRUD.CREATE_NOTE:
      return {
        ...state,
        message: 'Task Created Successfully',
      };
    case ACTION_TYPE.CRUD.READ_NOTE:
      return {
        ...state,
        message: 'List Print Successfully',
      };
    case ACTION_TYPE.CRUD.UPDATE_NOTE:
      return {
        ...state,
        message: 'Data Update Successfully',
      };
    case ACTION_TYPE.CRUD.DELETE_NOTE:
      return {
        ...state,
        message: 'Data Delete Successfully',
      };
    default:
      return {
        ...state,
      };
  }
}
