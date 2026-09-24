import { useState } from "react";

function IssueForm({ addIssue }) {
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [technology, setTechnology] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FORM SUBMITTED");

    const newIssue = {
      title,
      problem,
      solution,
      technology,
    };

    try {
      const response = await fetch("https://devtrace-backend-d666.onrender.com/api/issues",
        {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newIssue),
      });

      const data = await response.json();

      console.log("SAVED ISSUE:", data);

      addIssue(data);

      setTitle("");
      setProblem("");
      setSolution("");
      setTechnology("");
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Issue title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="What was the problem?"
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        required
      />

      <textarea
        placeholder="How did you fix it?"
        value={solution}
        onChange={(e) => setSolution(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Technology (React, Node, MongoDB...)"
        value={technology}
        onChange={(e) => setTechnology(e.target.value)}
        required
      />

      <button type="submit">Save Issue</button>
    </form>
  );
}

export default IssueForm;