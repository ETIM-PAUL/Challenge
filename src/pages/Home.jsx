import FlexLayout from "Components/FlexLayout";
import TopNav from "Components/TopNav";
import { BorderLine, FlarePng } from "Components/MiniComponents.jsx";

import "../styles/home.css";
import Button from "Components/Button";
import GlowBulb from "../assets/glowbulb.svg";
import ManImg from "../assets/man-wearing-smart-glasses-touching-virtual-screen-1.png";
import Creative from "../assets/creative-1.png";
import Chain from "../assets/chain.png";
import Explosive from "../assets/1f4a5.png";
import Stroke from "../assets/stoke.svg";
import Star from "../assets/star.png";
import StarPu from "../assets/star-pu.svg";
import BigIdea from "../assets/the-big-idea.svg";
import Arrow from "../assets/arrow.png";
import WomanImg from "../assets/woman-reading.png";
import Unnamed from "../assets/unnamed.png";
import Halo from "../assets/ellipse-2.svg";
import CwokCasual from "../assets/cwok-casual-211.png";
import QuestionIcon from "../assets/question.svg";
import TrophyImg from "../assets/trophy.png";
import bronzeBadge from "../assets/bronze-medal-1.png";
import goldBadge from "../assets/gold-medal-1.png";
import silverBadge from "../assets/silver-medal-1.png"
import liberty from "../assets/images/liberty-company-logo-white-colour.png";
import libertypay from "../assets/images/liberty-company-logo-white.png";
import paybox from "../assets/images/paybox.png";
import vizualplus from "../assets/images/vizual-plus.png";
import winwise from "../assets/images/winwise-logo-white-colour-1.png";
import whispersms from "../assets/images/wisper-logo-white.png";
import listTerms from "../assets/list-terms.png";
import padLock from "../assets/padlock.png";
import { useState } from "react";


