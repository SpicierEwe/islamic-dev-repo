import "../../db/db.json";

export function MainSection(prams) {
  const data = fetch("/api/db").then((res) => console.log(res.json));

  return (
    <div>
      <h1>{data.toString()}</h1>
    </div>
  );
}
