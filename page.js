

import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-yellow-100">

     <div className="bg-yellow-200 text-white flex items-stretch text-7xl">
        <div class="flex-col space-y-7 px-5 py-20">
          <h3>Focus</h3>
          <h3>Balance</h3>
          <h3>Clarity</h3>
          <button class="text-4xl bg-orange-300 hover:bg-orange-400 font-bold mt-3 mb-3 py-3 px-5 rounded text-green-600 ">Start new life</button>
        </div>
        <div>
          <img className="float-right"src="https://media.istockphoto.com/id/958841734/photo/a-person-prepares-to-step-on-a-board-with-sharp-nails-traditional-medicine-and-yoga.jpg?s=1024x1024&w=is&k=20&c=e4zCZFVvX849csja8ngeT-j7U0NqW6Z5x4emSGOvw6c=" alt="Hero"></img>
        </div>
      </div>
  
      <div className="flex justify-between mx-20 my-5 text-xl text-white">
        <div className="bg-yellow-300 box-border p-5 border-2">  
          <h3 className="text-orange-400">The benefits of sadhu board therapy: </h3>
          <ul className="list-disc mx-1">
            <li>stimulation of reflex points</li>
            <li>improved blood circulation</li>
            <li>relaxation and peace of mind</li>
            <li>mind disciplin</li>
            <li>detox</li>
            <li>stress relief</li>
            <li>deeper sleep</li>
            <li>in-depth meditation</li>
            <li>increased Energy</li>
            <li>strengthening the immune system</li>
          </ul>
        </div>
        <div className="bg-yellow-300 box-border p-5 border-2">
          <h3 className="text-orange-400">The practice includes:</h3>
          <ul className="list-disc mx-1">
            <li>duration 2 hours</li>
            <li>tea ceremony</li>
            <li>determining the state of life stage</li>
            <li>formulation of intent</li>
            <li>standing on nails</li>
            <li>meditation</li>
            <li>Rapé ceremony</li>
          </ul>
       </div>
       <div className="bg-yellow-300 box-border p-5 border-2">
        <p className="text-orange-400">Join your private or group practice!</p>
        <input type="text" id="name" name="name" placeholder="Enter your name" className="block mx-2 my-5 bg-white-100 rounded-md text-black"></input>
        <input type="email" id="email" name="email" placeholder="Enter your email" className="block mx-2 my-5 bg-white-100 rounded-md text-black"></input>
        <button className="bg-orange-300 hover:bg-orange-400 font-bold py-2 px-4 rounded text-green-600 ">Join!</button>
       </div>
      </div>

      <footer className="flex justify-between mx-3 my-2  text-xs">
        <h6><strong>phone: </strong> 1234567 |</h6>
        <h6><strong>email: </strong> sadhuboard@gmail.com |</h6>
        <h6><strong>adress: </strong> Latvia, Riga, Brivibas gatve 40 "Yoga Gym" |</h6>
      </footer>
      
    </main> 
  );
}
