import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="flex flex-col items-center w-80 gap-8">
      <div className="flex flex-col items-center gap-4">
        <img
          className="w-48 rounded-full border-2 border-slate-950"
          src="https://github.com/rafael-m-silva.png"
          alt="person"
        />
        <h1 className="font-bold text-2xl">@BigodeEnsina</h1>
        <p>Descrição da sua experiência profissional</p>
      </div>
      <div className="flex flex-col gap-7">
        <Button
          linkButton={"https://www.youtube.com/@BigodeEnsina"}
          nomeButton={"Youtube"}
          icon={
           "fa-brands fa-youtube fa-xl"
          }
        />
        <Button
          linkButton={"https://github.com/rafael-m-silva"}
          nomeButton={"Github"}
          icon={
          "fa-brands fa-github fa-xl"
          }
        />
        <Button
          linkButton={"linkedin.com/in/rafael-mauricio-dev/"}
          nomeButton={"Linkedin"}
          icon={
          "fa-brands fa-linkedin fa-xl"
          }
        />
        <Button
          linkButton={"https://www.instagram.com/rafamauricio_s/"}
          nomeButton={"Instagram"}
          icon={
          "fa-brands fa-instagram fa-xl"
          }
        />
      </div>
    </div>
  );
}

export default App;
