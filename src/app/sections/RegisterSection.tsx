import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import Button from "components/atoms/button";
import Card from "components/organisms/card";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterSection = () => {
  const navigate = useNavigate();
  const chatRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({
      pathname: "chat",
      search: new URLSearchParams({
        room: chatRef.current!.value,
        user: nameRef.current!.value,
      }).toString(),
    });
  };
  return (
    <section
      id="register"
      className="px-4 max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4 dark"
    >
      <div className="col-span-10 mb-5">
        <Card title={"Chat Room"} description={""} Icon={RocketLaunchIcon}>
          <div className="max-w-screen-lg text-lg sm:text-xl  text-gray-300 font-medium ">
            <form onSubmit={onSubmit}>
              <div>
                <input
                  ref={chatRef}
                  required
                  type="text"
                  className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Room"
                />
              </div>
              <div>
                <input
                  ref={nameRef}
                  required
                  type="text"
                  className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <Button type="submit">Enter</Button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
};
