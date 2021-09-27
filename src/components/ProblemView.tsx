import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {colors} from '../colors';

export interface Problem {
  id: string;
  data: any;
}

interface Solution {
  title: string;
  description: string;
  upvotes: number;
}

const Solution = ({solution}: {solution: Solution}) => {
  return (
    <div style={{marginTop: 8, display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
      <div style={{marginRight: 16}}>
        <span>⬆️</span><span>{solution.upvotes}</span>
      </div>
      <div>
        <h4>{solution.title}</h4>
        <p>{solution.description}</p>
      </div>
    </div>);
};

export const ProblemView = () => {
  const {problemId} = useParams<{problemId: string}>();

  const [solutions, setSolutions] = useState<Solution[] | undefined>(undefined);
  const [problem, setProblem] = useState<Problem | undefined>(undefined);

  const getProblem = (problemId: string) => {
    // soon: firebase.get(problemId)
    setProblem({
      id: '1',
      data: {
        title: "Sponge buildup",
        description: "Oftentimes my household sponges accumulate an awful amount of buildup, how can I solve this?",
        upvotes: 29,
      }
    });
  };

  const getSolutions = (problemId: string) => {
    // soon: firebase.get(problemId)
    setSolutions([
      {
        title: "Dry sponge is a happy sponge",
        description: "Thank you for this question. A very important part of any sponge keeping is to keep them dry. A dry sponge is a happy sponge.",
        upvotes: 1337,
      },
      {
        title: "Keep them wet",
        description: "As long as your sponges are constantly wet they won't get any more gross.",
        upvotes: -12,
      },
    ]);
  };

  useEffect(() => {
    // TODO: remove this setTimeout when firebase integration is merged
    setTimeout(() =>
      getProblem(problemId)
      , 1000);
  }, [problemId]);

  useEffect(() => {
    if (problem) {
      // TODO: remove this setTimeout when firebase integration is merged
      setTimeout(() =>
        getSolutions(problemId)
        , 1000);
    }
  }, [problem]);

  if (!problem) {
    return (
      <div className="content-wrapper">
        <h1>Loading...</h1>
        <p>Please wait</p>
      </div>
    );
  } else {
    return (
      <div className="content-wrapper">
        <div style={{display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <div style={{marginRight: 24, backgroundColor: colors.gold, borderRadius: 48, padding: 24, display: 'flex', flexDirection: 'row'}}>
            <span>⬆️</span><span>{problem.data.upvotes}</span>
          </div>
          <div>
            <h1>{problem.data.title}</h1>
            <p>{problem.data.description}</p>
          </div>
        </div>

        {solutions &&
          <div style={{marginTop: 24}}>
            <h2>Solutions</h2>
            {solutions.map(solution =>
              <Solution solution={solution} />
            )}
          </div>
        }
      </div>
    );
  }
};
