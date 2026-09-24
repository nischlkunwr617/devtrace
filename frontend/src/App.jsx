import { useEffect, useState } from "react";
import IssueForm from "./components/IssueForm";
import IssueList from "./components/IssueList";

function App() {
  const [issues, setIssues] = useState([]);

  const addIssue = (newIssue) => {
    setIssues((currentIssues) => [...currentIssues, newIssue]);
  };

  const updateIssue = (updatedIssue) => {
    setIssues((currentIssues) =>
      currentIssues.map((issue) =>
        issue._id === updatedIssue._id ? updatedIssue : issue
      )
    );
  };

  const deleteIssue = (id) => {
    setIssues((currentIssues) =>
      currentIssues.filter((issue) => issue._id !== id)
    );
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/issues")
      .then((response) => response.json())
      .then((data) => {
        setIssues(data);
      })
      .catch((error) => {
        console.error("Error getting issues:", error);
      });
  }, []);

  return (
    <div>
      <header>
        <h1>DevTrace</h1>
        <p>Your personal debugging knowledge base.</p>
      </header>

      <main>
        <section>
          <h2>Add an Issue</h2>
          <IssueForm addIssue={addIssue} />
        </section>

        <section>
          <div className="issues-header">
            <h2>Your Issues</h2>

            <span>
              {issues.length} {issues.length === 1 ? "issue" : "issues"}
            </span>
          </div>

          <IssueList
            issues={issues}
            updateIssue={updateIssue}
            deleteIssue={deleteIssue}
          />
        </section>
      </main>
    </div>
  );
}

export default App;