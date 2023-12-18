import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom"; // Import Link
import styles from "./QuizHistory.module.css";

const QuizHistory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = useCallback((event) => {
    setSearchQuery(event.target.value);
    // TODO: Implement search functionality based on the searchQuery
  }, []);

  const onFrameContainer5Click = useCallback(() => {
    // TODO: Link that can go back to dashboard
    window.location.href = "/dashboard";
  }, []);

  const onSeeAllTextClick = useCallback(() => {
    // TODO: See all the History Content
    window.location.href = "/see-all";
  }, []);

  const onSeeAllText1Click = useCallback(() => {
    // TODO: See all the leaderboard content
    window.location.href = "/see-all";
  }, []);

  const onRemoveTextClick = useCallback(() => {
    // TODO: Users should have the ability to remove specific quiz entries from their quiz history
  }, []);

  const onVectorClick = useCallback(() => {
    // TODO: Retake the quiz
  }, []);

  const onVector1Click = useCallback(() => {
    // TODO: Retake the quiz
  }, []);

  return (
    <div className={styles.quizhistory}>
      <div className={styles.frame}>
        <div className={styles.navigationBar}>
          <div className={styles.frame1}>
            <img
              className={styles.n21Icon}
              alt=""
              src="/370258854-780621167411721-9004127920158381851-n2-1@2x.png"
            />
            <div className={styles.frame2}>
              <div className={styles.ethnoquest}>EthnoQuest</div>
            </div>
          </div>
          <div className={styles.frame3}>
            <div className={styles.frame4}>
              <div className={styles.frame5}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.quizHistory}>Quiz History</div>
              </div>
            </div>
            <div className={styles.frame6} onClick={onFrameContainer5Click}>
              <div className={styles.frame7}>
                <img
                  className={styles.categoryIcon}
                  alt=""
                  src="/category.svg"
                />
                <div className={styles.dashboard}>Dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame8}>
        <div className={styles.frame9}>
          <div className={styles.frame10}>
            <div className={styles.frame11}>
              <div className={styles.frame12}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="/ellipse@2x.png"
                />
                <div className={styles.claudiaAlves}>Claudia Alves</div>
              </div>
              <div className={styles.frame13}>
                <div className={styles.content}>
                  <div className={styles.magnifyingglass}>
                  <div className={styles.magnifyingglass1}>🔍</div>
                  </div>
                  <input
                    className={styles.searchBar}
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frame14}>
            <div className={styles.frame15}>
              <div className={styles.frame16}>
                <div className={styles.frame17}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                    <div className={styles.rectangleDiv} />
                    <div className={styles.frameChild1} />
                    <img
                      className={styles.philippinesIcon}
                      alt=""
                      src="/philippines.svg"
                    />
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector1.svg"
                    />
                    <img className={styles.japanIcon} alt="" src="/japan.svg" />
                    <b className={styles.tokyoJapan}>Tokyo, Japan</b>
                    <div className={styles.participatesInThis}>
                      30 Participates in This Quiz
                    </div>
                    <b className={styles.hanoiVietnam}>Hanoi, Vietnam</b>
                    <div className={styles.participatesInThis1}>
                      15 Participates in This Quiz
                    </div>
                    <b className={styles.parisFrance}>Paris, France</b>
                    <div className={styles.participatesInThis2}>
                      10 Participates in This Quiz
                    </div>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector2.svg"
                    />
                    <div className={styles.hAgo}>2h Ago</div>
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector3.svg"
                    />
                    <div className={styles.hAgo1}>4h Ago</div>
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="/vector4.svg"
                    />
                    <div className={styles.hAgo2}>3h Ago</div>
                    <img
                      className={styles.vietnamIcon}
                      alt=""
                      src="/vietnam.svg"
                    />
                    <img
                      className={styles.franceIcon}
                      alt=""
                      src="/france.svg"
                    />
                    <b className={styles.history}>History</b>
                    <div className={styles.seeAll} onClick={onSeeAllTextClick}>
                      See All
                    </div>
                    <b className={styles.manilaPhilippines}>
                      Manila, Philippines
                    </b>
                    <div className={styles.participatesInThis3}>
                      20 Participates in This Quiz
                    </div>
                    <div className={styles.hAgo3}>1h Ago</div>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.frame18} />
                    <div className={styles.frame19}>
                      <div className={styles.frameChild2} />
                    </div>
                    <div className={styles.frame20}>
                      <div className={styles.frameChild3} />
                    </div>
                    <div className={styles.frame21}>
                      <div className={styles.frameChild4} />
                    </div>
                    <div className={styles.frame22}>
                      <div className={styles.frameChild5} />
                    </div>
                    <div className={styles.frame23}>
                      <div className={styles.frameChild6} />
                    </div>
                    <img className={styles.frameIcon} alt="" src="/frame.svg" />
                    <img
                      className={styles.frameIcon1}
                      alt=""
                      src="/frame1.svg"
                    />
                    <img
                      className={styles.frameIcon2}
                      alt=""
                      src="/frame2.svg"
                    />
                    <div className={styles.frame24}>
                      <div className={styles.div}>2</div>
                    </div>
                    <div className={styles.frame25}>
                      <div className={styles.div1}>3</div>
                    </div>
                    <div className={styles.frame26}>
                      <div className={styles.div2}>4</div>
                    </div>
                    <div className={styles.frame27}>
                      <div className={styles.claudiaAlves1}>Claudia Alves</div>
                    </div>
                    <div className={styles.frame28}>
                      <div className={styles.bretmanRockwell}>
                        Bretman Rockwell
                      </div>
                    </div>
                    <div className={styles.frame29}>
                      <div className={styles.janeDoe}>Jane Doe</div>
                    </div>
                    <div className={styles.frame30}>
                      <div className={styles.div3}>95</div>
                    </div>
                    <div className={styles.frame31}>
                      <div className={styles.div4}>90</div>
                    </div>
                    <div className={styles.frame32}>
                      <div className={styles.div5}>80</div>
                    </div>
                    <img
                      className={styles.frameIcon3}
                      alt=""
                      src="/frame3.svg"
                    />
                    <div className={styles.frame33}>
                      <b className={styles.leaderboard}>
                        <p className={styles.leaderboard1}>Leaderboard</p>
                      </b>
                    </div>
                    <div className={styles.frame34}>
                      <div
                        className={styles.seeAll1}
                        onClick={onSeeAllText1Click}
                      >
                        See All
                      </div>
                    </div>
                    <div className={styles.frame35}>
                      <div className={styles.div}>1</div>
                    </div>
                    <div className={styles.frame36}>
                      <div className={styles.div3}>100</div>
                    </div>
                    <div className={styles.frame37}>
                      <div className={styles.alexanderAronowitz}>
                        Alexander Aronowitz
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.frame38}>
                    <div className={styles.totalScore}>Total Score</div>
                  </div>
                  <div className={styles.frame39}>
                    <div className={styles.frame40} />
                    <div className={styles.frame41}>
                      <div className={styles.div8}>30</div>
                    </div>
                  </div>
                  <div className={styles.frame39}>
                    <div className={styles.frame40} />
                    <div className={styles.frame41}>
                      <div className={styles.div8}>30</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.popDestinationsMain}>
  <div className={styles.destinationsTitles}>
    <div className={styles.titleContainer}>
      <b className={styles.quizHistory1}>Quiz History</b>
    </div>
    <button className={styles.viewAllTop}>
      <button className={styles.removeButton} onClick={onRemoveTextClick}>
        Remove
      </button>
      <div className={styles.arrowRight} />
    </button>
  </div>
  <div className={styles.cardsContainer}>
    <button className={styles.col1}>
      <div className={styles.pariscard}>
        <img
          className={styles.parisimageIcon}
          alt=""
          src="/parisimage@2x.png"
        />
        <div className={styles.destinationDetails}>
          <b className={styles.items}>5 ITEMS</b>
          <div className={styles.details}>
            <div className={styles.div10}>3</div>
            <div className={styles.incorrect}>INCORRECT</div>
            <div className={styles.div11}>2</div>
            <div className={styles.correct}>CORRECT</div>
          </div>
        </div>
        <img
          className={styles.vectorIcon5}
          alt=""
          src="/vector5.svg"
          onClick={onVectorClick}
        />
      </div>
    </button>
    <button className={styles.col1}>
      <div className={styles.pariscard}>
        <img
          className={styles.parisimageIcon}
          alt=""
          src="/greeceimage@2x.png"
        />
        <div className={styles.destinationDetails}>
          <b className={styles.items}>10 ITEMS</b>
          <div className={styles.details1}>
            <div className={styles.div12}>5</div>
            <div className={styles.correct1}>CORRECT</div>
            <div className={styles.div13}>5</div>
            <div className={styles.incorrect1}>INCORRECT</div>
          </div>
        </div>
        <img
          className={styles.vectorIcon6}
          alt=""
          src="/vector5.svg"
          onClick={onVector1Click}
        />
      </div>
    </button>
    <button className={styles.col4} />
  </div>
  <div className={styles.viewAllBottom}>
    <div className={styles.viewAllDestinations}>View all destinations</div>
    <img className={styles.arrowRight} alt="" src="/arrowright.svg" />
  </div>
</div>

    </div>
  );
};

export default QuizHistory;
