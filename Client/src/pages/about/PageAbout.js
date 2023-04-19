import React from "react";
import SlideTeams from "../../components/slideTeams/SlideTeams";
import "./About.css";
import { useSelector } from "react-redux"
import Layout from "../../layouts/main";
import imag from '../../imgs/team.png'


const PageAbout = () => {
  const theme = useSelector(state => state.theme)

  return (
    <Layout>
      <div className={`page-about ${theme}`}>
        <div className="about">
          <h2 className="about-us">About Us</h2>
          <div className={`description ${theme}`}>
            <p>
              Every individual has the potential to create change, whether in
              their life, their community, or the world. The transformative power
              of education is what unlocks that potential. Yet, access to
              high-quality education has been a privilege of the few. Back in
              2012, we realized it was a time for a seismic shift in learning.
              From the tried and true to the leading edge. From “for some” to “for
              all.” By opening the classroom through online learning, C4U empowers
              millions of learners to unlock their potential and become
              changemakers.
            </p>

            <p>
              Learn new skills or earn credit towards a degree at your own pace,
              with no deadlines, using free courses from C4U. We're committed to
              removing barriers to education and helping you build essential
              skills to advance your career goals. Check out our full course
              catalog below, or sign up now to enroll in courses.
            </p>
          </div>

          <div className="the-team">
            <div className="team">
              <h2>The team</h2>
              <p>
                Our leadership team comes together with one goal: to help
                learners, enterprise, and governments prepare for and strengthen
                the digital workforce of the next generation. <br /> Great work requires
                great people, and we think ours are some of the best. We’re a
                creative, friendly and diverse bunch, who truly enjoy what we do
                and the people we work with. Our team spirit, expertise and
                perspective helps us create solutions that go far beyond just a
                good idea.
              </p>
            </div>

      <img  src={imag} alt="" className="white-box" />

          </div>
          <SlideTeams />

        </div>
      </div>
    </Layout>
  );
};

export default PageAbout;
