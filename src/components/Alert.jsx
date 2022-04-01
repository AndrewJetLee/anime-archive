import styled, { keyframes, css } from "styled-components";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState, useEffect, useRef } from "react";

const Alert = ({ alertStatus, message, type }) => {
  const [alert, toggleAlert] = useState(alertStatus);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      handleAlert();
    }
    return () => {
      isMounted.current = false;
    };
  }, [alertStatus]);

  

  const handleAlert = async () => {
    if (alertStatus) {
      toggleAlert(true);
      setTimeout(() => {
        toggleAlert(false);
      }, 3000);
    }
  };

  return (
    <>
      <AlertWrapper alert={alert}>
        {type === "error" ? (
          <AlertMessage>
            <ErrorOutlinedIcon className="icon" />
            {message}
          </AlertMessage>
        ) : (
          <AlertMessage>
            <CheckCircleOutlineIcon className="icon" />
            {message}
          </AlertMessage>
        )}
      </AlertWrapper>
    </>
  );
};

export default Alert;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const AlertWrapper = styled.div`
  pointer-events: none;
  opacity: 0;
  z-index: 1000;
  ${(props) =>
    props.alert
      ? css`
          opacity: 1;
          animation: ${fadeIn} 0.3s ease-in;
        `
      : css`
          opacity: 0;
          transition: opacity 0.3s ease-out;
        `};
  display: flex;
  align-items: center;
  position: fixed;
  right: 25px;
  top: 100px;
  background-color: ${(props) => props.theme.tertiary};
  color: white;
  padding: 4px 18px;
  .icon {
    font-size: 30px;
    margin-right: 10px;
  }
`;

const AlertMessage = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  font-size: 1.7rem;
`;
