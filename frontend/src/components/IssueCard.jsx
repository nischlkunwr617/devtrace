function IssueCard({ issue, updateIssue, deleteIssue }) {
  const updateIssueData = async (changes) => {
    try {
      const response = await fetch(
        `https://devtrace-backend-d666.onrender.com/api/issues/${issue._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(changes),
        }
      );

      const data = await response.json();
      updateIssue(data);
    } catch (error) {
      console.error("Error updating issue:", error);
    }
  };

  const toggleSolved = () => {
    updateIssueData({
      solved: !issue.solved,
    });
  };

  const happenedAgain = () => {
    updateIssueData({
      occurrences: issue.occurrences + 1,
    });
  };

  const handleDelete = async () => {
    try {
      await fetch(`https://devtrace-backend-d666.onrender.com/api/issues/${issue._id}`, {
        method: "DELETE",
      });

      deleteIssue(issue._id);
    } catch (error) {
      console.error("Error deleting issue:", error);
    }
  };

  return (
    <div className="issue-card">
      <h3>{issue.title}</h3>

      <p>
        <strong>Technology:</strong> {issue.technology}
      </p>

      <p>
        <strong>Problem:</strong> {issue.problem}
      </p>

      <p>
        <strong>Solution:</strong> {issue.solution}
      </p>

      <p>
        <strong>Occurrences:</strong> {issue.occurrences}
      </p>

      <button
        className={issue.solved ? "solved-button" : "unsolved-button"}
        onClick={toggleSolved}
      >
        {issue.solved ? "Solved" : "Unsolved"}
      </button>

      <button onClick={happenedAgain}>
        Happened Again
      </button>

      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default IssueCard;