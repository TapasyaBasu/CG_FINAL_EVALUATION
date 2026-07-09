import "./Home.css";

function Home() {
  return (
    <div className="home">

      <h1>{import.meta.env.VITE_APP_TITLE}</h1>

      <p>
        Welcome to the Product Store Application.
      </p>

    </div>
  );
}

export default Home;