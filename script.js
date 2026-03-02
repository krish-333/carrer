async function runAgent() {

  document.getElementById("output").textContent =
    "Searching jobs...";

  const res = await fetch("/api/agent");
  const data = await res.json();

  document.getElementById("output").textContent =
    data.result;
}
