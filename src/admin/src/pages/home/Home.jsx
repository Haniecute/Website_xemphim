import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";

import WidgetSm from "../../components/widgetSm/WidgetSm";

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
export default function Home() {
  
  const MONTHS = useMemo(() =>[
  "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[]
  )
  const [userStats, setUserStats] = useState([])

  useEffect(() => {
    const getStats = async ( ) => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VmMjNjYmY2NjVkMDJiN2VhNTc3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzIwOTc3MywiZXhwIjoxNjgzNjQxNzczfQ._5KcweiVLNVKMp37CBdolAqlSdUcFU6K3WCdM4s14lc",
          },
      });
      const statsList = res.data.sort(function (a, b) {
        return a._id - b._id;
      });
      statsList.map((item) =>
      setUserStats((prev) => [
        ...prev,
        { name: MONTHS[item._id - 1], "New User": item.total },
      ])
    );
      } catch (error) {
        console.log(error)
      }
    }
      getStats()
  },[MONTHS])
      console.log(userStats)

 
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>

      </div>
      
    </div>
  );
}
