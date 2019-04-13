import * as React from 'react';
import { Dispatch } from 'redux';
import * as actions from '../../redux/actions';
import { StoreState } from '../../redux/types/store';
import { connect } from 'react-redux';
import './Home.css';

export interface IProps {
  name: string;
  enthusiasmLevel: number;
  onDecrement: Function;
  onIncrement: Function;
}

interface IState {
  currentEnthusiasm: number;
}

class Home extends React.Component<IProps, IState> {

  render() {
    console.log('Home', this.props);
    const { name, onDecrement, onIncrement, enthusiasmLevel } = this.props;

    return (
            <div className="hello">
                <div className="greeting">
                  Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <button onClick={() => onDecrement()}>-</button>
                <button onClick={() => onIncrement()}>+</button>
            </div>
    );
  }
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

export default connect(
  ({ enthusiasmLevel, languageName }: StoreState) => {
    return {
      enthusiasmLevel,
      name: languageName,
    };
  },
  (dispatch: Dispatch<actions.EnthusiasmAction>) => {
    return {
      onIncrement: () => dispatch(actions.incrementEnthusiasm()),
      onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
  }
,
)(Home);
