const dev = "production"

export const server =
  dev == "development"
    ? "http://localhost:8080"
    : "http://13.233.148.83"