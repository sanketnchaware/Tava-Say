import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomHeading from "../Common/CustomHeading";
import CustomButton from "../Buttons/CustomButton";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  p: 4,
};

export default function BookTable({ isTableOpen, ToggleTable }: any) {
  const BookTable = (e: any) => {
    e.preventDefault();
  };
  return (
    <div>
      <Modal
        open={isTableOpen}
        onClose={ToggleTable}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex relative backdrop-opacity-50 flex-col gap-y-4 items-center">
            <svg
              className="absolute top-2 right-2"
              onClick={ToggleTable}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#33363F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#33363F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <CustomHeading color="black" text="RESERVATION" />
            <h6 className="text-center">Book you table now</h6>
            <div className="grid  w-full grid-cols-2 justify-between gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent px-4 py-4 border placeholder:text-black  border-BlackCoral "
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full border-BlackCoral bg-transparent px-4 py-4 border placeholder:text-black "
              />
            </div>
            <div className="gap-4 grid grid-cols-3">
              <input
                placeholder="Person"
                type="text "
                className="w-full bg-transparent px-4 py-4 border placeholder:text-black  border-BlackCoral"
              />
              <input
                placeholder="Timing"
                type="text "
                className="w-full bg-transparent px-4 py-4 border placeholder:text-black  border-BlackCoral"
              />
              <input
                placeholder="Date"
                type="text "
                className="w-full bg-transparent px-4 py-4 border placeholder:text-black  border-BlackCoral"
              />
            </div>
            <CustomButton Label="Book now" onClick={BookTable} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
