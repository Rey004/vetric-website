import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <section className="form-section">
      <div className="form-left">
        <h2>Get in touch</h2>
        <p>Contact us for additional details or assistance.</p>
      </div>

      <div className="form-right">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            <span className="label-text">Name</span>
            <input className="form-input" type="text" name="name" placeholder="Name" />
          </label>

          <label>
            <span className="label-text">E-mail</span>
            <input className="form-input" type="email" name="email" placeholder="E-mail" />
          </label>

          <label>
            <span className="label-text">Message</span>
            <textarea className="form-input textarea" name="message" placeholder="Add your message" rows={6} />
          </label>

          <div className="form-actions">
            <button className="submit-btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form
