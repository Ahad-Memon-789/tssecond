import "./Quiz";
function QuizResult(props: any) {
  return (
    <>
      Score:{props.Score} <br />
      Totalscore:{props.totalScore}
    </>
  );
}
export default QuizResult;
