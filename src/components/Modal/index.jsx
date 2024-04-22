import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";

const Modal = ({ data, onClose }) => {
  console.warn("Modal Data", data); /// TODO: not working properly
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="content-main">
          <h1> Suggested Portfolio </h1>
          {data.loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress size={25} />
            </Box>
          ) : (
            data.messageContent
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
