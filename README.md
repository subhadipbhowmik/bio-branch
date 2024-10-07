# ![biobranch](https://github.com/user-attachments/assets/e12e98d6-a3d4-49c5-817e-50a89ffa3842) BioBranch 🌿

**BioBranch** is a streamlined and customizable platform that lets you manage and showcase all your social media handles and important links in one place. Inspired by Linktree, BioBranch offers an easy-to-use interface for creating a personal landing page where you can share your online presence with the world.

<div align="center">
<p>
  
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)
![GitHub forks](https://img.shields.io/github/forks/subhadipbhowmik/bio-branch)
![GitHub Repo stars](https://img.shields.io/github/stars/subhadipbhowmik/bio-branch)
![GitHub contributors](https://img.shields.io/github/contributors/subhadipbhowmik/bio-branch)
![GitHub last commit](https://img.shields.io/github/last-commit/subhadipbhowmik/bio-branch)
![GitHub repo size](https://img.shields.io/github/repo-size/subhadipbhowmik/bio-branch)
![GitHub total lines](https://sloc.xyz/github/subhadipbhowmik/bio-branch)
![Github](https://img.shields.io/github/license/subhadipbhowmik/bio-branch)
![GitHub issues](https://img.shields.io/github/issues/subhadipbhowmik/bio-branch)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/subhadipbhowmik/bio-branch)
![GitHub pull requests](https://img.shields.io/github/issues-pr/subhadipbhowmik/bio-branch)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/subhadipbhowmik/bio-branch)
</p>
</div>

## ✨ **Key Features**

- **🎨 Customizable Profiles**: Personalize your BioBranch page with themes, colors, and styles that perfectly match your brand's vibe.
- **🔗 Effortless Link Management**: Easily add, remove, or rearrange your links with a user-friendly dashboard designed for smooth updates.
- **📊 Analytics at Your Fingertips**: Track clicks and visitor stats in real-time to optimize your online presence and engagement.
- **📱 Fully Responsive Design**: Whether on mobile, tablet, or desktop, your BioBranch page will always look stunning and accessible.
- **🔒 Secure & Private**: Your data stays safe with top-notch security and privacy controls, giving you peace of mind while focusing on growth.


## 🚀 **Live Demo**

- **Live**: [BioBranch](https://biobranch.vercel.app/)  

---

## 🛠️ **Tech Stack**

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Framework-Next.js-black?logo=next.js&logoColor=white)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Framework-Express.js-black?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Styles-Tailwind_CSS-38b2ac?logo=tailwind-css&logoColor=white)
![Google Analytics](https://img.shields.io/badge/Analytics-Google_Analytics-orange?logo=google-analytics&logoColor=white)
![HTML5](https://img.shields.io/badge/Markup-HTML5-orange?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/Styles-CSS3-blue?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?logo=javascript&logoColor=white)
![Vercel](https://img.shields.io/badge/Hosting-Vercel-black?logo=vercel&logoColor=white)


---

## 👨‍💻 **Getting Started with Contributions** 👩‍💻

-  We welcome all interested developers to contribute in improving BioBranch and start building your own BioBranch profile to simplify the way you share your digital footprint! Whether you're adding features or fixing bugs, your contributions will make this project better.
-  Follow the steps below to get started:-

1. **Fork the Repository**:
   - Go to the repository on GitHub and click the "Fork" button.
      - <i>Dropdown menu --> "+ Create a new Fork" </i>
      
      ![step1](https://github.com/user-attachments/assets/d9e82970-f403-41bf-b4b6-cc3052616b3e)
     
      - <i>Dont change the suggested repo name and just click on "Create Fork" button.</i>
      
      ![biobranch](https://github.com/user-attachments/assets/d57fe9a8-09ca-4a8e-9541-e58bcf127aa4)
   
      - <i> Congratulations! 🎊 you have successfully created a copy of our repo!🎊</i>


2. **Now, from your forked repo, click on the "<> code" button and copy the url**:
   
   - the forked url looks like this
     
     
   ```bash
    https://github.com/<your  username>/bio-branch.git
   ```
   
  ![biob2](https://github.com/user-attachments/assets/4a32f255-bd8f-42a1-b79e-3588ccf7a5ac)


3. **Open your IDE(Visual studio code or other), paste the above url in vs code terminal or git bash and navigate into the directory**:
   ```bash
    git clone https://github.com/<your  username>/bio-branch.git
    cd bio-branch
   ```
   
    ![bb3](https://github.com/user-attachments/assets/7bcd6d4c-0235-4472-8d46-d67f3c4f6739)
   
    ![bb2](https://github.com/user-attachments/assets/48069088-1373-4ff8-9c25-00fa4cfcf0ff)

   
4. **Add a Remote upstream to original repo for reference**:
   
- In this way, you can feasibly update your forked repo with the original repo changes. Ensure you execute this cmd in the "bio-branch" directory
  
   ```bash
   git remote add upstream https://github.com/subhadipbhowmik/bio-branch.git
   

5. **Verify remote origin and upstream**:
   
   ```bash
   git remote -v
   
  -  the following response appear:
  ```bash
   origin  https://github.com/<your username>/bio-branch.git (fetch)
   origin  https://github.com/<your username>/bio-branch.git (push)
  upstream https://github.com/subhadipbhowmik/bio-branch.git (fetch)
  upstream https://github.com/subhadipbhowmik/bio-branch.git (push) 
```

6. **Always make a pull from the upstream repository to your main branch to keep it updated with the original repository.**
   -  Ensure you are in the main bio-branch directory
   ```bash
   git pull upstream main
   
7. **Install the dependencies**:
   

- Backend changes:
  ```bash
   cd server
   npm install / yarn start
   npm start
  
- Now-
  
   <code>Server is running at http://localhost:4000</code>

- Frontend changes:
  ```bash
  cd site
  npm install
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  
- Now, the frontend is running locally-
  
  <code>ready - started server on 0.0.0.0:3000, url: http://localhost:3000</code>
  You can start editing the page by modifying pages/index.js. The page auto-updates as you edit the file.
   
8. **Create a new branch**:
   
   ```bash
   git checkout -b <feature-branch>

9. **Work on the issue**:
- Perform the proposed changes in your new branch and ensure everything works.

10. **Track your changes**:
    
    ```bash
    git status
    git diff

11. **Stage and Commit your changes**:
   ```bash
   git add .
   git commit -m "Add feature: <description>"
```

12. **Ensure you push the committed changes in your feature branch to your own remote repository**
    ```bash
    git push -u origin <feature-branch>

13. **Next, create a Pull Request**
    - Go to your forked repository on GitHub, click "Compare & pull request."
    - Provide a descriptive title and summary for your PR.
    - Click on "Create pull request" to submit your PR for review!
      
---

- 🎇 Hurray!🎉, you have made a PR to the BioBranch. Sit back and wait for your submission to be accepted and your PR to be merged by a maintainer.

---

##  **🏆 Contribution Guidelines 📑**
- Ensure that the code you write follows best practices and is well documented.
- Test your changes before submitting a pull request.
- Keep your branch updated with the main branch to avoid conflicts.
- Be clear and concise in your pull request titles and descriptions.

---
## 📢Contributors📢

<a href="https://github.com/subhadipbhowmik/bio-branch/graphs/contributors"> <img src="https://contrib.rocks/image?repo=subhadipbhowmik/bio-branch" /> </a>

---
## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/subhadipbhowmik/bio-branch/blob/main/LICENSE.md) file for more details.

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License: MIT">
</p>

<p align="right"><a href="#top"><img src="https://img.shields.io/badge/Move%20to%20top-Blue?style=plastic" alt="Back To Top"></a></p>

--- 

## **🌟 Show your support ⭐**
Give this project a ⭐ if you find it engaging and helpful! Feel Free to reach out.

