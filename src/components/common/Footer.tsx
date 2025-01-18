"use client";

import StakkLogoWide from "./LogoWide";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border-light/50 mt-24">
      <div className="w-full lg:w-lg mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <StakkLogoWide />
            <p className="text-secondary text-sm">
              AI-powered staking for the decentralized future.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank">
                  <FaTwitter className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank">
                  <FaGithub className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://discord.com" target="_blank">
                  <FaDiscord className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold mb-2">Product</h3>
            <Link
              href="/"
              className="text-secondary text-sm hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="/"
              className="text-secondary text-sm hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="text-secondary text-sm hover:text-primary"
            >
              Security
            </Link>
            <Link
              href="/"
              className="text-secondary text-sm hover:text-primary"
            >
              Status
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold mb-2">Company</h3>
            <Link
              href="/"
              className="text-secondary text-sm hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-secondary text-sm hover:text-primary"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-secondary text-sm hover:text-primary"
            >
              Careers
            </Link>
            <Link
              href="/"
              className="text-secondary text-sm hover:text-primary"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold mb-2">Legal</h3>
            <Link
              href="/"
              className="text-secondary text-sm hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-secondary text-sm hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="text-secondary text-sm hover:text-primary"
            >
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border-light/20 mt-8 pt-8 text-center md:text-left">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Stakk Finance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
