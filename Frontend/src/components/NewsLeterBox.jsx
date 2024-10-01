import React from "react";

function NewsLeterBox() {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        
    }
  return (
    <div className=" text-center ">
      <p
        className="text-2xl font-medium text-gray-800
            "
      >
        Subscribe now & get 20% off
          </p>
          <p className=" text-gray-400 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eum expedita eos saepe natus, maxime.</p>
          <form className="w-full sm:w-2/4 flex items-center gap-3 mx-auto my-6 border pl-3" onSubmit={onSubmitHandler}>
              <input className="w-full flex outline-none" type="email" placeholder="Enter your email"
                  required />
              <button className="bg-black text-white text-xs px-10 py-4" type="submit">
                  SUBSCRIBE
              </button>
          </form>
    </div>
  );
}

export default NewsLeterBox;
