import React, { useEffect, useMemo, useState } from "react";
import logo from "./assets/MLC-Super-Fund-updated.jpg";
import { auth, storage } from "./firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage";

const MENU = [
  { key: "home", label: "Home" },
  { key: "portfolio", label: "Portfolio Details" },
  { key: "statements", label: "Statements" },
  { key: "personal", label: "Personal Details" },
  { key: "reports", label: "Investment Report" }
];

const HOME_TEXT = `The MLC Horizon trusts are a range of actively managed funds, aimed to deliver returns that meet the trusts' investment objectives, while managing risk. Each trust has a different allocation of growth and defensive assets, which are expected to deliver different levels of returns, while exposed to different levels of volatility. These trusts are managed within defined ranges, so investors always know where their money is invested.

Key features
Broad range of trusts: investors can select the trust with the right mix of growth and defensive assets for their investment needs
Defined asset allocation: growth and defensive assets are actively managed within a defined range, meaning investors will always know where their money is invested.
Experience and track record: the trusts are designed and managed using MLC’s market-leading investment approach, leveraging MLC’s experience in helping investors achieve their financial goals
Risk-management focus: risk is actively-managed using MLC’s unique forward-looking investment approach
Multi-manager approach: MLC use many specialist investment managers from around the world to identify some of the best investment opportunities so investors can be confident their money is in good hands and access a diversified range of investment thinking
Extensive diversification: the trusts have been diversified across a number of different asset classes including shares, fixed income, property, infrastructure, as well as exposure to alternative assets and other strategies (such as private equity) so investors are well diversified aiming to minimise risk, and could use the trust as their whole portfolio

Access to Investment Central, your powerful client engagement tool
Investment Central is your perfect client engagement partner to MLC Horizon funds. Investment Central will provide you with essential tools and support for selecting multi-asset solutions that align with your client’s investment needs.
Ensure full transparency: Bring your clients’ portfolios to life with full transparency across their investment portfolios – deep dive into the underlying managers, asset classes, top holdings, and performance.
Generate personalised reports: Create client-friendly investment reports in your practice’s branding.
Create tailored portfolios: It’s a simple way to choose an MLC fund, SMA or create a blended portfolio that best suits your client and their risk profile.
Access more information on MLC Horizon on Investment Central

How to invest
Investors
You can invest through , opens in new wiMLC MasterKey Investment Service Fundamentals, opens in new windowor invest directly* if you are a wholesale investor. Please contact our client services team to request an application form on 1300 738 355.
*minimum investment and holding amounts may apply, refer to the relevant Product Disclosure Statement for more information.

Advisers
For more information on available platforms please speak with your MLC Representative.
Invest through a platform – investing outside a super or pension account`;

function Card({ title, children, footer }) {
  return (
    <div className="card">
      <div className="cardHeader">
        <div className="cardTitle">{title}</div>
      </div>
      <div className="cardBody">{children}</div>
      {footer ? <div className="cardFooter">{footer}</div> : null}
    </div>
  );
}

function LoginModal({ open, onClose, onLogin, error, loading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!open) {
      setEmail("");
      setPassword("");
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="modalBackdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modalTop">
          <div>
            <div className="modalTitle">Login</div>
            <div className="modalSub">Use your email and password.</div>
          </div>
          <button className="iconBtn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="form">
          <label className="label">Email</label>
          <input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
            autoComplete="email"
          />

          <label className="label">Password</label>
          <input
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            type="password"
            autoComplete="current-password"
          />

          {error ? <div className="error">{error}</div> : null}

          <button
            className="btnPrimary"
            disabled={loading || !email || !password}
            onClick={() => onLogin(email, password)}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <div className="hint">You will create your user in Firebase later.</div>
        </div>
      </div>
    </div>
  );
}

function LoggedOutGate() {
  return (
    <div className="gate">
      <div className="gateTitle">Please login to your account</div>
      <div className="gateSub">
        For security, your portfolio and documents are only visible after login.
      </div>
    </div>
  );
}

function PdfPanel({ title, storagePath, loggedIn }) {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const fileRef = useMemo(() => storageRef(storage, storagePath), [storagePath]);

  async function refreshUrl() {
    try {
      const u = await getDownloadURL(fileRef);
      setUrl(u);
    } catch {
      setUrl("");
    }
  }

  useEffect(() => {
    if (!loggedIn) {
      setUrl("");
      setStatus("");
      return;
    }
    refreshUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn, storagePath]);

  async function onUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      setStatus("Please upload a PDF.");
      return;
    }
    setBusy(true);
    setStatus("Uploading…");
    try {
      await uploadBytes(fileRef, file);
      await refreshUrl();
      setStatus("Done.");
    } catch {
      setStatus("Upload failed.");
    } finally {
      setBusy(false);
      e.target.value = "";
    }
  }

  return (
    <Card
      title={title}
      footer={
        loggedIn ? (
          <div className="pdfFooter">
            <label className="uploadBtn">
              <input type="file" accept="application/pdf" onChange={onUpload} disabled={busy} />
              Upload / Replace PDF
            </label>
          </div>
        ) : null
      }
    >
      {!loggedIn ? (
        <LoggedOutGate />
      ) : url ? (
        <a className="pdfLink" href={url} target="_blank" rel="noreferrer">
          Open PDF
        </a>
      ) : (
        <div className="muted">No PDF uploaded yet.</div>
      )}
      {status ? <div className="muted" style={{ marginTop: 10 }}>{status}</div> : null}
    </Card>
  );
}

