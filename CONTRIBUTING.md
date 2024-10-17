# Contributor's Guide

## Welcome to BioBranch! 🌿

Thank you for your interest in contributing to BioBranch! This guide will help you get started with the project and make your first contribution.

---

## 🌟 Creating Your First Pull Request

1. **Fork the Repository**:
   - Go to the repository on GitHub and click "Fork."
   - In the dropdown, choose "+ Create a new Fork" and click "Create Fork."
---
   <img width="960" alt="fork" src="https://github.com/user-attachments/assets/80093759-f5cd-41aa-afa7-42126af0a65f">

---
   <img width="960" alt="create-repo" src="https://github.com/user-attachments/assets/bb1f0393-05e7-401a-b609-f3a1f10645d6">

<br>

2. **Clone the Forked Repository**:
   - From your forked repo, copy the URL:
     ```bash
     https://github.com/<your-username>/bio-branch.git
     ```
   - Clone the repository to your local machine:
     ```bash
     git clone https://github.com/<your-username>/bio-branch.git
     cd bio-branch
     ```
   - If you have already forked the project, update your copy before working:
     ```bash
     git remote update
     ```

---
<img width="960" alt="clone-repo" src="https://github.com/user-attachments/assets/240cf28d-1db4-44ec-bcd4-e5f63c6c576b">

---
<img width="960" alt="open-in-vs-code" src="https://github.com/user-attachments/assets/5318b5b2-df24-44de-a708-4476bfadad0e">

<br>

3. **Navigate to the project directory:**
    ```bash
    cd bio-branch
    ```


4. **Add Remote Upstream**:
   - Add the original repository as an upstream remote to sync future changes:
     ```bash
     git remote add upstream https://github.com/subhadipbhowmik/bio-branch.git
     ```

5. **Verify Remotes**:
   - Check that your origin and upstream remotes are set correctly:
     ```bash
     git remote -v
     ```

6. **Sync with Upstream**:
   - Pull the latest changes from the upstream repository:
     ```bash
     git pull upstream main
     ```

7. **Install Dependencies**:
   - For backend changes:
     ```bash
     cd server
     npm install
     npm start
     ```
   - For frontend changes:cd server
   
     ```bash
     cd site
     npm install
     npm run dev
     ```

8. **Create a Feature Branch**:
   - Create a new branch for your changes:
     ```bash
     git checkout -b <feature-branch>
     ```

9. **Make Changes and Track Them**:
   - After making changes, track them:
     ```bash
     git status
     git diff
     ```

10. **Commit Your Changes**:
   - Stage and commit your changes:
     ```bash
     git add .
     git commit -m "Add feature: <description>"
     ```

11. **Push Your Changes**:
    - Push your feature branch to your remote repository:
      ```bash
      git push -u origin <feature-branch>
      ```

12. **Create a Pull Request**:
    - Go to your forked repository on GitHub.
    - Click on the "Compare & pull request" button.
    - Write a title and description for your pull request.
    - Mention the issue number in the pull request description (e.g., "Fixes #1") and submit the PR.

<br>

🎉 Congratulations! You’ve made a PR to BioBranch. Wait for it to be reviewed and merged by a maintainer.

---

## Development Workflow 📈

When contributing to BioBranch, please follow these guidelines:

- Always work on a new branch for each issue or feature.
- Keep your branch updated with the main repository's master branch.
- Write clear and concise commit messages.
- Test your changes thoroughly before submitting a pull request.
- Keep discussions respectful and constructive.

---

## Issue Report Process 🚩

1. Go to the project's issues section.
2. Choose the appropriate template for your issue.
3. Provide a clear description of the issue.
4. Wait for someone to look into it before working on it.
5. Work on the issue only after it has been assigned to you.

---

## Need Help? 🤔

If you're new to Git or GitHub, check out these resources:

- [Forking a Repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
- [Cloning a Repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- [How to create a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
- [Getting started with Git and GitHub](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources)

You can also reach out to the project maintainers if you're stuck.

---

## Pull Request Process 🚀

- Ensure that your code is self-reviewed before submitting.
- Provide a detailed description of the functionality or changes made.
- Add relevant comments in your code, especially for complex sections.
- Submit your PR using the appropriate PR template.

---

## Community Guidelines 🤝

Please follow these guidelines while contributing:

- Be respectful and considerate towards others.
- Use inclusive language and foster a welcoming environment.
- Avoid personal attacks, harassment, or discrimination.
- Keep discussions focused on constructive topics.

---

## Code Reviews ✅

- Be open to feedback from other contributors.
- Participate in code reviews to help improve the project.

---

## Feature Requests 🚀

Have an idea for a new feature? Feel free to suggest improvements that can enhance BioBranch.

---

## Spread the Word ☘️

Share BioBranch with others! Promote the project on social media, developer forums, or relevant community platforms.

---

## Important Guidelines ⚡

1. Contributors should only work on issues that have been assigned to them.
2. Each pull request should be associated with one issue only.
3. No minor text edits should be submitted unless necessary.
4. Unethical behavior, tampering with files, or harassment will result in disqualification.
5. Follow the community guidelines while contributing to ensure a healthy collaborative environment.

---

Thank you for your contribution! We truly appreciate it.

## Tip from Us 😇

Learning takes time, and it's okay if things don't make sense right away. We believe in you—**you’ve got this**! 💪

Show some ❤️ by 🌟 [BioBranch](https://github.com/subhadipbhowmik/bio-branch)!