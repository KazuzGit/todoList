import React from "react";
import { useParams } from "react-router-dom";

const ProjectItem = ({ project }) => {
  return (
    <tr>
      <td>{project.id}</td>
      <td>{project.name}</td>
      <td>{project.repository}</td>
      <td>{project.users.join(", ")}</td>
    </tr>
  );
};

const ProjectList = ({ projects }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Repository</th>
          <th>Users</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <ProjectItem project={project} key={project.id.toString()} />
        ))}
      </tbody>
    </table>
  );
};

const ProjectListFilterId = ({ projects }) => {
  let { id } = useParams();
  let filtered_items = projects.filter((item) => item.id.toString() === id);
  return <ProjectList projects={filtered_items} />;
};
export { ProjectList, ProjectListFilterId };