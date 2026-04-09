// src/pages/Page3.jsx
import React, { useState, useEffect } from "react";

export default function Page3() {
  const [groups, setGroups] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);

  // Mock data with faculty added
  const mockGroups = [
    {
      _id: "1",
      name: "CSC1202 Study Squad",
      course_code: "CSC1202",
      faculty: "Engineering",
      description: "We focus on web and mobile application development concepts.",
      members: ["Alice", "Bob", "Charlie"],
      sessions: [
        { date: "2026-04-12", time: "10:00 AM", location: "Room 101" },
        { date: "2026-04-14", time: "2:00 PM", location: "Zoom Link" },
      ],
    },
    {
      _id: "2",
      name: "Math Wizards",
      course_code: "MAT1101",
      faculty: "Science",
      description: "We solve past papers and tricky exercises together.",
      members: ["David", "Eve"],
      sessions: [
        { date: "2026-04-13", time: "1:00 PM", location: "Library Hall" },
      ],
    },
    {
      _id: "3",
      name: "Physics Enthusiasts",
      course_code: "PHY1203",
      faculty: "Science",
      description: "Discuss concepts, solve problems, and prepare for exams.",
      members: ["Frank", "Grace", "Heidi"],
      sessions: [],
    },
  ];

  // Load and filter groups based on search query
  useEffect(() => {
    const filtered = mockGroups.filter(
      (group) =>
        group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.course_code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.faculty.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setGroups(filtered);
  }, [searchQuery]);

  // Handle Join Group
  const handleJoin = (groupId) => {
    alert(`You joined group with ID: ${groupId}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Study Groups</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by group name, course, or faculty..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border p-2 rounded mb-6 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.length > 0 ? (
          groups.map((group) => (
            <div
              key={group._id}
              className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer flex flex-col justify-between"
              onClick={() => setSelectedGroup(group)}
            >
              <div>
                <h2 className="font-semibold text-xl">{group.name}</h2>
                <p className="text-gray-600">{group.course_code} | {group.faculty}</p>
                <p className="mt-2">
                  {group.description.length > 60
                    ? group.description.slice(0, 60) + "..."
                    : group.description}
                </p>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <p className="text-gray-500">Members: {group.members.length}</p>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleJoin(group._id);
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No groups found.</p>
        )}
      </div>

      {/* Modal */}
      {selectedGroup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 relative shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg font-bold"
              onClick={() => setSelectedGroup(null)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-2">{selectedGroup.name}</h2>
            <p className="text-gray-600">{selectedGroup.course_code} | {selectedGroup.faculty}</p>
            <p className="mt-2">{selectedGroup.description}</p>

            <div className="mt-4">
              <h3 className="font-semibold mb-1">Members:</h3>
              {selectedGroup.members.length > 0 ? (
                <ul className="list-disc list-inside max-h-32 overflow-y-auto">
                  {selectedGroup.members.map((member, index) => (
                    <li key={index}>{member}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No members yet.</p>
              )}
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-1">Upcoming Study Sessions:</h3>
              {selectedGroup.sessions && selectedGroup.sessions.length > 0 ? (
                <ul className="list-disc list-inside max-h-32 overflow-y-auto">
                  {selectedGroup.sessions.map((session, index) => (
                    <li key={index}>
                      {session.date} at {session.time} - {session.location}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No sessions scheduled.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}