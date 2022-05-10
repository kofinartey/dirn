import { useEffect } from "react";
import { useLocation } from "react-router";

type ScrollToTopProps = {
  children: React.ReactNode;
};

const ScrollToTop = (props: ScrollToTopProps) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
