import { useEffect, useState } from "react";
import IssueForm from "./components/IssueForm";
import IssueList from "./components/IssueList";

function App() {
  const [issues, setIssues] = useState([]);

  const addIssue = (newIssue) => {
    setIssues((currentIssues) => [...currentIssues, newIssue]);
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
          <h2>Your Issues</h2>
          <IssueList issues={issues} />
        </section>
      </main>
    </div>
  );
}

export default App;