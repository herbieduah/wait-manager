import "./App.scss";

function Contact() {
  return (
    <section className="contact container">
      <p className="contact__header">Contact us to learn more.</p>
      <div className="contact__container">
        <span className="contact__type">email</span>
        <span className="contact__info">vuks.amonju@cvatechventure.com</span>
      </div>
      <div className="contact__container">
        <span className="contact__type">phone</span>
        <span className="contact__info">1.832.236.0609</span>
      </div>
      <div className="contact__container">
        <span className="contact__type">address</span>
        <span className="contact__info">17311 Currawong Court Cypress, TX 77433</span>
      </div>
      <p className="contact__copyright">Copyright CVA Ventures © 2021</p>
    </section>
  );
}

export default Contact;
