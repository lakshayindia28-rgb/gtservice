import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lock, Mail, User } from "lucide-react";
import "./Login.css";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const wrapperClassName = useMemo(
    () => `auth-wrapper${isSignup ? " toggled" : ""}`,
    [isSignup]
  );

  return (
    <motion.div
      className="gt-auth"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className={wrapperClassName}>
        <div className="background-shape" />
        <div className="secondary-shape" />

        {/* Sign in */}
        <div className="credentials-panel signin">
          <h2 className="slide-element">Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="field-wrapper slide-element">
              <input type="text" required autoComplete="username" />
              <label>Username</label>
              <User className="field-icon" aria-hidden="true" />
            </div>

            <div className="field-wrapper slide-element">
              <input type="password" required autoComplete="current-password" />
              <label>Password</label>
              <Lock className="field-icon" aria-hidden="true" />
            </div>

            <div className="field-wrapper slide-element">
              <button className="submit-button" type="submit">
                Login
              </button>
            </div>

            <div className="switch-link slide-element">
              <p>
                Don&apos;t have an account?
                <br />
                <button
                  type="button"
                  className="switch-trigger"
                  onClick={() => setIsSignup(true)}
                >
                  Sign Up
                </button>
              </p>
            </div>
          </form>
        </div>

        <div className="welcome-section signin">
          <h2 className="slide-element">WELCOME BACK!</h2>
        </div>

        {/* Sign up */}
        <div className="credentials-panel signup">
          <h2 className="slide-element">Register</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="field-wrapper slide-element">
              <input type="text" required autoComplete="username" />
              <label>Username</label>
              <User className="field-icon" aria-hidden="true" />
            </div>

            <div className="field-wrapper slide-element">
              <input type="email" required autoComplete="email" />
              <label>Email</label>
              <Mail className="field-icon" aria-hidden="true" />
            </div>

            <div className="field-wrapper slide-element">
              <input type="password" required autoComplete="new-password" />
              <label>Password</label>
              <Lock className="field-icon" aria-hidden="true" />
            </div>

            <div className="field-wrapper slide-element">
              <button className="submit-button" type="submit">
                Register
              </button>
            </div>

            <div className="switch-link slide-element">
              <p>
                Already have an account?
                <br />
                <button
                  type="button"
                  className="switch-trigger"
                  onClick={() => setIsSignup(false)}
                >
                  Sign In
                </button>
              </p>
            </div>
          </form>
        </div>

        <div className="welcome-section signup">
          <h2 className="slide-element">WELCOME!</h2>
        </div>
      </div>

      <div className="gt-auth-footer">
        <p>
          <span>GUST TASK SERVICES PRIVATE LIMITED</span>
          <span className="gt-auth-footer-sep">•</span>
          <Link to="/" className="gt-auth-footer-link">
            Back to Home
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
