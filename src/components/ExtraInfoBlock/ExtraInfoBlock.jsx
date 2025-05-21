import { Button } from "../ui/button";

export default function ExtraInfoBlock({ status, label, content }) {
  let renderedContent;

  switch (status) {
    case 'abouMe':
      renderedContent = <p>{content}</p>;
      break;

    case 'projects':
      console.log(content)
      renderedContent = <div>
        {content.map((project, index) => (
          <div className="w-[20%]" key={index}>
            <h2>{project.name}</h2>
            <img className='w-[100%]' src={project.img} alt="project image"/>
            <p>{project.discription}</p>
          </div>
        ))}
      </div>;
      break;

    default:
      renderedContent = <p>Что-то пошло не так...</p>;
  }

  return (
    <div className="p-4 border rounded-md">
      <h1 className="text-lg font-semibold mb-2">{label}</h1>
        {renderedContent}
    </div>
  );
}
