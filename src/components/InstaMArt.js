import { useState } from "react";

const Section = ({ title, description, isvisible, setIsVisible }) => {
  return (
    <div className="p-2 m-2 border border-black ">
      <h3 className="font-bold text-xl">{title}</h3>
      <button
        className="border border-blue-600 box-content"
        onClick={() => {
          setIsVisible(!isvisible);
          
        }}
      >
        {!isvisible ? "Show" : "Hide"}
      </button>
      {isvisible && <p>{description}</p>}
    </div>
  );
};
const InstaMart = () => {
  const [visibleSection, setvisibleSection] = useState("");
  return (
    <div>
      <Section
        title={"About Instamart"}
        isvisible={visibleSection === "about"}
        setIsVisible={() => {
          visibleSection === "about"
            ? setvisibleSection("")
            : setvisibleSection("about");
        }}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cumque reiciendis vero perspiciatis, veniam quidem architecto nobis aliquid dolore assumenda doloremque explicabo nisi, eligendi, temporibus ducimus facilis culpa cum autem?"
      />
      <Section
        title={"Team in Instamart"}
        isvisible={visibleSection === "team"}
        setIsVisible={() => {
          visibleSection === "team"
            ? setvisibleSection("")
            : setvisibleSection("team");
        }}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cumque reiciendis vero perspiciatis, veniam quidem architecto nobis aliquid dolore assumenda doloremque explicabo nisi, eligendi, temporibus ducimus facilis culpa cum autem?"
      />
      <Section
        title={"Carrer Instamart"}
        isvisible={visibleSection === "career"}
        setIsVisible={() => {
          visibleSection === "career"
            ? setvisibleSection("")
            : setvisibleSection("career");
        }}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cumque reiciendis vero perspiciatis, veniam quidem architecto nobis aliquid dolore assumenda doloremque explicabo nisi, eligendi, temporibus ducimus facilis culpa cum autem?"
      />
    </div>
  );
};

export default InstaMart;
