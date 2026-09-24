function IssueCard({ issue }) {
  return (
    <div>
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
    </div>
  );
}

export default IssueCard;