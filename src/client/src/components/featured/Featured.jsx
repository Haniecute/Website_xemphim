import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});
  const [movie, setMovie] = useState({});
  

 
 
  
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VmMjNjYmY2NjVkMDJiN2VhNTc3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzQwMjUzNiwiZXhwIjoxNjg3ODM0NTM2fQ.tosml_hjCgVJ_KWMfWl2XzdK1Ua6sWksN-3QNsTJPTc"
              // +JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  console.log(content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>

          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        {/* <img src={content.imgTitle} alt="" /> */}
        <span className="desc">{content.title}</span>
        <div className="buttons">
          <Link to={{ pathname: "/player", content: content }}>
          <button className="play" >
            <PlayArrow />
            <span>Play</span>
          </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}