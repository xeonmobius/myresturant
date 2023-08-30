"use client";
import Countdown from "react-countdown";

const endingDate = new Date("2023-12-31")

const CountDown = () => {
  return (
    <Countdown className="fond-bold text-5xl text-yellow-300" date={endingDate} />
  );
};

export default CountDown;
