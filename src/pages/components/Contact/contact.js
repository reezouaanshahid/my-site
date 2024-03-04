import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setmessage] = useState('');

    const sendData = async () => {
        // Check if any field is empty
        if (!name || !email ||!message) {
            alert('Please fill in all fields');
            return;
        }

        // Initialize Firebase
        const firebaseConfig = {
          apiKey: "AIzaSyDQ0zLNrMsqJvNmzUvt8ZOnFP7OVbxGx40",
          authDomain: "taiwind.firebaseapp.com",
          projectId: "taiwind",
          storageBucket: "taiwind.appspot.com",
          messagingSenderId: "773217111893",
          appId: "1:773217111893:web:48f1c10929428a4d61a9dc",
          measurementId: "G-PR93E3ELQS"
        };
        const app = initializeApp(firebaseConfig);

        // Get a reference to the Firestore database
        const db = getFirestore(app);

        // Data to be sent to Firestore
        const data = {
            name: name,
            email: email,
            message: message
        };

        try {
            // Add data to a Firestore collection
            await addDoc(collection(db, 'users'), data);
            console.log("Data sent successfully");
            // Clear input fields after successful submission
            setName('');
            setEmail('');
            setmessage('');
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

  return (
    <section class="text-gray-400 bg-gray-900 body-font relative max-md:mt-20">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <iframe
                        title="map"
                        className="absolute inset-0 w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8178184964515!2d73.07930171491419!3d33.63788838072337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391910dd1d43aead%3A0x20c5c10103df1e8d!2sFIT%20Sadiqabad%20Rawalpindi!5e0!3m2!1sen!2s!4v1646071518257!5m2!1sen!2s"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>      <div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1"> FIT Sadiqabad Rawalpindi</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-400 leading-relaxed">rizwanshahed232@gmail.com</a>
          <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">03485002353</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5">Submit your thougths</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
        <input type="text"  value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
        <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)}  id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
        <textarea type='text' value={message} onChange={(e)=>setmessage(e.target.value)} id="message" name="message" placeholder='let me know how was your experince :)' class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button onClick={sendData} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p class="text-xs text-gray-400 text-opacity-90 mt-3">I would love to work with you :)</p>
    </div>
  </div>
</section>
  )
}
