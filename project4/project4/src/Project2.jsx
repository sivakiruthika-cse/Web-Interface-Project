import "./Project2.css";

function HobbyCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.hobbyName} />

      <h2>{props.hobbyName}</h2>

      <p>{props.description}</p>
    </div>
  );
}

function Project2() {
  return (
    <div className="project">
      <h1>Student Hobby</h1>

      <div className="cards">

        <HobbyCard
          hobbyName="Reading"
          description="I like reading books."
          image="https://via.placeholder.com/200"
        />

        <HobbyCard
          hobbyName="Drawing"
          description="I like drawing pictures."
          image="https://via.placeholder.com/200"
        />

        <HobbyCard
          hobbyName="Music"
          description="I like listening to music."
          image="https://via.placeholder.com/200"
        />

        <HobbyCard
          hobbyName="Dancing"
          description="I like dancing."
          image="https://via.placeholder.com/200"
        />

        <HobbyCard
          hobbyName="Cooking"
          description="I like cooking food."
          image="https://via.placeholder.com/200"
        />

        <HobbyCard
          hobbyName="Photography"
          description="I like taking photos."
          image="https://via.placeholder.com/200"
        />

      </div>
    </div>
  );
}

export default Project2;