const Home = () => (
  <div className="bg-[#150E28] text-white w-screen overflow-hidden">
      <TopNav style="home" className={"btn-bg border border-[#9A39FF] h-14 px-8 rounded"} link={"/register"} />
    <BorderLine />

    <div className="section-wrapper relative z-50 pr-12">
      <p className="text-[36px] font-bold text-right italic py-8 ">
        Igniting a Revolution in HR Innovation
      </p>
      <img className="absolute right-12 bottom-2 w-56" src={Stroke} />
    </div>

    <FlexLayout className="mt-6">
      <FlarePng className="-top-28 left-0 w-2/3" />
      <div className="relative">
        <h1 className="headingText text-7xl relative">
          getlinked Tech <br /> Hackathon <span>1.0</span>
          <i className="absolute bottom-0 -mr-4 -right-1/4 flex gap-1.5 h-20">
            <img src={Chain} className="h-full" />
            <img src={Explosive} className="h-full" />
          </i>
        </h1>
        <p className="mt-2 mb-10">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <Button text="Register" />

        <div className="timer mt-16">
          <p>
            00<span>H</span>
          </p>
          <p>
            00<span>M</span>
          </p>
          <p>
            00<span>S</span>
          </p>
        </div>

        {/* --- Absolute Assets */}
        <img
          src={Creative}
          alt="Creative Bulb"
          className="absolute -top-14 right-16"
        />

        <img src={Star} className="absolute -top-32 left-12" />

        <img src={Star} className="absolute bottom-16 right-24 opacity-30" />
      </div>

      <div className="max-w-2xl relative">
        <img
          src={ManImg}
          alt="man-wearing-smart-glasses-touching-virtual-screen"
          className="w-full"
        />

        <img src={Star} className="absolute top-5 left-24 opacity-30" />

        <img src={GlowBulb} alt="" className="absolute-center w-5/6" />
        <FlarePng className="-right-24 -top-12 h-full" />
      </div>
    </FlexLayout>

    <BorderLine />

    <FlexLayout className="py-16 justify-center gap-24">
      <div className="relative">
        <img src={BigIdea} alt="The Big Idea Bulb" />
        <img src={Arrow} className="absolute -bottom-6 -right-8" />
        <img src={StarPu} className="absolute -left-8 top-44 w-5" />
      </div>
      <div className="max-w-xl">
        <div className="flex justify-between items-center py-4 w-full">
          <h2 className="headingText text-[32px]">
            Introduction to getlinked
            <br />
            <span>tech Hackathon 1.0</span>
          </h2>

          <img src={StarPu} />
        </div>

        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </FlexLayout>

    <BorderLine />

    <FlexLayout>
      <FlarePng className="top-0 -left-24 w-2/3" />
      <div className="max-w-xl relative">
        <img src={Star} className="absolute top-0 left-1/2 opacity-30" />
        <img src={Star} className="absolute -bottom-8 -right-12" />
        <h2 className="headingText text-[32px] py-4">
          Rules and
          <br />
          <span>Guidelines</span>
        </h2>

        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>

      <img
        src={WomanImg}
        alt="Woman sitting and reading a book with JigSaw in the background"
      />

      <FlarePng className="rotate-90 -bottom-1/3 -right-1/2 w-2/3" />
    </FlexLayout>

    <BorderLine />

    <FlexLayout className="py-20">
      <div className="relative pt-32">
        <img src={Unnamed} className="z-10 relative" />
        <img src={StarPu} className="absolute -top-2 left-1/4" />
        <img src={Star} className="absolute right-0 bottom-0" />
        <img
          src={Star}
          className="absolute right-[40%] bottom-1/3 opacity-20"
        />
        <img src={Halo} className="absolute left-24 top-16" />
        <FlarePng className="-bottom-1/4 left-0" />
      </div>

      <div className="grid gap-5 max-w-xl relative">
        <h2 className="headingText text-[32px]">
          Judging Criteria
          <br />
          <span> Key attributes</span>
        </h2>

        <p className="text-sect">
          <span> Innovation and Creativity: </span>
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>
        <p className="text-sect">
          <span> </span>
        </p>
        <p className="text-sect">
          <span>Functionality: </span>
          Assess how well the solution works. Does it perform its intended
          functions effectively and without major issues? Judges would consider
          the completeness and robustness of the solution.
        </p>
        <p className="text-sect">
          <span> Impact and Relevance: </span>
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits.
        </p>
        <p className="text-sect">
          <span>Technical Complexity: </span>
          Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </p>
        <p className="text-sect">
          <span> Adherence to Hackathon Rules: </span>
          Judges will Ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>

        <Button text={"Read More"} className="mt-8" />

        <FlarePng className="-right-1/3 -bottom-2/4" />
      </div>
    </FlexLayout>

    <BorderLine />

    <FlexLayout className="py-20">
      <div className="max-w-xl relative">
        <img className="absolute -left-4 -top-7" src={StarPu} />
        <h2 className="headingText text-[32px] py-4">
          Frequently Asked
          <br />
          <span>Question</span>
        </h2>

        <p className="pt-4 pb-16">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>

        <div className="grid gap-3">
          <QnA q="Can I work on a project I started before the hackathon?" />
          <QnA q="What happens if I need help during the hackathon?" />
          <QnA q="What happens if I don't have an idea for a project?" />
          <QnA q="Can I join a team or do I have to come with one?" />
          <QnA q="What happens after the hackathon ends" />
          <QnA q="Can I work on a project I started before the hackathon?" />
        </div>
      </div>

      <div className="relative pt-20">
        <img src={CwokCasual} alt="Man sitting on a cloud thinking" />
        <img src={QuestionIcon} className="absolute top-0 left-[33%]" />
        <img
          src={QuestionIcon}
          className="opacity-70 absolute top-12 left-[57%] w-12"
        />
        <img
          src={QuestionIcon}
          className="opacity-70 absolute top-10 left-[5%] w-12"
        />
      </div>
    </FlexLayout>

    <BorderLine />

    <div className="py-20">
      <div className="grid gap-3 text-center mx-auto max-w-[346px] pb-24">
        <h2 className="headingText text-[32px]">Timeline</h2>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>

      <div className="grid w-max mx-auto">
        <Timeline
          content={{
            left: (
              <>
                <h3>Hackathon Announcement</h3>
                <p>
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </>
            ),
            right: <h3>November 18, 2023</h3>,
            num: 1,
          }}
        />
        <Timeline
          content={{
            right: (
              <>
                <h3>Teams Registration begins</h3>
                <p>
                  Interested teams can now show their interest in the
                  getlinked tech hackathon 1.0 2023 by proceeding to register
                </p>
              </>
            ),
            left: <h3>November 18, 2023</h3>,
            num: 2,
          }}
        />
        <Timeline
          content={{
            left: (
              <>
                <h3>Teams Registration ends</h3>
                <p>
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </>
            ),
            right: <h3>November 18, 2023</h3>,
            num: 3,
          }}
        />
        <Timeline
          content={{
            right: (
              <>
                <h3>Announcement of the accepted teams
                  and ideas</h3>
                <p>
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </>
            ),
            left: <h3>November 18, 2023</h3>,
            num: 4,
          }}
        />
        <Timeline
          content={{
            left: (
              <>
                <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
                <p>
                  Accepted teams can now proceed to build their
                  ground breaking skill driven solutions
                </p>
              </>
            ),
            right: <h3>November 18, 2023</h3>,
            num: 5,
          }}
        /><Timeline
          content={{
            right: (
              <>
                <h3>Demo Day</h3>
                <p>
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on
                  this day
                </p>
              </>
            ),
            left: <h3>November 18, 2023</h3>,
            num: 6,
          }}
        />
      </div>
    </div>

    <BorderLine />

    <FlexLayout className="py-20">
      <img src={TrophyImg} />
      <section className="w-full">
        <div className="w-80 mx-auto">
          <h2 className="headingText text-[32px] py-4">
            Prizes and
            <br />
            <span>Rewards</span>
          </h2>

          <p>Highlight of the prizes or rewards for winners and for participant</p>
        </div>

        <div className="flex gap-8 items-center mt-52">
          <PrizeCard position="2nd" prize="N300,000" img={silverBadge} />
          <PrizeCard position="1st" prize="N400,000" img={goldBadge} />
          <PrizeCard position="3rd" prize="N150,000" img={bronzeBadge} />
        </div>

      </section>
    </FlexLayout>

    <BorderLine />

    <section className="py-20">
      <div className="w-[452px] mx-auto text-center">
        <h2 className="headingText text-[32px] py-4">
          Partners and Sponsors
        </h2>

        <p>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
      </div>

      <FlexLayout className="mt-16 border border-[#D434FE] py-36 px-36 rounded-md grid grid-cols-3 grid-rows-2 relative">

        <div className="sponsors ">
          <img className="" src={liberty} alt="" />
        </div>


        <div className="sponsors ">
          <img className="" src={libertypay} alt="" />
        </div>


        <div className="sponsors ">
          <img className="" src={winwise} alt="" />
        </div>


        <div className="sponsors ">
          <img className="" src={whispersms} alt="" />
        </div>


        <div className="sponsors ">
          <img className="" src={vizualplus} alt="" />
        </div>

        <div className="sponsors ">
          <img className="" src={paybox} alt="" />
        </div>

      </FlexLayout>

    </section>

    <BorderLine />

    <FlexLayout className="py-20">
      <div>
        <div className="w-80 grid gap-4">
          <h2 className="headingText text-[32px]">
            Privacy Policy and
            <br />
            <span>Terms</span>
          </h2>

          <p className="pb-2 text-[#fffc]">Last updated on September 12, 2023</p>

          <p>Below are our privacy & policy, which outline a lot of goodies.
            it’s our aim to always take of our participant</p>


        </div>

        <div className="my-16 border bg-[#d634fe09] rounded-md border-[#D434FE] p-14 w-full max-w-xl grid gap-6">
          <p className="leading-8">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div>
            <h5 className="font-bold text-[#D434Fe] leading-10">Licensing Policy</h5>
            <p>Here are the terms and conditions</p>
          </div>


          <div className="flex gap-3">
            <img src={listTerms} className="w-4 h-4 mt-2" />
            <p>
              The Standard License grants you a non-exclusive right to
              navigate and register for our event
            </p>
          </div>
          <div className="flex gap-3">
            <img src={listTerms} className="w-4 h-4 mt-2" />
            <p>
              You are licensed to use the item available at any free source
              sites, for your project developement
            </p>
          </div>

          <div className="mx-auto">
            <Button text="Read More" />
          </div>

        </div>
        
      </div>

      <img src={padLock} />

    </FlexLayout>


  </div>
);

