# **Look Me Up - Candidate Finder**

## **Description**

### **Overview**

    The Candidate Search Application is designed to help employers efficiently review and shortlist potential candidates. With a streamlined and interactive interface, users can quickly view candidate profiles and make decisions with just a click.

### **Features**

**Candidate Profile Display**:

    When the candidate search page loads, a single candidate's profile is shown—including details like name, username, location, avatar, email, HTML URL, and company.

    Save Candidate: Click the "+" button to add the current candidate to your list of potential hires and automatically view the next candidate. **

    Skip Candidate: Click the "-" button to move on to the next candidate without saving the current one.                                                                                  
 
**Feedback When No Candidates Remain**:    

    The application clearly communicates when there are no more candidates available to review.

**Persistent Candidate List**:

    Accepted candidates are displayed on a dedicated potential candidates page, ensuring that your selections persist even after page reloads. If no candidates have been accepted, a friendly message is shown.

## **User Story**

    AS AN employer

    I WANT a candidate search application

    SO THAT I can hire the best candidates

## **Acceptance Criteria** 

    GIVEN a candidate search application 

    WHEN the candidate search page loads

    THEN the information for one candidate should be displayed, including the candidate's name, username, location, avatar, email, html_url, and company

    WHEN I click the "+" button

    THEN the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed

    WHEN I click the "-" button

    THEN the next candidate's information should be displayed without saving the current candidate

    WHEN there are no candidates available to review

    THEN an appropriate message should be shown indicating no more candidates are available

    WHEN the potential candidates page loads

    THEN the user should see a list of previously saved potential candidates with their name, username, location, avatar, email, html_url, and company

    WHEN the page reloads

    WHEN the list of potential candidates should persist and be available for viewing

    WHEN there are no potential candidates

    THEN an appropriate message should be displayed indicating no candidates have been accepted

    WHEN I click the "-" button

    THEN the next candidate's information should be displayed without saving the current candidate

