import { Button } from "@mui/material";
import { Header } from "../Components/Header";
import { Download } from "@mui/icons-material";
import { lang } from "../lang";
import { List } from "../Components/List";

export function Resume() {
  const navigatorLang = navigator.language === "pt-BR" ? "pt_br" : "en";
  const trans = lang[navigatorLang];

  return (
    <div className="flex flex-col md:basis-1/2 md:pt-32 justify-center items-center h-screen w-screen px-4 bg-gray-100 dark:bg-gray-800 dark:text-white">
      <Header>{trans.about}</Header>
      <div className="pb-6 overflow-auto scroll-smooth focus:scroll-auto">
        <p className="text-lg text-center my-4">{trans.experience_paragraph}</p>
        <p className="text-lg text-center mb-4">{trans.technologies_paragraph}</p>
        <p className="text-lg text-center mb-4">{trans.goals_title}</p>
        <List
          items={trans.goals}
        />
        <p className="text-lg text-center mb-4">{trans.conclusion_paragraph}</p>
      </div>
      <div className="flex justify-center flex-col w-64 mt-6 mb-6 md:mb-20">
        <Button
          download={"gabrielroxo_resume.pdf"}
          href={"/resume.pdf"}
          variant="contained"
          classes={'h-max'}
          endIcon={<Download />}
        >
          {trans.resume_button}
        </Button>
        <div className="flex justify-center h-14">
        </div>
      </div>
    </div>
  );
}
