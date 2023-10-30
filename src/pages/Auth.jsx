
export const authenticate = (username, password) => {
    // Periksa apakah username dan password sesuai dengan kredensial yang diharapkan
    if (username === "Meika" && password === "12345") {
      return true; // Jika benar, kembalikan true
    } else {
      return false; // Jika salah, kembalikan false
    }
  };
  