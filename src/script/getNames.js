export default function getNames(name, times) {
  const result = [];

  for (var i = 0; i < times; i++) {
    result.push(String(name));
  }

  return result;
}
