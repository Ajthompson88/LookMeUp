# **Look Me Up - Candidate Finder**

## **Description**

### **Overview**

The Candidate Search Application is designed to help employers efficiently review and shortlist potential candidates. With a streamlined and interactive interface, users can quickly view candidate profiles and make decisions with just a click.

### **Features**

**Candidate Profile Display**:  
When the candidate search page loads, a single candidate's profile is shown—including details like name, username, location, avatar, email, HTML URL, and company.  

   *  **Save Candidate**: Click the "+" button to add the current candidate to your list of potential hires and automatically view the next candidate.
   * **Skip Candidate**: Click the "-" button to move on to the next candidate without saving the current one.                                                                                  
 
**Feedback When No Candidates Remain**:      
The application clearly communicates when there are no more candidates available to review.
**Persistent Candidate List**:
Accepted candidates are displayed on a dedicated potential candidates page, ensuring that your selections persist even after page reloads. If no candidates have been accepted, a friendly message is shown.

## **User Story**

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


## **Installation**
To set up the challenge locally:

1. Clone the Repository

2. Install the Dependancies     

    | Script | Description |
    |--------|-------------|   
    | npm i| Install the dependancies |

3. Start the development server

    | Script | Description | 
    |--------|-------------|
      
    |  | npm run dev | vite |  |

## **Available Scripts**

|Script|Description|     
|--------|-------------|
|npm run dev|Runs the development server using Vite|
|npm run build|Builds the project using Typescript and Vite|
|npm run lint|Runs ESLint to check for code issues|
|npm run preview|Previews the production build locally|

## **Tech Stack**

|Tech|Description|
|----|-----------|
|React|Front-end library for buildong user interfaces|
|Typescript|Provides static type checking|
|Vite|A fast build tool and development server|
|ESLint|Linting tool for maintaining code quality|
|React Router DOM|For routing within the application|
|React Icons|To include scalable icons|

## **Development**

