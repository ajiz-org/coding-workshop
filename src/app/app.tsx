import { useCallback, useMemo } from "react";


import { Model, ServerValidateQuestionsEvent, SurveyModel } from "survey-core";
import "survey-core/defaultV2.min.css";
import "survey-core/i18n/french";
import { Survey } from "survey-react-ui";
import "./survey.css";
import { surveyJson } from "./surveydata";
import { theme } from "./theme";

function App() {
  const alertResults = useCallback(
    async (sender: SurveyModel, options: ServerValidateQuestionsEvent) => {
      try {
        const results = JSON.stringify(sender.data);
        const res = await fetch(
          "https://eu-west-2.aws.data.mongodb-api.com/app/application-0-nyecz/endpoint/register",
          { method: "POST", body: results }
        );
        if (res.status === 200) sender.doComplete();
        else throw new Error();
        options.complete();
      } catch {
        options.errors = {
          accept: "Erreur inconnue",
        };
        if (
          confirm("Une erreur est survenue, voulez vous contacter 26 405 096 ?")
        ) {
          open("tel:+21626405096");
        }
        options.complete();
      }
    },
    []
  );

  const survey = useMemo(() => {
    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;
    survey.locale = "fr";
    survey.applyTheme(theme);
    survey.onServerValidateQuestions.add(alertResults);
    return survey;
  }, [alertResults]);

  return <Survey model={survey} />;
}

export default App;
