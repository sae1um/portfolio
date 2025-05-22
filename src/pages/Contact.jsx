import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Stars, CheckCircle2, AlertCircle } from "lucide-react"
import DownloadCVButton from "../components/DownloadCVButton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"
export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState("idle")

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    try {
      // Replace with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormStatus("success")
      setFormState({ name: "", email: "", message: "" })
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000);
    } catch (error) {
      setFormStatus("error")
    }
  }

  return (
    <section id="contact" className="relative min-h-screen w-full bg-black py-20 mt-20">
      {/* Star effect background */}
      <div className="absolute inset-0 overflow-hidden">
        <Stars className="h-full w-full opacity-10 text-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">Get In Touch</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Have a project in mind or just want to chat? Feel free to reach out! I'm always open to discussing new
            projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-12">
          {/* Left column - Contact info */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-gray-800 bg-black/50 backdrop-blur-sm">
              <div className="relative h-40 bg-gradient-to-r from-[#64B5F6]/20 to-purple-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mail className="h-20 w-20 text-[#64B5F6]/30" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-6 text-xl font-semibold text-white">Contact Information</h3>

                <div className="space-y-6">
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-400">Email</p>
                    <a
                      href="mailto:godswillerh@gmail.com"
                      className="text-lg text-[#64B5F6] transition-colors hover:text-[#81D4FA]"
                    >
                      godswillerh@gmail.com
                    </a>
                  </div>

                  <div>
                    <DownloadCVButton />
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-black/30 p-4">
                    <p className="text-gray-300">
                      Currently available for Degree Apprenticeships and open to full-time opportunities. Let's create something
                      amazing together!
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right column - Contact form */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-gray-800 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-semibold text-white">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="border-gray-800 bg-black/30 text-white placeholder:text-gray-500 focus:border-[#64B5F6] focus:ring-[#64B5F6]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="border-gray-800 bg-black/30 text-white placeholder:text-gray-500 focus:border-[#64B5F6] focus:ring-[#64B5F6]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to talk about..."
                    required
                    className="min-h-[150px] border-gray-800 bg-black/30 text-white placeholder:text-gray-500 focus:border-[#64B5F6] focus:ring-[#64B5F6]"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-[#64B5F6] text-black hover:bg-[#81D4FA]"
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>

                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-md bg-green-500/20 p-3 text-green-400"
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-md bg-red-500/20 p-3 text-red-400"
                  >
                    <AlertCircle className="h-5 w-5" />
                    <span>Oops! Something went wrong. Please try again later.</span>
                  </motion.div>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
