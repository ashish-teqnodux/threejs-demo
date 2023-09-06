import React from "react";

const MaterialInfoPopup = ({ isOpen, onClose, materialInfo, onApply }) => {
  return (
    <div className={`fixed inset-0 ${isOpen ? "block" : "hidden"} z-10`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50"></div>

        <div className="bg-white p-8 rounded-lg shadow-lg z-20">
          <div className="text-[26px] font-semibold mb-4">
            Material Information
          </div>
          <div className="text-gray-700">
            <div>
              Material Name:{" "}
              <span className="font-semibold"> {materialInfo?.name} </span>
            </div>
            <div>
              Manufacturer: <span className="font-semibold"> Armstrong </span>
            </div>
          </div>

          <div className="mt-6 gap-2 flex justify-end items-center">
            <button
              className="bg-bgsecondery text-white px-4 py-2 rounded focus:outline-none"
              onClick={onApply}
              type="button"
            >
              Apply
            </button>
            <button
              className="bg-primary text-white px-4 py-2 rounded focus:outline-none"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialInfoPopup;