export default function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginBusy, setLoginBusy] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u || null));
    return () => unsub();
  }, []);

  async function handleLogin(email, password) {
    setLoginBusy(true);
    setLoginError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginOpen(false);
    } catch {
      setLoginError("Login failed.");
    } finally {
      setLoginBusy(false);
    }
  }

  async function handleLogout() {
    await signOut(auth);
    setActive("home");
  }

  const loggedIn = !!user;

  return (
    <div className="appShell">
      <header className="topbar">
        <div className="brand">
          <img className="logo" src={logo} alt="MLC Horizon logo" />
          <div className="brandText">
            <div className="brandName">MLC Horizon Superannuation Fund</div>
            <div className="brandTag">
              Client Portal
              {loggedIn && <span className="welcomeText"> • Welcome, Christie</span>}
            </div>
          </div>
        </div>

        <div className="topbarRight">
          {loggedIn ? (
            <>
              <div className="pill">Logged in</div>
              <button className="btnGhost" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <button className="btnPrimary" onClick={() => setLoginOpen(true)}>Login</button>
          )}
        </div>
      </header>

      <div className="body">
        <aside className="sidebar">
          {MENU.map((m) => (
            <button
              key={m.key}
              className={`navItem ${active === m.key ? "active" : ""}`}
              onClick={() => setActive(m.key)}
            >
              {m.label}
            </button>
          ))}
        </aside>

        <main className="content">
          {active === "home" && (
            <Card title="Overview">
              <div className="prose">
                {HOME_TEXT.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Card>
          )}

          {active === "portfolio" && (
            loggedIn ? (
              <Card
                title="Portfolio Details"
                footer={
                  <div className="mutedSmall">
                    On 30 November 2023, MLC Wholesale Horizon 6 Share Portfolio and MLC Wholesale 7 Accelerated Growth Portfolio were renamed MLC MultiActive High Growth and MLC MultiActive Geared respectively. You can find more information in the MLC MultiActive section
                  </div>
                }
              >
                <div className="kvGrid">
                  <div className="kv"><div className="k">Fund Name</div><div className="v">Christie J Smal</div></div>
                  <div className="kv"><div className="k">Fund Name</div><div className="v">MLC Wholesale Horizon</div></div>
                  <div className="kv"><div className="k">Account Balance</div><div className="v">$704,355.42</div></div>
                </div>
              </Card>
            ) : (
              <Card title="Portfolio Details"><LoggedOutGate /></Card>
            )
          )}

          {active === "statements" && (
            <PdfPanel title="Statements" storagePath="statements/statements.pdf" loggedIn={loggedIn} />
          )}

          {active === "personal" && (
            loggedIn ? (
              <Card title="Personal Details">
                <div className="prose">
                  <p>
                    <strong>Name:</strong> Christie Justin Smal <strong>DOB:</strong> --//-- <strong>Ph:</strong> --//--<br/>
                    <strong>Member Number:</strong> 482175<br/>
                    <strong>Address:</strong> 484 Curra Estate Rd, Curra, Qld 4570<br/>
                    <strong>Inception Date:</strong> 12th August 2016
                  </p>
                  <p>
                    <strong>Beneficiary Listing:</strong> Renen Hadar (spouse) <strong>DOB:</strong> ---/--- <strong>Ph:</strong> --/--<br/>
                    <strong>Address:</strong> 484 Curra Estate Rd, Curra Qld 4570.<br/>
                    <strong>Beneficiary Percentage:</strong> 100%
                  </p>
                </div>
              </Card>
            ) : (
              <Card title="Personal Details"><LoggedOutGate /></Card>
            )
          )}

          {active === "reports" && (
            <PdfPanel title="Investment Report" storagePath="reports/investment-report.pdf" loggedIn={loggedIn} />
          )}
        </main>
      </div>

      <footer className="footer">
        <div className="footerInner">
          <div>© {new Date().getFullYear()} MLC Horizon Superannuation Fund</div>
        </div>
      </footer>

      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLogin={handleLogin}
        error={loginError}
        loading={loginBusy}
      />
    </div>
  );
}