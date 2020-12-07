import React from "react";

const profileData = {
  a: {
    name: "aaa",
    description: "aaa_description",
  },

  b: {
    name: "bbb",
    description: "bbb_description",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  //   console.log(match);
  //   console.log(match.params);
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
