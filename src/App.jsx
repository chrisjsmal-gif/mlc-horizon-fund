import "./styles.css";

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-inner">
          <h1>MLC Horizon Fund</h1>
          <p className="subtitle">
            Investing with a long-term horizon — disciplined, research-driven, and transparent.
          </p>

          <div className="cta-row">
            <a className="btn primary" href="#contact">Contact</a>
            <a className="btn" href="#overview">Learn more</a>
          </div>
        </div>
      </header>

      <main className="content">
        <section id="overview" className="section">
          <h2>Overview</h2>
          <p>
            MLC Horizon Fund focuses on high-conviction opportunities with a long-term view.
            This website provides an introduction to the strategy, approach, and ways to connect.
          </p>
        </section>

        <section className="section grid">
          <div className="card">
            <h3>Strategy</h3>
            <p>
              Clear investment criteria, concentrated ideas, and thoughtful risk management.
            </p>
          </div>
          <div className="card">
            <h3>Process</h3>
            <p>
              Fundamental research, scenario analysis, and disciplined position sizing.
            </p>
          </div>
          <div className="card">
            <h3>Transparency</h3>
            <p>
              Straightforward communication, updates, and accessible documentation.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            Email: <a href="mailto:info@mlchorizonfund.com">info@mlchorizonfund.com</a>
          </p>
          <p>
            (Replace this email with your real contact address.)
          </p>
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} MLC Horizon Fund</small>
      </footer>
    </div>
  );
}