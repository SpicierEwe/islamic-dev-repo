import "../../db/db.json";

export function MainSection(prams) {
  const data = fetch("/api/db")
    .then((res) => res.json)
    .then((res) => res.data);

  return (
    <div>
      <h1>{data.toString()}</h1>
    </div>
  );
}
