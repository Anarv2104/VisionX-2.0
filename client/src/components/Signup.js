import React, { useState } from "react";
import { auth, db } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const userRef = doc(db, "users", email);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        navigate("/github-link");
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", email), {
          uid: userCredential.user.uid,
          email: email,
          createdAt: new Date(),
          githubLinked: false,
          projectsCreated: [],
          projectsContributed: [],
          skills: [],
        });
        navigate("/github-link");
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div className="d-flex h-100 w-100 bg-black text-white">
      <div className="h-100 container-fluid">
        <div className="h-100 row d-flex align-items-stretch">
          <div className="col-12 col-md-7 col-lg-6 col-xl-5 d-flex align-items-start flex-column px-vw-5">
            <header className="mb-auto py-vh-6 col-12">
              <a className="navbar-brand pe-md-4 fs-4 col-12 col-md-auto text-center" href="/">
                
              </a>
            </header>
            <main className="mb-auto col-12">
              <h1>Continue To VisionX</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control form-control-lg bg-gray-800 border-dark"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg bg-gray-800 border-dark"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-white btn-xl mb-4">Submit</button>
              </form>
            </main>
          </div>
          <div className="col-12 col-md-5 col-lg-6 col-xl-7 gradient"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;