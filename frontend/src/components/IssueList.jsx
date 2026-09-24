import IssueCard from "./IssueCard";

function IssueList({ issues }) {
  return (
    <div>
      {issues.map((issue) => (
        <IssueCard key={issue._id} issue={issue} />
      ))}
    </div>
  );
}

export default IssueList;