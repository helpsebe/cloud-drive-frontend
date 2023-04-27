import NextNProgress from "nextjs-progressbar";

const NProgressLoader = () => {
  return (
    <NextNProgress
      color="#29D"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      options={{ easing: "ease", speed: 500 }}
    />
  );
};

export default NProgressLoader;
