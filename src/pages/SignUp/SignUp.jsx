import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <div className="w-4/12 mx-auto mt-16 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered input-sm"
              />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Email"
                className="input input-bordered input-sm"
              />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Password"
                className="input input-bordered input-sm"
              />

              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Confirm Password"
                className="input input-bordered input-sm"
              />

              {errors.password?.type === "required" && <p className="text-red-600">Password is required</p>}
              {errors.password?.type === "minLength" && <p className="text-red-600">Password must be 6 characters</p>}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">Password must be less than 20 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number and one special character.
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p>
            <small>
              Already have an account <Link to="/login">Login</Link>
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
