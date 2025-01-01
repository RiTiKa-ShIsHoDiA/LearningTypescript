import path from "../assets/hiImage.png";
export const Greetings = () => {
  const getGreeting = (): string => {
    const currentHour: number = new Date().getHours();
    if (currentHour < 12) return "Good Morning";
    else if (currentHour < 18) return "Good Afternoon";
    else return "Good Evening";
  };


  return (
    <div className="flex justify-center">
      <div className="flex w-1/2  p-5 mx-auto my-5 justify-center">
        <img src={path} alt="helloImage" />

        <h1 className="text-4xl text-bold flex items-center px-2 font-bold">
          {" "}
          {getGreeting()}
        </h1>
      </div>
    </div>
  );
};
