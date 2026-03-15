import Button from "../ui/Button"

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl font-bold mb-6">Work With Us</h2>

      <p className="text-neutral-400 mb-8">
        Interested in working together? Let's create something amazing.
      </p>

      <div className="flex justify-center gap-4">
        <Button link="mailto:kanacreative@email.com">
          Send Email
        </Button>

        <Button link="https://wa.me/62xxxxxxxx">
          WhatsApp
        </Button>
      </div>
    </section>
  )
}