import useReactRouter from "use-react-router";

function RouterHookSample() {
  const { history, location, match } = useReactRouter();
  console.log({ history, location, match });
  console.log(history);
  console.log(location);
  console.log(match);
  return null;
}

export default RouterHookSample;
