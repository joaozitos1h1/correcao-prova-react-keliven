function Section({ title, description, date, hour, local, image }) {
  return (
    <>
      <section>
        <div className="container-info">
          <div className="container-info2">
            <h1 className="title">{title}</h1>
            <p>{description}</p>
            <p>{date} às {hour}</p>
            <p>{local}</p>
          </div>
          <img src={image} />
        </div>
      </section>
    </>
  );
}

export default Section;
