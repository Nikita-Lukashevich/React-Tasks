import { colors } from "@mui/material";
import { AboutUsContext } from "../context/AboutUs/AboutUs";
import { useContext } from "react";

const AboutUs = () => {
  const { aboutUs, setAboutUs } = useContext(AboutUsContext);

  return (
    <div>
      <h2 className="titleCollaborator">О нас</h2>
      <p className="textCollaborator">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio accusamus sequi cum quibusdam itaque officiis deleniti neque? Accusamus, iusto repudiandae. Impedit alias nulla debitis cum, numquam mollitia assumenda saepe, labore perferendis repellat iure in aspernatur incidunt fuga id! Unde, enim nulla quisquam ex vel aliquid debitis consequuntur, cupiditate rem magnam pariatur, ab ducimus aut. Natus rerum laudantium, quibusdam recusandae impedit facere expedita earum itaque fuga incidunt provident delectus consequuntur numquam fugit consequatur quod ipsa molestiae magnam pariatur reiciendis corporis sequi aperiam modi. Officia laborum repellat deleniti quia odit laboriosam nam quam! Consequatur recusandae nesciunt unde laborum velit, quis ducimus natus magni ad, facere esse. Sunt, repellat qui laboriosam obcaecati et nam eos voluptatum laborum voluptatibus corrupti impedit adipisci velit optio quas sed necessitatibus omnis eius eveniet mollitia, odio quaerat. Officiis expedita eum eaque quod, praesentium corporis fugiat cupiditate? Reiciendis quis in nisi enim aspernatur illo esse consequuntur neque. Aliquid, ea.</p>
      <hr />
      <div className="collaborator">
        {aboutUs.map((about) => {
          return (
            <div className="cardCollaborator" key={about.id}>
                <p>{about.name}</p>
                <p>{about.speciality}</p>
                <img className="imgCollaborator" src= {about.img} alt="img" />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default AboutUs;
