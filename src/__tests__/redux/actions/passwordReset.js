import * as actions from '../../../redux/actions/passwordReset';
import * as types from '../../../redux/actions/actionTypes';


describe('Password reset actions', () => {
  it('handles getResetKey', () => {
    const expectedAction = {
      type: types.GET_RESET_KEY,
    };
    expect(actions.getResetKey()).toEqual(expectedAction);
  });

  it('handles sendNewPassword', () => {
    const expectedAction = {
      type: types.SEND_NEW_PASSWORD,
    };
    expect(actions.sendNewPassword()).toEqual(expectedAction);
  });
});
