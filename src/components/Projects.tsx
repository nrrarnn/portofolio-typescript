import CardProject from "./CardProject";


interface Project {
  title: string;
  description: string;
  image: string;
  linkCode: string;
  linkWeb: string;
}


export default function Projects(){

  const projects: Project[] = [
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
            <CardProject
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              linkCode={project.linkCode}
              linkWeb={project.linkWeb}
            />
          ))}
          </div>
      </div>
    </>
  )
}