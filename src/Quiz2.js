import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Quiz2.module.css";

const Quiz2 = () => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    //TODO: Link to dashboard
  }, []);

  const onVectorIconClick = useCallback(() => {
    navigate("/quiz2");
  }, [navigate]);

  return (
    <div className={styles.quiz2}>
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
          <div className={styles.quiz}>
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
        <div className={styles.frameItem} />
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector.svg"
          onClick={onVectorIconClick}
        />
        <div className={styles.frame3}>
          <Button
            className={styles.variantMaster}
            sx={{ width: 142 }}
            color="success"
            name="Choice A"
            variant="outlined"
          >
            A. Cebu
          </Button>
        </div>
        <Button
          className={styles.variantMaster1}
          sx={{ width: 142 }}
          color="success"
          name="Choice A"
          variant="outlined"
        >
          A. Cebu
        </Button>
      </div>
      <div className={styles.frame4}>
        <div className={styles.whichCityServes}>
          Which city serves as the capital of Australia?
        </div>
      </div>
      <div className={styles.frame5}>
        <Button
          className={styles.variantMaster}
          color="success"
          name="Choice A"
          variant="outlined"
        >
          A. Cebu
        </Button>
      </div>
      <div className={styles.frame6}>
        <Button
          className={styles.variantMaster}
          color="success"
          name="Choice C"
          variant="outlined"
        >
          C. Baguio
        </Button>
      </div>
    </div>
  );
};

export default Quiz2;
