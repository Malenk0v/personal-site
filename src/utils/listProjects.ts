import personalSite from '../img/projects/personalSite.jpg';

type url = string;

export interface Project {
  name: string;
  photo: any;
  discription: string;
  techSteck: string;
  urlGitHub: url;
  urlDeploy?: url;
}

export const listProjects: Project[] = [
  {
    name: 'Personal site',
    photo: personalSite,
    discription:
      'This site was created in order to aggregate my data as well as portfolio',
    techSteck: 'React.js, TypeScript, react-router-dom, bootstrap, HTML, CSS',
    urlGitHub: 'https://github.com/Malenk0v/personal-site',
    urlDeploy: 'https://malenk0v.github.io',
  },
];
