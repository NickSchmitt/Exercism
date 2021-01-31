export const gigasecond = (n) => {
  const GIGASECOND = 1e9
  return new Date(n.getTime()+(GIGASECOND*1000))
};
