import "../../db/db.json";

export function MainSection(prams) {
  const dbData = fetch("/api/db")
    .then((res) => res.json)
    .then((data) => (dbData = data.name));

  return (
    <div>
      <h1>{dbData.toString()}</h1>
    </div>
  );
}
