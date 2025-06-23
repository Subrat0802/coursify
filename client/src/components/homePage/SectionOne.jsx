import Aurora from "../ui/AuroraBg";
import BecomeAinstructoeBtn from "../ui/BecomeAinstructoeBtn";
import ShinyText from "../ui/ShinyText";
import SplitText from "../ui/SplitText";


const SectionOne = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Aurora blend={0.5} amplitude={1.0} speed={0.5} />
      <div className="w-full h-full flex flex-col pt-28 min-h-[100vh] justify-center items-center">
        <SplitText
          text="Empower Your Future with Coding Skills"
          className="text-6xl font-bold w-full  text-white/70 text-center pb-3"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <div className="flex flex-col justify-center items-center mt-2">
          <ShinyText
            text="With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, "
            disabled={false}
            speed={3}
            className="custom-class"
          />

          <ShinyText
            text="including hands-on projects, quizzes, and personalized feedback from instructors."
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </div>

        <BecomeAinstructoeBtn />
      </div>
    </div>
  );
};

export default SectionOne;
