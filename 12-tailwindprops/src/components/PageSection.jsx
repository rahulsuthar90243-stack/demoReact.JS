import React from "react";

export const PageSection = ({ people }) => {
  return (
    <div>
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Meet our leadership
            </h2>
          </div>

          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:col-span-2">
            
            {[...people].reverse().map((person) => (
              <li key={person.id}>
                <div className="flex items-center gap-x-6">
                  
                  <img
                    src={person.image}
                    alt={person.name}
                    className="size-16 rounded-full"
                  />

                  <div>
                    <h3 className="text-white font-semibold">
                      {person.name}
                    </h3>
                    <p className="text-indigo-400">
                      {person.role}
                    </p>
                  </div>

                </div>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
};