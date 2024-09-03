import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contacto</h1>
      <form action="https://formspree.io/f/mrbzdpro" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            requiered
          ></input>
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            requiered
          ></input>
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Mensaje"
            requiered
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Enviar"></input>
      </form>
    </section>
  );
}

export default Contact;
