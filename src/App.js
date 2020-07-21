import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import animal_list from './components/animal_list';

const current_year = new Date().getFullYear();
const user = <div>Tristan Whaley</div>

const Animal = ({animal_name, sound}) => <div> The {animal_name} goes {sound}</div>

const Body = ({animal_list}) =>
(<div className = "farmhouse">
    {animal_list.map(animal => <Animal key = {animal.id} animal_name = {animal.animal_name} sound = {animal.sound}/>)}
</div>)

function App() {
  return (
    <div>
      <Header />
      <Body animal_list = {animal_list}/>
      <Footer current_year = {current_year} user = {user}/>
    </div>
  );
}

export default App;
