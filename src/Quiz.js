import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Quiz.module.css";

const Quiz = () => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    //TODO: Link to dashboard
  }, []);

  const onVectorIconClick = useCallback(() => {
    navigate("/quiz2");
  }, [navigate]);

  return (
    <div className={styles.quiz}>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
      <div className={styles.desktopContainer}>
        <div className={styles.logo}>
          <img className={styles.logoIcon} alt="" src="/logo.svg" />
          <div className={styles.ethnoquest}>EthnoQuest</div>
        </div>
        <div className={styles.topItems}>
          <div className={styles.home} onClick={onHomeContainerClick}>
            <div className={styles.content}>
              <img
                className={styles.ucreateDashboardIcon}
                alt=""
                src="/ucreatedashboard.svg"
              />
              <div className={styles.label}>Home</div>
              <img
                className={styles.uangleDownIcon}
                alt=""
                src="/uangledown.svg"
              />
              <div className={styles.badge}>
                <div className={styles.div}>2</div>
              </div>
            </div>
            <div className={styles.homeChild} />
          </div>
          <div className={styles.navTextItem}>
            <div className={styles.content}>
              <img
                className={styles.ucreateDashboardIcon}
                alt=""
                src="/uclockfive.svg"
              />
              <div className={styles.label}>Quiz</div>
              <img
                className={styles.uangleDownIcon}
                alt=""
                src="/uangledown.svg"
              />
              <div className={styles.badge}>
                <div className={styles.div}>2</div>
              </div>
            </div>
            <div className={styles.homeChild} />
          </div>
        </div>
        <div className={styles.top} />
      </div>
      <div className={styles.frame}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frame1}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      </div>
      <div className={styles.frame2}>
        <div className={styles.markHuyoa}>Mark Huyoa</div>
      </div>
      <div className={styles.frame3}>
        <div className={styles.frameItem} />
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector.svg"
          onClick={onVectorIconClick}
        />
      </div>
      <div className={styles.frame4}>
        <div className={styles.whatIsThe}>
          What is the capital of Philippines?
        </div>
      </div>
      <div className={styles.frame5}>
        <div className={styles.whatIsThe}>1/5</div>
      </div>
      <div className={styles.frame6}>
        <Button
          className={styles.variantMaster}
          color="success"
          name="Choice A"
          variant="outlined"
        >
          A. Cebu
        </Button>
      </div>
      <div className={styles.frame7}>
        <Button
          className={styles.variantMaster}
          color="success"
          name="Choice C"
          variant="outlined"
        >
          C. Baguio
        </Button>
      </div>
      <div className={styles.frame8}>
        <Button
          className={styles.variantMaster2}
          color="success"
          name="Choice D"
          variant="outlined"
        >
          D. Iloilo
        </Button>
      </div>
      <div className={styles.frame9}>
        <Button
          className={styles.variantMaster2}
          color="success"
          name="Choice B"
          variant="outlined"
        >
          B. Manila
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
