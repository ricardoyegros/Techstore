import React from "react";

function CheckList() {
  return (
    <div className="flex flex-col gap-5 w-full ml-4">
        <div className="flex ">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Select you mail</p>
          <p className="text-sm">
            You will recieve just notifications, no spam we promise.
          </p>
          </div>
          <button className="bg-secondary rounded-lg p-2">Select</button>
          </div>
        <div className="flex gap-5">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Enter your name</p>
          <p className="text-sm">
           So we can know how to call you
          </p>
          </div>
          <button className="bg-secondary rounded-lg p-2">Select</button>
          </div>
        <div className="flex gap-5">
        <div className="flex flex-col w-full ">
          <p className="text-lg">Enter a password</p>
          <p className="text-sm">
          Check it's have to be between 5 and 12 characters and have a capital letter for your safety.
          </p>
          </div>
          <button className="bg-secondary rounded-lg p-2">Select</button>
          </div>
    </div>
  );
}

export default CheckList;
