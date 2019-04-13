import * as React from 'react';

export interface Props {
  match:{
    params: {
      topicId : number;
    },
  };
}
export default ({ match }: Props) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);
