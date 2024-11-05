import React, { useEffect, useState } from "react";

function ComponentCity() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCities = () => {
      const url = search
        ? `http://localhost:8080/api/cities/all?name=${search}`
        : "http://localhost:8080/api/cities/all";

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data.response);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    };

    fetchCities();
  }, [search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  if (loading) {
    return (
      <div className="my-auto text-4xl w-full h-[60vh] flex justify-center items-center font-bold">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="absolute w-full pt-14 left-0 flex flex-col items-center overflow-y-auto h-screen">
      <div className="rounded-lg bg-neutral-100/65 px-4 pt-6 pb-6 shadow-md ring-8 mt-5 ring-gray-900/10 sm:mx-auto sm:max-w-lg sm:px-6">
        <div className="mx-auto max-w-lg">
          <form className="relative mx-auto w-max">
            <input
              type="search"
              value={search}
              onChange={handleInputChange}
              className="peer cursor-pointer relative z-10 h-10 w-10 rounded-full border bg-transparent pl-10 outline-none focus:w-56 md:focus:w-80 lg:focus:w-96 focus:cursor-text focus:border-black focus:pl-12 focus:pr-4 font-black text-lg font-bold text-center font-mono"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-y-0 my-auto h-6 w-10 stroke-black px-2.5 peer-focus:stroke-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((city) => (
          <div
            key={city._id}
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
          >
            <div className="h-80 w-64">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={city.photo}
                alt={city.name}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-3xl font-bold text-white font-mono">
                {city.name}
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {city.description}
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComponentCity;
