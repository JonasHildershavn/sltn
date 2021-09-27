import { colors } from "../colors";

export const Frontpage = () => {
  const questions = [
    {
      title: "Do you think humans will ever walk on the sun?",
      body: "I was just thinking and thought how crazy it was that a person walked on the moon and mars. I was just wonder if you think a person will ever be able to walk on the sun too? I know it's really hot but I'm thinking if you go in the winter when the sun is like 30 degrees I bet they could do it.",
      upvotes: 420,
    },
    {
      title: "Is Christian Bale a Christian since his name is Christian?",
      body: "His parents must have named him Christian for some reason?",
      upvotes: 301,
    },
    {
      title: "HOW DO I TURN OFF CAPSLOCK?",
      body: "I ACCIDENTALLY TURNED IT ON YESTERDAY AND I DONT KNOW HOW TO TURN IT BACK OFF. ALL MY FRIENDS ARE MAD BECAUSE THEY THINK I AM SHOUTING AT THEM OVER THE INTERNET. THIS PROBLEM IS LITERALLY RUINING MY LIFE AND TEARING MY FAMILY APART THROUGH EMAILS. I JSUT WANT TO BE WHOLE AGAIN. PLEASE HELP!!!",
      upvotes: 94,
    },
    {
      title:
        "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?",
      body: "Title says it all.",
      upvotes: 69,
    },
  ];

  return (
    <div className="content-wrapper">
      <div style={{ fontSize: 48, marginBottom: 16 }}>SLTN™</div>

      <div style={{ marginBottom: 32 }}>
        <em>Top questions, Top answers</em>
      </div>

      <div>
        {questions.map((question) => (
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
                <div style={{ paddingLeft: 4 }}>{question.upvotes} ↑</div>
              </div>
              <div
                style={{
                  fontSize: 22,
                  paddingRight: 16,
                }}
              >
                {question.title}
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
              {question.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
