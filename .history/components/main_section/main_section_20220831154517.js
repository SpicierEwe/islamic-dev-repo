import "../../db/db.json";

export function MainSection(prams) {
  //   const dbData = fetch("/api/db")
  //     .then((res) => res.json)
  //     .then((data) => console.log(data.name));

  return (
    <div>
      <h1>{dbData.toString()}</h1>
    </div>
  );
}
