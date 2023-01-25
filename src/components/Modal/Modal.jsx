import { useNavigate } from "react-router-dom";

export default function Modal({title, messageModal, buttonMessage, setModal}) {
  const navigate = useNavigate();
  return (
    <div className="flex fixed inset-0 justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm">
        <div className="mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <div className="mt-3 text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-secondary">
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlnx="http://www.w.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg mt-2 leading-6 font-medium text-primary">
          {title}
        </h3>
        <div className="mt-2 px-7 py-3">
          <p className="text-sm text-primary">
            {messageModal}
          </p>
        </div>
        <div className="items-center px-4 py-3">
          <button
          onClick={()=>{setModal(false), navigate("/")}}
            className="px-4 py-2 bg-secondary text-black
                        text-base font-medium rounded-md w-full
                        shadow-sm hover:font-semibold focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            {buttonMessage}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
