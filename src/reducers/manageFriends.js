export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { friends: [...state.friends, action.friend] };

    case "REMOVE_FRIEND":
      const indexRemoval = state.friends.findIndex(
        friend => friend.id === action.id
      );
      return {
        ...state,
        friends: [
          ...state.friends.slice(0, indexRemoval),
          ...state.friends.slice(indexRemoval + 1)
        ]
      };

    default:
      return state;
  }
}
