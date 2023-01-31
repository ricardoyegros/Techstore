
export default function ModalError({props}) {

  return (
    <div className="flex fixed inset-0 justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm">
        <div className="mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <div className="mt-3 text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full">
        <svg fill="#E5363D" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="cross-circle" class="icon glyph"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.71,12.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.42,9.71,15.71a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.58,12,8.29,9.71A1,1,0,0,1,9.71,8.29L12,10.58l2.29-2.29a1,1,0,0,1,1.42,1.42L13.42,12Z"></path></g>
        </svg>
        </div>
        <h3 className="text-lg mt-2 leading-6 font-medium text-primary">
          {props.titleMsg}
        </h3>
        <div className="mt-2 px-7 py-3">
          <p className="text-sm text-primary">
            {props.msgModal}
          </p>
        </div>
        <div className="items-center px-4 py-3">
          <button
          onClick={()=>{props.state(false)}}
            className="px-4 py-2 bg-error text-white
                        text-base font-medium rounded-md w-full
                        shadow-sm hover:font-semibold focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            {props.btnMsg}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
