import Stack from "../Stack";

export default function clearStack(s: Stack<any>) {
  s._top = null;
  s._bottom = null;
  s._values = [];
}
