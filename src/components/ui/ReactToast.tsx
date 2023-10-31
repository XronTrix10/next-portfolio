"use client";

import { ToastContainer } from "react-toastify";

import styled from "styled-components";

export { toast } from "react-toastify";

export const StyledContainer = styled(ToastContainer)`
  &&& .Toastify__toast {
    border-radius: 0.6rem;
    backdrop-filter: blur(15px);
    background: none;
    background-color: #18181886;
    min-height: fit-content;
    color: white;
    font-family: inherit;
    font-size: 0.8rem;
  }
  .Toastify__close-button {
    color: white;
  }
`;
