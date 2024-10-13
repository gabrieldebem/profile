import { Button } from "@mui/material"
import { Header } from "../Components/Header"
import IconButton from '@mui/material/IconButton';
import { GitHub, Instagram, LinkedIn, Mail } from "@mui/icons-material"
import { lang } from "../lang";

export function Profile() {
  const navigateToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/gabrielroxo/");
  };
  const navigateToInstagram = () => {
    window.open("https://www.instagram.com/gabrielroxoo/");
  };
  const navigateToGitHub = () => {
    window.open("https://github.com/gabrieldebem");
  };

  const navigatorLang = navigator.language === "pt-BR" ? "pt_br" : "en";
  const trans = lang[navigatorLang];

  return (
    <div className="flex flex-col md:basis-1/2 justify-center items-center w-screen h-screen p-4 dark:bg-gray-900 dark:text-white">
      <div className="flex">
        <img
          src="https://avatars.githubusercontent.com/u/71789310?v=4"
          alt="Gabriel Roxo"
          className="rounded-full h-64 w-64"
        />
      </div>
      <Header>Gabriel Roxo</Header>
      <h2 className="text-xl font-semibold my-4">{trans.job} ({trans.pronouns})</h2>

      <div className="absolute bottom-20 left-auto flex justify-center flex-col w-64">
        <Button
          variant="contained"
          startIcon={<Mail />}
          onClick={() => window.open("mailto:roxoo.gabriel@gmail.com")}
        >
          { trans.mail_button }
        </Button>

        <div className="flex justify-center mt-4">
          <IconButton color="info" onClick={navigateToLinkedIn}>
            <LinkedIn />
          </IconButton>
          <IconButton color="info" onClick={navigateToInstagram}>
            <Instagram />
          </IconButton>
          <IconButton color="info" onClick={navigateToGitHub}>
            <GitHub />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
