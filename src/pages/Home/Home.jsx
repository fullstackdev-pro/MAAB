import Contact from "./Components/Contact";
import Courses from "./Components/Courses";
import ExpertsSalary from "./Components/ExpertsSalary";
import Faq from "./Components/Faq";
import StudyCards from "./Components/StudyCards";
import TargetAudience from "./Components/TargetAudience";
import VideoComponent from "./Components/VideoSection";
import WinGrand from "./Components/WinGrand";

function Home() {
  return (
    <section>
      <VideoComponent />
      <div className="mx-16 mt-8">
        <StudyCards />
        <TargetAudience />
        <ExpertsSalary />
        <WinGrand />
        <Courses />
      </div>
      <Faq />
      <Contact />
    </section>
  );
}

export default Home;
