import * as ReactDOM from "react-dom";
import * as React from "react";
import { useState, useEffect } from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h1>Quiz App</h1>
      <ul>
        <li>
          <Link to={"/question"}>Start Your Quiz</Link>
        </li>
      </ul>
    </div>
  );
}

async function fetchJSON() {
  const res = await fetch("api/question");
  if (res.ok) {
    return await res.json();
  }
}

function Quiz() {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetchJSON("/api/question");
      setQuestion(res);
    }
    fetchData();
  }, []);

  async function handleAnswer(answer) {
    const { id } = question;
    const res = await fetch("/api/question", {
      method: "post",
      body: JSON.stringify({ answer, id }),
      headers: {
        "content-type": "application/json",
      },
    });
    setAnswer(await res.json());
    setQuestion(await fetchJSON("/api/question"));
  }

  if (!question) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((a) => (
          <p key={a}>
            <button onClick={() => handleAnswer(a)}>
              {question.answers[a]}
            </button>
          </p>
        ))}

      <h2>
        {answer
          ? "Your answer on the last question:" + answer.result.toString()
          : null}
      </h2>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />}></Route>
        <Route path={"/question"} element={<Quiz />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
