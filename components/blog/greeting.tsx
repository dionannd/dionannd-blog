import { formatTime } from "lib/helpers";
import { ReactNode } from "react";

type GreetingProps = {
  children: ReactNode;
};

const Greeting = ({ children }: GreetingProps) => {
  const date = new Date();
  const hours = date.getHours();

  let greet;

  if (hours < 12) greet = "Good Morning";
  else if (hours >= 12 && hours <= 17) greet = "Good Afternoon";
  else if (hours >= 17 && hours <= 24) greet = "Good Evening";

  return (
    <label>
      it is now ({formatTime(date)})&nbsp;{children}:&nbsp;
      <strong>({greet})</strong>
    </label>
  );
};

export default Greeting;
