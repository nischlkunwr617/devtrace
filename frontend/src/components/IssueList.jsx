import IssueCard from "./IssueCard";

function IssueList({ issues, updateIssue, deleteIssue }) {
  if (issues.length === 0) {
    return (
      <div className="empty-message">
        <p>No issues saved yet.</p>
        <span>Add your first debugging issue above.</span>
      </div>
    );
  }

  return (
    <div className="issue-list">
      {issues.map((issue) => (
        <IssueCard
          key={issue._id}
          issue={issue}
          updateIssue={updateIssue}
          deleteIssue={deleteIssue}
        />
      ))}
    </div>
  );
}

export default IssueList;