const QnA = ({ q, a }) => {
  const defaultAns =
    a ||
    "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced  technologies or algorithms, and the scalability of the solution.";
  const [isOpened, setIsOpen] = useState(false);

  return (

    <div className="py-3 border-b border-b-[#D434FE]">
      <div
        className="flex justify-between items-center"
        onClick={() => setIsOpen(!isOpened)}
      >
        <p>{q}</p>
        <img className="w-4 h-7" src={StarPu} />
      </div>
      {!!isOpened && <p className="p-2">{defaultAns}</p>}

    </div>
  );
};

const PrizeCard = ({ position, prize, img }) => <div className={`border bg-[#D434FE1F] rounded-lg w-[212px] grid text-center content-end py-12 relative ${position == "1st" ? "border-[#903AFF] h-[347px]" : "border-[#D434FE] h-[296px]"}`}>
  <img src={img} className={`mx-auto ${position == "1st" ? "scale-[141%] -translate-y-[30%]" : "-translate-y-[20%]"} `} />
  <h3 className="text-4xl font-bold">{position}</h3>
  <h4 className="text-[24px] font-semibold">Runner</h4>
  <p className={`text-[32px] font-bold ${position == "1st" ? "text-[#903AFF] mt-8" : "text-[#D434FE] mt-4"} `}>{prize}</p>
</div>;

const Timeline = ({ content }) => (
  <div className="timeline">
    <div className="cell text-right">{content.left}</div>

    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#903AFF] to-[#D434FE] font-bold text-2xl flex items-center justify-center relative">
      {content.num}
      <div className={`bg-[#D434FE] absolute w-1 ${content.num === 1 ? "h-28" : "h-20"}  bottom-full left-1/2 mb-3 -translate-x-1/2`}></div>
    </div>

    <div className="cell">{content.right}</div>
  </div>
);

export default Home;
