import { useCallback, useMemo } from "react";

import "survey-core/defaultV2.min.css";
import { Model, SurveyModel } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveyJson } from "./surveydata";
import "survey-core/i18n/french";
import { theme } from "./theme";
import "./survey.css";
function App() {
  const alertResults = useCallback(async (sender: SurveyModel) => {
    const results = JSON.stringify(sender.data);
    const res = await fetch(
      "https://eu-west-2.aws.data.mongodb-api.com/app/application-0-nyecz/endpoint/register",
      { method: "POST", body: results }
    );
    if (res.status === 200) sender.doComplete();
    else if (confirm('Une erreur est survenue, voulez vous contacter 26 405 096 ?')) {
      open('tel:+21626405096')
    }
  }, []);

  const survey = useMemo(() => {
    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;
    survey.locale = "fr";
    survey.applyTheme(theme);
    survey.onComplete.add(alertResults);
    return survey;
  }, [alertResults]);

  return <Survey model={survey} />;
}

export default App;
