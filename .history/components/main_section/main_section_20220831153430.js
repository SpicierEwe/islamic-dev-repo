import "../../db/db.json";

export function MainSection(prams) {
  const data = fetch("/api/db").then((res)=> res.body);

  return (
    <div>
      <h1>{data.}</h1>
    </div>
  );
}
