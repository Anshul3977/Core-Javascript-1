function login(username, password) {
    if (username === "admin" && password === "12345") {
      console.log("Login successful");
    } else {
      console.log("Invalid credentials");
    }
  }
  login("admin", "12345");
  login("user", "password");
  