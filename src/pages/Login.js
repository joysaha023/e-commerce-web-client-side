import React from "react";

const Login = () => {
  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white max-w-md py-5 mx-auto p-2 w-full">
          <div className="w-20 h-20  mx-auto">
            <img src="https://i.ibb.co/H2Mbg8y/signin.gif" alt="icon" />
          </div>

          <form>
            <div className="grid">
              <label>Email: </label>
              <div className="bg-slate-100 p-2">
                <input type="email" placeholder="enter email" className="w-full h-full outline-none bg-transparent"/>
              </div>
            </div>

            <div>
              <label>Password: </label>
              <div className="bg-slate-100 p-2">
                <input type="password" placeholder="enter password" className="w-full h-full outline-none bg-transparent"/>
              </div>
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
