'use client';
import * as React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"

const Header = ({ isHomePage = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Administration", href: "/administration" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Parents & Students", href: "/parents-&-students" },
    { label: "Photo Gallery", href: "/photo-gallery" },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full shadow-md"
        style={{ backgroundColor: "#e3f0fa" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/logo.jpeg"
                alt="Little Berries Logo"
                className="h-12 w-12 rounded-full shadow"
              />
              <span className="text-xl font-extrabold text-purple-900">
                Little Berries
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative text-base font-bold transition-all duration-300 group ${
                        isActive
                          ? "text-orange-500"
                          : "text-gray-800 hover:text-orange-500"
                      }`}
                    >
                      {item.label}

                      {/* Underline */}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-orange-400 transition-all duration-300 ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* CTA */}
            <motion.div
              className="hidden xl:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link href="/contactus">
                <motion.button
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 font-extrabold"
                  whileHover={{ scale: 1.05 }}
                >
                  Admissions
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile Button */}
            <button
              className="xl:hidden p-2"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6 text-purple-900" />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-72 flex flex-col bg-[#e3f0fa]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex justify-between p-4 border-b">
                <span className="font-bold">Menu</span>
                <X onClick={() => setIsOpen(false)} />
              </div>

              <nav className="flex flex-col p-4 gap-2">
                {navLinks.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href)

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded ${
                        isActive
                          ? "bg-yellow-100 text-orange-600"
                          : "hover:bg-purple-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header