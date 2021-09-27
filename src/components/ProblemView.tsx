import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {colors} from '../colors';
import {getProblem} from '../api/problem';

export interface Problem {
  id: string;
  data: any;
}

interface SolutionInterface {
  title: string;
  description: string;
  upvotes: number;
}

const Solution = ({solution}: {solution: SolutionInterface}) => {
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

  const [solutions, setSolutions] = useState<SolutionInterface[] | undefined>(undefined);
  const [problem, setProblem] = useState<Problem | undefined>(undefined);

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

  const getSetProblem = async (problemId: string) => {
    const problem = await getProblem(problemId);
    setProblem(problem);
  };

  useEffect(() => {
    getSetProblem(problemId);
  }, [problemId]);

  useEffect(() => {
    if (problemId) {
      // TODO: remove this setTimeout when firebase integration is merged
      setTimeout(() =>
        getSolutions(problemId)
        , 1000);
    }
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
