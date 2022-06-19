const dev = "development"

export const client =
  dev == "development"
    ? "http://localhost:3000"
    : "https://microsoft-engage-21.vercel.app"