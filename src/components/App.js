import '../css/App.css';
import StepsBox from './Steps';

export default function App() {
  const stepNames = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  return (
    <main className="main-sec">
      <section id='step-guide-container'><StepsBox number={2} name={stepNames[1]}/></section>
      <section id='plan-custom'></section>
    </main>
  );
};
