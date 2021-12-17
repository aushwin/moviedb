// import ReactDOM from "react-dom";
// const Modal = ({ setShowModal }) => {
//   return ReactDOM.createPortal(
//     <div
//       onClick={() => {
//         setShowModal();
//       }}
//     >
//       <div className="bg-gray-800 w-screen h-screen top-0 opacity-90 fixed"></div>
//       <div className="flex items-center justify-center w-screen h-screen fixed top-0">
//         <div className="h-4/5 w-4/5 bg-white text-black z-20 flex items-center justify-center">
//           Hello world
//         </div>
//       </div>
//     </div>,
//     document.getElementById("app-modal")
//   );
// };

const Modal = ({ showModal, children, onClose }) => {
  if (!showModal) return null;
  return (
    <div>
      <button className="p-3 bg-green-400" onClick={onClose}>
        clik me{" "}
      </button>
    </div>
  );
};

export default Modal;
