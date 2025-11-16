function About() {
  return (
    <>
<div className="container py-5">
  <div className="row align-items-start">
    <div className="col-md-3 mb-4">
      <h2 className=" text-uppercase text-black border-start border-4 ps-3" style={{borderColor: "#000"}}>
        About Me
      </h2>
    </div>
    <div className="col-md-9">
      <p className="text-black lh-lg">
        Motivated web developer with hands-on training in both front-end and
        back-end development. Skilled in building responsive user interfaces
        using HTML, CSS, JavaScript, Bootstrap, Tailwind and familiar with
        modern frameworks such as React and Angular. On the backend side,
        trained in PHP (Laravel) and database design with MySQL, focusing on
        creating reliable and efficient server-side applications. Experienced
        with Git/GitHub, agile teamwork, and the software development lifecycle
        (SDLC). Passionate about continuous learning, problem-solving, and
        developing scalable solutions while aiming to grow into a professional
        full-stack developer.
      </p>

      {/* زرار الـ CV */}
      <a
        href="/Aya-Hamed-CV.pdf"
        download
        className="btn btn-dark btn-lg px-4 py-2"
      >
        Download CV
      </a>
    </div>

  </div>
</div>

    </>
  );
}
export default About;
