import style from "./headerCounter.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const { container, totalNum, pumpAnimate, iconWrapper } = style;
type PropsType = {
  title: string;
  svgIcon: React.ReactNode;
  totalQuantity: number;
  to: string;
};
const HeaderCounter = ({ title, svgIcon, to, totalQuantity }: PropsType) => {
  const naviGate = useNavigate();
  const [isAnmate, setisAnmate] = useState(false);
  const quanitiyStyle = `${totalNum} ${isAnmate ? pumpAnimate : ""}`;
  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setisAnmate(true);
    const debounce = setTimeout(() => {
      setisAnmate(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [totalQuantity]);
  return (
    <>
      <div className={container} onClick={() => naviGate(to)}>
        <div className={iconWrapper}>
          {svgIcon}
          {totalQuantity > 0 && (
            <div className={quanitiyStyle}>{totalQuantity}</div>
          )}
        </div>
        <h3>{title}</h3>
      </div>
    </>
  );
};

export default HeaderCounter;
