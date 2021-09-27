import { Link } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import { colors } from "../colors";
import { Problem } from "./ProblemView";
import { listProblems } from "../api/problem";

export const Frontpage = () => {
  const [problems, setProblems] = useState<Problem[] | undefined>(undefined);

  const getProblems = async () => {
    const problems = await listProblems();
    setProblems(problems);
  };

  useEffect(() => {
    getProblems()
  }, []);


  return (
    <div className="content-wrapper">
      <div style={{ fontSize: 48, marginBottom: 16, fontWeight: 100 }}>
        SLTN™
      </div>

      <div style={{ marginBottom: 32, fontWeight: 100 }}>
        <em>Top problems, Top answers</em>
      </div>

      <div>
        {problems && problems.map((problem) => (
          <div
            style={{
              marginBottom: 64,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  marginRight: 32,
                  background: colors.gold,
                  width: 64,
                  height: 64,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 32,
                  boxShadow: "4px 2px 0 " + colors.jade,
                  flexShrink: 0,
                }}
              >
                <div style={{ paddingLeft: 4 }}>{problem.data.upvotes} ↑</div>
              </div>
              <div
                style={{
                  fontSize: 22,
                  paddingRight: 16,
                }}
              >
                <Link className="title-link" to={"/problems/" + problem.id}>
                  {problem.data.title}
                </Link>
              </div>
            </div>
            <div
              style={{
                paddingLeft: 64 + 32,
                paddingRight: 32,
                color: "#444",
                lineHeight: 1.5,
                maxHeight: 64 + 32 + 16,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 32 + 16,
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
                  left: 0,
                  right: 0,
                  height: 64,
                }}
              />
              {problem.data.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
