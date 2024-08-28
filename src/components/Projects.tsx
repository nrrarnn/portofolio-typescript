import CardProject from "./CardProject";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


interface Project {
  title: string;
  description: string;
  image: string;
  linkCode: string;
  linkWeb: string;
}

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {

  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 }, // Mulai dengan opacity 0 dan sedikit terangkat
          {
            opacity: 1,
            y: 0, // Kembali ke posisi semula
            duration: 0.8,
            delay: index * 0.2, // Tambahkan penundaan berdasarkan urutan
            ease: "power1.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%", // Mulai animasi ketika bagian atas kartu mencapai 80% dari viewport
              end: "bottom 30%", // Selesai animasi ketika bagian bawah kartu mencapai 30% dari viewport
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  const projects: Project[] = [
    {
      title: "WellEat",
      description: 'WellEat is a healthy food recipe platform that helps users discover, save their favorite food recipes.',
      image: 'welleat',
      linkCode: 'https://git.enigmacamp.com/enigma-camp/enigmacamp-2.0/batch-29-reactjs/fatwa-panatagama/well-eat-website',
      linkWeb: 'http://159.65.133.224/'
    },
    {
      title: "Ryn's Recipes",
      description: 'Ryn Recipes is a project that displays recipe data, allowing users to view detailed information and filter recipes by category.',
      image: 'recipes',
      linkCode: 'https://github.com/nrrarnn/ryn-recipes',
      linkWeb: 'https://ryn-recipes.netlify.app/'
    },
    {
      title: 'SarahShop',
      description: 'SarahShop is a sleek and user-friendly landing page designed to showcase a curated collection of products',
      image: 'shop',
      linkCode: 'https://github.com/nrrarnn/olshop-react',
      linkWeb: 'https://sarahshop.netlify.app/'
    },
    {
      title: 'Enigma Laundry',
      description: 'Enigma Laundry is a CRUD-based application designed to efficiently manage laundry services. It allows users to create, read, update, and delete records related to laundry orders',
      image: 'laundry',
      linkCode: 'https://github.com/nrrarnn/challenge-react-laundry',
      linkWeb: '-'
    },
    {
      title: 'Rin Movie',
      description: 'Ryn Movie is an application that displays a collection of movies categorized by genre. Users can browse through movies, view detailed information about each one',
      image: 'movie',
      linkCode: 'https://github.com/nrrarnn/ryn-movies-react',
      linkWeb: 'https://ar1n-movies.netlify.app'
    },
  ]

  return(
    <>
      <div className="section section-2">
          <h1 className="font-bold text-2xl">Projects</h1>
          <div className="flex flex-wrap gap-3">
            {projects.map((project, index) => (
            <div key={index} ref={(el) => (cardRefs.current[index] = el!)} >
              <CardProject
                title={project.title}
                description={project.description}
                image={project.image}
                linkCode={project.linkCode}
                linkWeb={project.linkWeb}
              />
            </div>
          ))}
          </div>
      </div>
    </>
  )
}

export default Projects;