export function randomString() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export function randomInt() {
  return Math.floor(Math.random() * 100000000) + 1;
}
