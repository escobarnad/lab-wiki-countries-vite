function HomePage() {
  return (
    <>
      <div
        className="container"
        style={{ maxHeight: "90vh", overflow: "scroll" }}
      >
        <h1 style={{ fontSize: "24px" }}>
          WikiCountries: Your Guide to the World
        </h1>
      </div>
      <div className="list-group"></div>
    </>
  );
}

export default HomePage;
