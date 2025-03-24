"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import GitHubStars from "@/components/GitHubStars";

const projects = [
  {
    id: "firepit",
    title: "Firepit",
    description: "A Hypixel Pit mod made for Forge 1.8.9",
    longDescription: "This reposity contains the source code as well as a downloadable Firepit.jar file to allow you to automate AFK:ing in The Pit on Hypixel. (This repository is currently private due to being a work in progress)",
    features: [
      "Automatic Pit rejoin",
      "Event notifier",
      "Auto \"Quick-Maths\"",
      "Webhook Integration"
    ],
    link: "https://github.com/its-Jaxx/Firepit",
    fallbackStars: 0,
    tags: ["The Pit", "Hypixel", "Java", "Mod", "WIP"]
  },
  {
    id: "duelsx",
    title: "DuelsX",
    description: "A Hypixel Duels mod made for Forge 1.8.9",
    longDescription: "This repository contains the source code as well as a downloadable DuelsX.jar file to allow you to automate battling in duels on Hypixel. (This repository is currently private due to being a work in progress)",
    features: [
      "Automatic fighting",
      "Webhook Integration"
    ],
    link: "https://github.com/its-Jaxx/duels-x",
    fallbackStars: 0,
    tags: ["Duels", "Hacking", "Hypixel", "Java", "Mod", "WIP"]
  },
  {
    id: "github-site",
    title: "My website",
    description: "My website, mostly created by \"5mukx\"",
    longDescription: "Contains all the source code for this website, check out the `README.md` file for a direct link to 5mukx's repo of this website.",
    link: "https://github.com/its-Jaxx/its-Jaxx.",
    fallbackStars: 0,
    tags: ["Website", "5mukx"]
  }
];

export default function ProjectsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-muted-foreground">
              Detailed information as well as links to my projects.
              <br></br>
              Currently, most of my repositories are privated due to not being finished yet.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                id={project.id}
                className="scroll-mt-20"
              >
                <Card className="bg-secondary/20 border-border hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      <Link href={project.link} target="_blank" className="hover:text-purple-400 transition-colors flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {project.longDescription}
                    </p>

                    {project.features && (
                      <div className="mt-4">
                        <p className="font-medium mb-2">Key Features:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          {project.features.map((feature, index) => (
                            <li key={index} className="text-muted-foreground">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary rounded-md text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <GitHubStars
                      repoUrl={project.link}
                      fallbackCount={project.fallbackStars}
                      className="text-muted-foreground"
                    />
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.link} target="_blank" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        View Repository
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
