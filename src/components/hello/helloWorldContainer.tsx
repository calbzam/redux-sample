import * as React from 'react';
import {connect} from 'react-redux';
import {HelloWorldComponent} from './helloWorld';
import { State } from '../../reducers';

/* interface State {
  username : string;
} */

const mapStateToProps = (state : State) => ({
  userName: state.userProfileReducer.firstname
}); 

const mapDispatchToProps = (dispatch) => ({

}); 

export const HelloWorldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorldComponent); 

/* export class HelloWorldContainer extends React.Component<{}, State> {
  public constructor(props) {
    super(props);
    this.state = {username: 'John Doe' };
  }

  public render() {
    return (
      <HelloWorldComponent userName={this.state.username}/>
    )
  }
} */


