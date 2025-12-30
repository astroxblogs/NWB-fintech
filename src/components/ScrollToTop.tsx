import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Force instant scroll to top to override global smooth scrolling
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant" as ScrollBehavior,
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
