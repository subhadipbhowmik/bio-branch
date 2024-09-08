import UserHeader from "@/components/UserHeader";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Added useRouter
import Link from "next/link";
import { toast } from "react-toastify";

const Links = () => {
  // Links state
  const [links, setLinks] = useState([{ title: "", url: "" }]);
  const router = useRouter(); // Initialize useRouter

  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...links];
    updatedLinks[index] = { ...updatedLinks[index], [field]: value };
    setLinks(updatedLinks);
  };

  const handleAddLink = () => {
    setLinks([...links, { url: "", title: "" }]);
  };

  const handleRemove = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  const saveLinks = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("BioTreeToken"),
        links: links,
      }),
    };

    fetch(`http://localhost:5173/save/links`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("Links saved successfully");
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        toast.error("An error occurred while saving links.");
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("BioTreeToken")) {
      router.push("/login");
      return;
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

    fetch(`http://localhost:5173/load/links`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setLinks(data.links);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        toast.error("An error occurred while loading socials.");
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <UserHeader />
      <main className="container mx-auto p-4">
        <section>
          <h1 className="text-center font-bold text-2xl text-gray-700 mb-6">
            Add or Customize Your Links
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={saveLinks}> {/* Added onSubmit handler */}
              {links.map((link, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    URL:
                    <input
                      type="text"
                      value={link.url}
                      onChange={(e) =>
                        handleLinkChange(index, "url", e.target.value)
                      }
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </label>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title:
                    <input
                      type="text"
                      value={link.title}
                      onChange={(e) =>
                        handleLinkChange(index, "title", e.target.value)
                      }
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => handleRemove(index)}
                    className="inline-flex items-center px-4 py-2 mt-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Remove Link
                  </button>
                </div>
              ))}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleAddLink}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Link
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Links;
