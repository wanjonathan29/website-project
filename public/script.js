/* fetch("/api/projects")
  .then(res => res.json())
  .then(projects => {
    const list = document.getElementById("projects");
    projects.forEach(p => {
      const li = document.createElement("li");
      li.textContent = `${p.title}: ${p.description}`;
      list.appendChild(li);
    });
  });
*/