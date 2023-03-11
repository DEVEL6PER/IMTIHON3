export const reducer = (state, action) => {
  switch (action.type) {
    case 'changeInput':
      return { ...state, input: action.payload }
    case 'addTodo':
      return {
        ...state,
        total: [
          ...state.total,
          { id: state.total.length + 1, data: state.input },
        ],
        input: '',
      }
    case 'delete':
      const newData = state.total.filter((value) => value.id !== action.payload)
      return { ...state, total: newData }
    default:
      return state
  }
}
