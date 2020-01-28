import { render } from "react-dom";

let initialState={
    friends: []
};

function addFriendAction(the_friend){
    type: "ADD FRIEND",
   the_friend
};

function removeFriendAction(id){
    type: "REMOVE_FRIEND",
    id
};

export function manageFriends(state=initialState, action){

    switch(action.type){

        case 'ADD_FRIEND':
            return{
                friends: [...state.friends, action.friend]
            }
        
        case 'REMOVE_FRIEND':

        const friendsFiltered= state.friends.filter(friend=> {
            return friend.id !== action.id
        })
                return{
                    friends: friendsFiltered
                }
    
        default: return state;
    }
};

