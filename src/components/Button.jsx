export default function Button({ nomeButton, icon, linkButton }) {
  return (
    <a
      className="bg-indigo-700 flex items-center w-64 p-4 text-white font-semibold rounded-full shadow-[5px_5px_0px_rgba(0,0,0,1)] text-center gap-2 hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:transition"
      href={linkButton} target="_blank"
    >
      <i className={icon}></i>
      <span className="flex-1 text-center">{nomeButton}</span>
    </a>
  );
}
