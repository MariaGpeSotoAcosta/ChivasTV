# 🚀 React Project Setup & Workflow

This is a React-based web application cloned from a Git repository. The goal is to set it up locally, make changes on your own branch, and contribute efficiently.

---

## Getting Started

### 1. Clone the Repository

  ```
  git clone https://github.com/MariaGpeSotoAcosta/ChivasTV.git
  cd your-repo-name
  ```

### 2. Install Dependencies
  
    npm install
    
### 3. Start the Development Server
```bash
npm run dev
```
## Making changes
### 1. Create and push a branch
### Make sure you’re on the latest version of main:
```bash
git checkout main
git pull origin main
```
### 2. Create a new branch with your own name NOT your-branch-name
```bash
git checkout -b your-branch-name 
```

### 3. Make your changes (e.g., update App.jsx):
```jsx
<h1>Welcome to ChivasTV – Updated by YOURNAME 🚀</h1>
```
### 4. Stage, commit, and push:
```bash
git add .
git commit -m "Update App header from YOURNAME's branch"
git push origin your-branch-name
```
## Merge changes from your branch into the main branch via a pull request
### 1. Ensure you’ve made changes in your feature branch:
### Before merging, ensure you've committed and pushed the changes in your feature branch.
```bash
git checkout your-branch-name    # Make sure you're on your feature branch
git add .                        # Stage your changes
git commit -m "Description of your changes"
git push origin your-branch-name # Push the changes to your branch
```
### 2. Create a Pull Request (PR) to merge changes into main:
a. Go to GitHub:
    Once your branch is pushed to GitHub, go to the repository in your browser.

b. Create a New Pull Request:
Click on the Pull Requests tab at the top of the GitHub page.

Click on the green button "New pull request".

c. Choose the branches to compare:
Base branch: Select main (this is the branch you want to merge your changes into).

Compare branch: Select the branch you’ve been working on (the branch with your changes).

GitHub will show a comparison of changes between main and your feature branch.

d. Fill in the PR details:
Provide a title (e.g., "Merging changes from feature branch").

Optionally, write a description explaining the changes you made.

e. Create the Pull Request:
Click the green "Create pull request" button. This will create a request to merge your feature branch into the main branch.

### 3. Review and Merge the Pull Request:
Once the pull request is created:

Review the changes yourself or ask someone to review it.

Once everything looks good, click Merge pull request to merge the changes from your branch into main.

Confirm the merge.
###  4. Pull the Latest Changes to main (optional, if needed)::
After merging the pull request, make sure to pull the latest changes from main into your local machine:
```bash
git checkout main       # Switch to the main branch
git pull origin main    # Pull the latest changes from GitHub
```


