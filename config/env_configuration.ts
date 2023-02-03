export const NodeENV = (ENV: string): string => {
  switch (ENV.toLocaleLowerCase()) {
    case "dev":
      return "https://cat-fact.herokuapp.com"
    case "qa":
      return "https://cat-fact.herokuapp.com"
    case "staging":
      return "https://cat-fact.herokuapp.com"
    default:
      return "https://cat-fact.herokuapp.com"
  }
}
