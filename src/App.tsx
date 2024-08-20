import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("aa");

    fetch("api/v1/auth", { method: "POST" })
      .then(async (res) => {
        const data = await res.json();
        console.log({ data });
      })
      .catch(() => {
        console.log("catch");
      })
      .finally(() => {
        console.log("finally");
      });
  }, []);

  return <div>app</div>;
}

export default App;
