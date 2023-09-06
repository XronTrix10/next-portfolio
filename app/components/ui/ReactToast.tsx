"use client";

import { ToastContainer, toast } from "react-toastify";

import styled from "styled-components";

export { toast };

export const StyledContainer = styled(ToastContainer)`
  &&& .Toastify__toast {
    border-radius: 0.6rem;
    backdrop-filter: blur(15px);
    background: none;
    background-color: #18181886;
    min-height: fit-content;
    color: white;
    font-family: inherit;
  }
  .Toastify__close-button {
    color: white;
  }
`;
