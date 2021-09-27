import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { colors } from "../colors";
import { Problem } from "./ProblemView";
import { listProblems } from "../api/problem";

const CreateForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div style={{ marginBottom: 64 }}>
      <form
        className="create-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert(title);
          return false;
        }}
      >
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              marginBottom: 8,
              color: "white",
            }}
          >
            Title
          </div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginBottom: 16 }}
          />
        </label>
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              marginBottom: 8,
              marginTop: 8,
              color: "white",
            }}
          >
            Description
          </div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ marginBottom: 16 }}
          />
        </label>
        <button
          style={{
            alignSelf: "flex-end",
            fontSize: 16,
            marginBottom: 16,
            padding: "8px 16px",
            marginTop: 8,
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export const Frontpage = () => {
  const [problems, setProblems] = useState<Problem[] | undefined>(undefined);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const getProblems = async () => {
    const problems = await listProblems();
    setProblems(problems);
  };

  useEffect(() => {
    getProblems();
  }, []);

  return (
    <div className="content-wrapper">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: 48,
            marginBottom: 32,
            marginTop: 32,
            fontWeight: 100,
          }}
        >
          SLTN™
        </div>

        <div style={{ marginBottom: 32, fontWeight: 100 }}>
          <em>Top problems, Top answers</em>
        </div>
      </div>

      {!showCreateForm && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            className="btn"
            style={{
              fontSize: 16,
              padding: "8px 16px",
              marginTop: 16,
              marginBottom: 48,
            }}
            onClick={(e) => {
              e.preventDefault();
              setShowCreateForm(true);
            }}
          >
            Create new question
          </button>
        </div>
      )}

      {showCreateForm && <CreateForm />}

      <div>
        {problems &&
          problems.map((problem) => (
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
