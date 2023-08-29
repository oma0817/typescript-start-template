import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { RouteGuardType } from "../types/types";
import { twoButtonModalState } from "../utils/atom";

const RouteGuard = ({
  when,
  type,
  title,
  content,
  onClick,
  onClose,
}: RouteGuardType) => {
  const navigate = useNavigate();
  const setConfirmModal = useSetRecoilState(twoButtonModalState);

  const preventClose = (event: any) => {
    event.preventDefault();

    if (localStorage.getItem("historyLength") !== "stop") {
      setConfirmModal({
        title: title,
        text: content,
        onConfirm: type
          ? () =>
              onClick
                ? onClick()
                : window.history.pushState(null, "", window.location.href)
          : () => (onClick ? onClick() : navigate(-1)),
        onClose: type
          ? () => (onClose ? onClose() : navigate(-1))
          : () =>
              onClose
                ? onClose()
                : window.history.pushState(null, "", window.location.href),
      });
    } else {
      navigate(-1);
    }
  };

  useEffect(() => {
    if (when) {
      if (
        !localStorage.getItem("historyLength") ||
        (localStorage.getItem("historyLength") &&
          localStorage.getItem("historyLength") !== "stop" &&
          Number(localStorage.getItem("historyLength")) >=
            window.history.length)
      ) {
        if (
          !localStorage.getItem("historyLength") ||
          (localStorage.getItem("historyLength") &&
            Number(localStorage.getItem("historyLength")) ===
              window.history.length)
        ) {
          window.history.pushState(null, "", window.location.href);
          localStorage.setItem(
            "historyLength",
            window.history.length.toString()
          );
        } else {
          localStorage.setItem(
            "historyLength",
            window.history.length.toString()
          );
        }
      }

      window.addEventListener("popstate", preventClose);
    }
    return () => window.removeEventListener("popstate", preventClose);
  }, [when]);

  return <div></div>;
};

export default RouteGuard;
