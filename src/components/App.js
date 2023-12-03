import '../css/App.css';
import StepsBox from './Steps';

export default function App() {
  const stepNames = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  return (
    <main className="main-sec">
      <section id='step-guide-container'>
        {stepNames.map((stepName, index) => <StepsBox number={index + 1} name={stepName}/>)}
      </section>
      <section id='plan-custom'></section>
    </main>
  );
};
