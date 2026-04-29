import React, { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log("Login Data:", {
        email: form.email,
        password: form.password
      });
    } else {
      console.log("Signup Data:", form);
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              style={styles.input}
              required
            />
          )}

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            style={styles.input}
            required
          />

          <button style={styles.button} type="submit">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={styles.link}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #7e22ce, #4f46e5)"
  },
  card: {
    background: "rgba(255,255,255,0.1)",
    padding: 30,
    borderRadius: 15,
    width: 350,
    color: "white",
    textAlign: "center"
  },
  input: {
    width: "100%",
    padding: 10,
    margin: "8px 0",
    borderRadius: 8,
    border: "none"
  },
  button: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    border: "none",
    background: "white",
    color: "#4f46e5",
    fontWeight: "bold",
    cursor: "pointer"
  },
  link: {
    marginLeft: 8,
    background: "none",
    border: "none",
    color: "yellow",
    cursor: "pointer"
  }
};