import "../../db/db.json";

export function MainSection(prams) {
  const data = fetch("/api/db");

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}
