import path from "../assets/hiImage.png";
export const Greetings = () => {
  const getGreeting = (): string => {
    const currentHour: number = new Date().getHours();
    if (currentHour < 12) return "Good Morning";
    else if (currentHour < 18) return "Good Afternoon";
    else return "Good Evening";
  };

  console.log("../assets/hiImage.png");

  return (
    <div className="flex w-2/3 ">
      <img src={path} alt="helloImage"  />

      <h1 className="text-4xl text-bold flex items-center px-2"> {getGreeting()}</h1>
    </div>
  );
};
