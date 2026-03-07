"use client";

import { useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState<string>("");

  return (
    <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h1 className="big big-2">Contact</h1>
            <h2 className="mb-4">Contact Me</h2>
            <p>Please reach me for more informations.</p>
          </div>
        </div>

        <div className="row d-flex contact-info mb-5">
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-map-signs"></span>
              </div>
              <h3 className="mb-4">Address</h3>
              <p>Chennai, Tamilnadu, India</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-phone2"></span>
              </div>
              <h3 className="mb-4">Contact Number</h3>
              <p>
                <a href="tel:+917200217424">+91 7200-21-7424</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-paper-plane"></span>
              </div>
              <h3 className="mb-4">Email Address</h3>
              <p>
                <a href="mailto:vignesh_dd@aol.com">vignesh_dd@aol.com</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-globe"></span>
              </div>
              <h3 className="mb-4">Website</h3>
              <p>
                <a
                  href="https://vigneshwaran-d.github.io/Personal_Profile/"
                  target="_blank"
                  rel="noreferrer"
                >
                  vigneshwaran-d.github.io/Personal_Profile/
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="row no-gutters block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form
              className="bg-light p-4 p-md-5 contact-form"
              onSubmit={async (event) => {
                event.preventDefault();
                setSubmitState("submitting");
                setSubmitMessage("");

                const form = event.currentTarget;
                const formData = new FormData(form);
                const payload = {
                  name: String(formData.get("name") ?? ""),
                  email: String(formData.get("email") ?? ""),
                  subject: String(formData.get("subject") ?? ""),
                  message: String(formData.get("message") ?? "")
                };

                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(payload)
                  });

                  if (!res.ok) {
                    const text = await res.text().catch(() => "");
                    throw new Error(text || `Request failed (${res.status})`);
                  }

                  setSubmitState("success");
                  setSubmitMessage("Message sent successfully!");
                  form.reset();
                } catch (err) {
                  setSubmitState("error");
                  setSubmitMessage(
                    err instanceof Error
                      ? err.message
                      : "There was an error sending your message."
                  );
                }
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  cols={30}
                  rows={7}
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value={
                    submitState === "submitting" ? "Sending..." : "Send Message"
                  }
                  className="btn btn-primary py-3 px-5"
                  disabled={submitState === "submitting"}
                />
              </div>

              {submitState !== "idle" && submitMessage ? (
                <div
                  style={{
                    marginTop: 12,
                    color: submitState === "success" ? "#0a7b34" : "#b91c1c"
                  }}
                >
                  {submitMessage}
                </div>
              ) : null}
            </form>
          </div>

          <div className="col-md-6 d-flex">
            <div
              className="img"
              style={{ backgroundImage: "url(/images/about.jpg)" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

