import Code from "./code";
import Welcome from "./Welcome";

function ConditionalComoponent() {
  const display = !true;
  return display ? <Welcome></Welcome> : <Code></Code>;
  
}

export default ConditionalComoponent;
