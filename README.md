# **Look Me Up - Candidate Finder**

## Table of Contents

- [Description](#description)

- [User Story](#user-story)

- [Acceptance Criteria](#acceptance-criteria)

- [Installation](#installation-⚙️)

- [Available Scripts](#available-scripts-⚙️)

- [Tech Stack](#tech-stack-💻)

- [Development](#development)

- [Contributions](#contributions)

- [File Structure](#file-structure)

- [Acknowledgements](#acknowledgements)

- [License](#license)

## **📜 Description**

The Look Me Up - Candidate Finder is a web application designed to streamline the hiring process for employers. It allows users to search, review, and shortlist potential candidates with ease. Featuring an intuitive interface, the app displays detailed candidate profiles, supports saving preferred candidates, and provides persistent storage for selections. Whether you're hiring for a small team or a large organization, this tool simplifies candidate management and ensures you never miss out on top talent.

### **📋 Overview**

The Candidate Search Application is designed to help employers efficiently review and shortlist potential candidates. With a streamlined and interactive interface, users can quickly view candidate profiles and make decisions with just a click.

### **✨ Features**

**👉Candidate Profile Display**:  
When the candidate search page loads, a single candidate's profile is shown—including details like name, username, location, avatar, email, HTML URL, and company.  

   * 👉**Save Candidate**: Click the "+" button to add the current candidate to your list of potential hires and automatically view the next candidate.
   * 👉**Skip Candidate**: Click the "-" button to move on to the next candidate without saving the current one.                                                                                  
 
👉**Feedback When No Candidates Remain**:      
The application clearly communicates when there are no more candidates available to review.
👉**Persistent Candidate List**:
Accepted candidates are displayed on a dedicated potential candidates page, ensuring that your selections persist even after page reloads. If no candidates have been accepted, a friendly message is shown.

## 📖**User Story**

__AS AN__ employer

__I WANT__ a candidate search application

__SO THAT__ I can hire the best candidates

## **Acceptance Criteria** 

__GIVEN__ a candidate search application 

__WHEN__ the candidate search page loads

__THEN__ the information for one candidate should be displayed, including the candidate's name, username, location, avatar, email, html_url, and company

__WHEN__ I click the "+" button

__THEN__ the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed

__WHEN__ I click the "-" button

__THEN__ the next candidate's information should be displayed without saving the current candidate

__WHEN__ there are no candidates available to review

__THEN__ an appropriate message should be shown indicating no more candidates are available

__WHEN__ the potential candidates page loads

__THEN__ the user should see a list of previously saved potential candidates with their name, username, location, avatar, email, html_url, and company

__WHEN__ the page reloads

__THEN__ the list of potential candidates should persist and be available for viewing

__WHEN__ there are no potential candidates

__THEN__ an appropriate message should be displayed indicating no candidates have been accepted

__WHEN__ I click the "-" button

__THEN__ the next candidate's information should be displayed without saving the current candidate


## **Installation** ⚙️
To set up the challenge locally:

1. Clone the Repository

2. Install the Dependancies     

    | Script | Description |
    |--------|-------------|   
    | npm i| Install the dependancies |

3. Start the development server

    | Script | Description | 
    |--------|-------------|
    |npm run dev|Vite|

## **Available Scripts** ⚙️

|Script|Description|     
|--------|-------------|
|npm run dev|Runs the development server using Vite|
|npm run build|Builds the project using Typescript and Vite|
|npm run lint|Runs ESLint to check for code issues|
|npm run preview|Previews the production build locally|

## **Tech Stack** 💻

|Tech|Description|
|----|-----------|
|React|Front-end library for buildong user interfaces|
|Typescript|Provides static type checking|
|Vite|A fast build tool and development server|
|ESLint|Linting tool for maintaining code quality|
|React Router DOM|For routing within the application|
|React Icons|To include scalable icons|

## **Development**

### Prerequisites

Before starting development, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v8 or higher) or **Yarn**
- A code editor like **Visual Studio Code**

### Setup Instructions
1. Clone the repository:
   ```bash  

   git clone https://github.com/Ajthompson88/look-me-up.git

2. 
    Navigate to the project directory
    - cd look-me-up

3. 
    Start the development server:
    - npm install

    Build the project for production:
    - npm run dev 

    Run the linter to check for code issues:
    - npm run build

    Run the linter to check for code issues:
    - npm run lint

    Preview the production build locally:
    - npm run preview

### Issues

If you are having problems getting a candidate to load refer to this github document about getting a user : 

[Get A User](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user)

## Contributions 

We welcome contributions! Please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:
    ```bash 
    git checkout -b feature-name
    ```
3. Commit your changes and push the branch:
    ```bash 
    git commit -m "Add feature-name"
    git push origin feature-name
    ```
4. Open a pull request on GitHub.

##  File Structure
```
LookMeUp/
├── public/                     # Static assets (e.g., index.html, favicon)
│   └── index.html              # Main HTML file
├── src/                        # Source code
│   ├── api/                    # API utility functions
│   │   └── API.tsx             # Functions for interacting with external APIs
│   ├── components/             # Reusable UI components
│   │   ├── Header.tsx          # Example: Header component
│   │   ├── Footer.tsx          # Example: Footer component
│   │   └── CandidateCard.tsx   # Example: Candidate card component
│   ├── interfaces/             # TypeScript interfaces and types
│   │   └── Candidate.interface.tsx # Interface for Candidate objects
│   ├── pages/                  # Main application pages
│   │   └── CandidateSearch.tsx # Candidate search page
│   ├── styles/                 # Global and component-specific styles
│   │   └── global.css          # Example: Global CSS file
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   └── vite-env.d.ts           # Vite environment types
├── .eslintrc.js                # ESLint configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
├── package.json                # Project dependencies and scripts
├── README.md                   # Project documentation
└── node_modules/               # Installed dependencies (auto-generated)
```

## Acknowledgements

## Acknowledgements

We would like to thank the following resources and individuals for their contributions and support in building this project:

- [GitHub REST API Documentation](https://docs.github.com/en/rest) - For providing detailed documentation on how to interact with GitHub's API.
- [Vite](https://vitejs.dev/) - For the fast and efficient build tool used in this project.
- [React](https://reactjs.org/) - For the powerful front-end library that made building the UI seamless.
- [TypeScript](https://www.typescriptlang.org/) - For enabling static type checking and improving code quality.
- [React Router DOM](https://reactrouter.com/) - For simplifying routing within the application.
- [React Icons](https://react-icons.github.io/react-icons/) - For providing scalable and customizable icons.
- [edX Boot Camps](https://bootcamp.edx.org/) - For providing the foundational knowledge and guidance to complete this project.
- Special thanks to all contributors and reviewers who helped improve the project.

## License

[MIT LICENSE](LICENSE)