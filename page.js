export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🚀 Career Agent AI</h1>
      <p>Your autonomous job-search agent is running.</p>

      <a href="/api/agent">
        <button style={{
          padding: "12px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Run Agent
        </button>
      </a>
    </main>
  );
}
