import {actionsEnum} from '../common/actionsEnum';
import {BaseAction} from '../common/baseAction';

export interface UserProfileState {
    firstname : string;
  }
  
  const defaultUserState : () => UserProfileState = () => ({
    firstname: 'John Doe'
  });
  



  export const userProfileReducer = (state = defaultUserState(), action : BaseAction) => {
    switch (action.type){
      case actionsEnum.UPDATE_USERPROFILE_NAME:
        return handleUserProfileAction(state, action.payload);

    }
    return state;
  }

  const handleUserProfileAction = (state : UserProfileState, newName : string) : UserProfileState =>({
    ...state,
    firstname: newName,
  });