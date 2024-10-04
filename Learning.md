```html
<div align=center>
  <h2>This Project is a part of</h2>
  <img alt="BioBranch" src="https://raw.githubusercontent.com/subhadipbhowmik/bio-branch/main/assets/logo.png" width=87%>
</div>

<br/>

<div align="center">
<h1>
  <font size="10">BioBranch 🌿</font>
</h1>
</div>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#1-project-description">Project Description</a></li>
    <li><a href="#2-tech-stack">Tech Stack</a></li>
    <li><a href="#3-folder-structure">Project Structure</a></li>
    <li><a href="#4-running-the-project-locally">Running the Project Locally</a></li>
    <li><a href="#5-contributing">Contributing</a></li>
  </ol>
</details>

# <a name="1-project-description">Project Description:</a>

**BioBranch** is a streamlined platform that helps users create customizable landing pages to showcase all their social media handles and important links. It's designed to be fast, user-friendly, and responsive on all devices, providing a one-stop solution for digital presence management.

## <a name="2-tech-stack">Tech Stack:</a>

To contribute to BioBranch, you need the following technologies:

1. **Node.js** (for the server-side)
2. **Express.js** (for building APIs)
3. **MongoDB** (for database)
4. **HTML/CSS** (for front-end design)
5. **JavaScript**
6. **React.js** (for the site front-end)
7. **Markdown**

If you're new, you can start by learning React.js, and progressively get into the others as needed.

# <a name="3-folder-structure">Project Structure:</a>

Here's an overview of the **BioBranch** folder structure:

```bash
bio-branch
├── server 📂
│   ├── app.js
│   ├── routes 📂
│   │   └── userRoutes.js
│   └── models 📂
│       └── userModel.js
│   └── config 📂
│       └── db.js
│
├── site 📂
│   ├── src 📂
│   │   ├── components 📂
│   │   │   └── Navbar.js
│   │   ├── pages 📂
│   │   │   └── Home.js
│   │   └── App.js
│   └── public 📂
│       └── index.html
│
├── package.json
└── README.md
```

1. **server/**: Contains the back-end logic, including routes, models, and configuration.
2. **site/**: Contains the front-end, using React.js, with a `src` folder that holds components and pages.

# <a name="4-running-the-project-locally">Running the Project Locally:</a>

To run BioBranch locally, follow these steps:

**Step 1: Clone the Repository**
```bash
git clone https://github.com/subhadipbhowmik/bio-branch.git
```

**Step 2: Navigate to the root directory**
```bash
cd bio-branch
```

### Running the Server
**Step 3: Install Server Dependencies**
```bash
cd server
npm install
```

**Step 4: Start the Server**
```bash
npm start
```

The server will start running on `http://localhost:5000`.

### Running the Site
**Step 5: Install Site Dependencies**
```bash
cd ../site
npm install
```

**Step 6: Start the Site**
```bash
npm start
```

The site will run on `http://localhost:3000`.

Now you can access both the server and site locally!

# <a name="5-contributing">Contributing:</a>

Contributions are welcome! To contribute:

1. Create a new branch for each change.
2. Make sure your branch is up to date with the main branch.
3. Submit a detailed Pull Request (PR) explaining your changes.

For more details, see the [CONTRIBUTING.md](CONTRIBUTING.md) file.

Happy Coding! 🚀
```