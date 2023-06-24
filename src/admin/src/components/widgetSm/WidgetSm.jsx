import "./widgetSm.css";

import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VmMjNjYmY2NjVkMDJiN2VhNTc3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzIwOTc3MywiZXhwIjoxNjgzNjQxNzczfQ._5KcweiVLNVKMp37CBdolAqlSdUcFU6K3WCdM4s14lc" ,
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user ,i ) => (
          <li key={i} className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
}