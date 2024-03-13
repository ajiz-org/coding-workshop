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
    await fetch(
      "https://eu-west-2.aws.data.mongodb-api.com/app/application-0-nyecz/endpoint/register",
      { method: "POST", body: results }
    );
    sender.doComplete();
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
