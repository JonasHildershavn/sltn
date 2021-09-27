import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {colors} from '../colors';

interface Problem {
  title: string;
  description: string;
  upvotes: number;
}

export const ProblemView = () => {
  const {problemId} = useParams<{problemId: string}>();

  const [problem, setProblem] = useState<Problem | undefined>(undefined);

  const getProblem = (problemId: string) => {
    // soon: firebase.get(problemId)
    setProblem({
      title: "Sponge buildup",
      description: "Oftentimes my household sponges accumulate an awful amount of buildup, how can I solve this?",
      upvotes: 29,
    });
  };

  useEffect(() => {
    // TODO: remove this setTimeout when firebase integration is merged
    setTimeout(() =>
      getProblem(problemId)
      , 1000);
  }, [problemId]);

  if (!problem) {
    return (
      <div className="content-wrapper">
        <h1>Loading...</h1>
        <p>Please wait</p>
      </div>
    );
  } else {
    return (
      <div className="content-wrapper" style={{display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <div style={{marginRight: 24, backgroundColor: colors.gold, borderRadius: 48, padding: 24, display: 'flex', flexDirection: 'row'}}>
          <span>⬆️</span><span>{problem.upvotes}</span>
        </div>
        <div>
          <h1>{problem.title}</h1>
          <p>{problem.description}</p>
        </div>
      </div>
    );
  }
};
