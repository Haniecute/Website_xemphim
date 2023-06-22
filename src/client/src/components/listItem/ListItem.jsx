import {
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined
} from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./listItem.scss";
export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});


 

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VmMjNjYmY2NjVkMDJiN2VhNTc3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzQwMjUzNiwiZXhwIjoxNjg3ODM0NTM2fQ.tosml_hjCgVJ_KWMfWl2XzdK1Ua6sWksN-3QNsTJPTc"
            ,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.imgSm} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                
                <PlayArrow className="icon"  />
                <ThumbUpAltOutlined className="icon"  />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
              <span>{movie.year}</span>

              </div>
              <span className="limit">{movie.title}</span>

             
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
