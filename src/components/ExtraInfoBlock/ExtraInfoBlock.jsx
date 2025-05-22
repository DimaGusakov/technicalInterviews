import { Button } from "../ui/button";

export default function ExtraInfoBlock({ status, label, content }) {
  let renderedContent;

  switch (status) {
    case 'aboutMe':
      renderedContent = <p>{content}</p>;
      break;

    case 'projects':
      renderedContent = 
      <div className="flex gap-6">
        {content.map((project, index) => (
          <div className="w-38 flex flex-col" key={index}>
            <h2 className="text-[clamp(1rem,1.5vw,1.3rem)] font-medium">{project.name}</h2>
            <img className='w-38 rounded-sm' src={project.img} alt="project image"/>
            <p className="text-[clamp(0.4rem,1.5vw,1rem)]">{project.discription}</p>
          </div>
        ))}
      </div>;
      break;

    default:
      renderedContent = <p>Что-то пошло не так...</p>;
  }

  return (
    <div className="p-4 border rounded-3xl shadow-[0px_4px_10px_0px_rgba(106,99,118,0.1)] max-h-73">
      <h1 className="text-xl font-semibold mb-2">{label}</h1>
        {renderedContent}
    </div>
  );
}
