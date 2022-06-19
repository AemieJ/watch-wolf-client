const dev = "development"

export const client =
  dev == "development"
    ? "http://localhost:3000"
    : "https://watch-wolf.vercel.app/"