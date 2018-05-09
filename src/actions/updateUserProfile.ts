import {actionsEnum} from '../common/actionsEnum';
import {BaseAction} from '../common/baseAction';

export const updateUserProfileName = (newName : string) : BaseAction => ({  
    type: actionsEnum.UPDATE_USERPROFILE_NAME,
    payload : newName,  
});
  


