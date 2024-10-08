import React, { useContext, useEffect, useState } from "react";
import LinkBox from "@/components/LinkBox";
import UserHeader from "@/components/UserHeader";
import { toast } from "react-toastify";
import UserContext from "@/context/userContext";

const Dashboard = () => {
  const [data, setData] = useState({});
  const { setUserData } = useContext(UserContext);

  useEffect(() => {
    if (!localStorage.getItem("BioTreeToken")) {
      return (window.location.href = "/login");
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("BioTreeToken"),
      }),
    };

    fetch("https://bio-branch-server.onrender.com/data/dashboard", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "error") {
          return toast.error("Error happened");
        }
        setData(data.userData);
        setUserData(data.userData);
        localStorage.setItem("userHandle", data.userData.handle);
        // toast.success(data.message);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <UserHeader />
        <main>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 p-8">
            <LinkBox
              lbTitle="Links"
              lbNumber={data.links}
              lbSvg="email"
              lbTheme="red"
            />
            <LinkBox
              lbTitle="Total Clicks"
              lbNumber="30%"
              lbSvg="growth"
              lbTheme="yellow"
            />
            <LinkBox
              lbTitle="Total Shares"
              lbNumber="39"
              lbSvg="share"
              lbTheme="green"
            />
            <LinkBox
              lbTitle="Total Retention"
              lbNumber="50%"
              lbSvg="url"
              lbTheme="green"
            />
          </section>

          {/* New Section: Recent Activities */}
          <section className="p-8">
            <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
            <ul className="space-y-2">
              <li className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="font-semibold">Activity 1</p>
                <p className="text-sm text-gray-600">
                  Description of activity 1...
                </p>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="font-semibold">Activity 2</p>
                <p className="text-sm text-gray-600">
                  Description of activity 2...
                </p>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="font-semibold">Activity 3</p>
                <p className="text-sm text-gray-600">
                  Description of activity 3...
                </p>
              </li>
            </ul>
          </section>

          {/* New Section: User Statistics */}
          <section className="p-8">
            <h2 className="text-2xl font-bold mb-4">User Statistics</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold">Total Posts</h3>
                <p className="text-2xl">{data.totalPosts || 0}</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold">Followers</h3>
                <p className="text-2xl">{data.followers || 0}</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold">Following</h3>
                <p className="text-2xl">{data.following || 0}</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold">Likes</h3>
                <p className="text-2xl">{data.likes || 0}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
