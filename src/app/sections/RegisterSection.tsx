import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import Button from "components/atoms/button";
import Card from "components/organisms/card";
import { useEffect, useState } from "react";

type User = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};

export const RegisterSection = () => {
  const [user, setUser] = useState<User | null>();
  const [error, setError] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const user = Object.fromEntries(formData.entries()) as User;
    setUser(null);
    // curl -v -X POST -H "Content-Type: application/json" -H '' -d '{"sample": "data"}' https://api.jsonbin.io/v3/b
    fetch("https://api.jsonbin.io/v3/b", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Key":
          "$2a$10$5JQPk1iGQdB2.tCRpWhjyeXkn3CLLloWnXUAf6hnXIOaumxbwOO8S",
        "X-Collection-Id": "6519650e12a5d3765985b71d",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status !== 200) return Promise.reject();
        setUser(user);
        setError(false);
      })
      .catch(() => setError(true));
  };
  useEffect(() => {
    if (!user) return;
  }, [user]);
  return (
    <section
      id="register"
      className="px-4 max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4 dark"
    >
      <div className="col-span-10 mb-5">
        <Card title={"Register"} description={""} Icon={RocketLaunchIcon}>
          <div className="max-w-screen-lg text-lg sm:text-xl  text-gray-300 font-medium ">
            {user ? (
              <div className="max-w-screen-lg text-lg sm:text-xl  text-gray-300 font-medium ">
                <p className="mb-10 sm:mb-11 mt-2">
                  Thank You{" "}
                  <code className="font-mono text-[#F61B1F] font-bold">
                    {user.first_name} {user.last_name}
                  </code>
                  <br />
                  We've received your information. You'll be{" "}
                  <code className="font-mono text-[#F61B1F] font-bold">
                    contacted
                  </code>{" "}
                  soon.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                {error && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-10 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline">
                      Unexpected error happened, please try again or contact us.
                    </span>
                    <span
                      className="absolute top-0 bottom-0 right-0 px-4 py-3"
                      onClick={() => setError(false)}
                    >
                      <svg
                        className="fill-current h-6 w-6 text-red-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                      </svg>
                    </span>
                  </div>
                )}
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First name
                    </label>
                    <input
                      required
                      disabled={user === null}
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last name
                    </label>
                    <input
                      required
                      disabled={user === null}
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email address
                    </label>
                    <input
                      required
                      disabled={user === null}
                      type="email"
                      id="email"
                      name="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="john.doe@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone number
                    </label>
                    <input
                      required
                      disabled={user === null}
                      type="tel"
                      id="phone"
                      name="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="12 345 678"
                      pattern="[0-9]{2} ?[0-9]{3} ?[0-9]{3}"
                    />
                  </div>
                </div>
                {user === null ? (
                  <Button type="submit" disabled>
                    Registring{" "}
                    <span className="loading loading-dots loading-xs -mb-1"></span>
                  </Button>
                ) : (
                  <Button type="submit">Register</Button>
                )}
              </form>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};
