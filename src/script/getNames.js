export default function getNames(name = "", times = 1) {
  const result = [];

  // Safeguard
  if (name === undefined) name = "";
  if (name === null) name = "";

  for (var i = 0; i < times; i++) {
    result.push(String(name));
  }

  return result;
}
