import Link from "next/link";
import { Gamepad2, Github, Triangle } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="w-full py-6 md:py-8 bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} aftxrlifx. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/its-Jaxx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://discord.com/users/849394277623922738/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Discord"
            >
              <Gamepad2 className="h-5 w-5" />
            </Link>
            <Link
              href="https://nixware.cc/x/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Medium"
            >
              <Triangle className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <Separator className="my-4" />
      </div>
    </footer>
  );
}
