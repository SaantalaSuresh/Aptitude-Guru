import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

import Home from './components/Home.js';

const App = () => {
  const contents = [
    { 
      keyword: 'lld-bootcamp', 
      title: 'Introduction to LLD BootCamp', 
      content: `Welcome to the Introduction to Large Scale Systems Design (LLD) BootCamp. This comprehensive course covers everything from designing scalable architectures to optimizing system performance. Participants will explore best practices in distributed systems, fault tolerance mechanisms, and strategies for handling large datasets.`,
      imageUrl: 'https://imagetolink.com/ib/MqSjNcnUUy.jpg' 
    },
    { 
      keyword: 'supra-batch', 
      title: 'Welcome to SUPRA Batch', 
      content: `Welcome aboard the SUPRA Batch, where innovation meets education. This specialized program is tailored for aspiring engineers looking to dive deep into cutting-edge technologies and industry practices. Prepare to embark on a journey of learning, collaboration, and hands-on experience.`,
      imageUrl: 'https://imagetolink.com/ib/dEu6QsMcgs.jpg' 
    },
    { 
      keyword: 'discord-group', 
      title: 'Steps to join Discord Group', 
      content: `Join our vibrant Discord community in a few simple steps! Discover a hub of knowledge sharing, networking opportunities, and real-time support. Whether you're a beginner or an expert, our Discord group is the place to connect with fellow learners, mentors, and enthusiasts.`,
      imageUrl: 'https://support.slooh.com/hubfs/image-png-Feb-22-2022-05-41-52-51-PM.png' 
    },
    { 
      keyword: 'issue-ticket', 
      title: 'How to Raise an Issue/Ticket?', 
      content: `Need assistance? Learn how to raise an issue or support ticket effortlessly. Our support system ensures prompt resolution of your queries and concerns. Follow these steps to get the help you need quickly and efficiently.`,
      imageUrl: 'https://blog.cimcloud.com/hubfs/Blog_Post_Images/HowToWriteASupportTicket.png' 
    },
    { 
      keyword: 'orientation-session', 
      title: 'Orientation Session', 
      content: `Welcome to our Orientation Session! This session serves as your gateway to understanding our programs, resources, and community guidelines. Get ready to embark on a rewarding educational journey with insights into our mission, values, and expectations.`,
      imageUrl: 'https://news.vidyaacademy.ac.in/wp-content/uploads/2022/08/Orientation-Session.png' 
    },
    { 
      keyword: 'learn-cpp', 
      title: 'Week 1: Let\'s Learn C++', 
      content: `Week 1 of our C++ learning series is packed with essential topics to kickstart your programming journey. From basic syntax and data types to control structures and functions, lay a solid foundation in one of the most widely used programming languages.`,
      imageUrl: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230703144619/CPP-Language.png' 
    },
    { 
      keyword: 'learn-java', 
      title: 'Let\'s Learn Java', 
      content: `Explore the world of Java programming with our comprehensive learning resources. Whether you're new to programming or looking to enhance your skills, this course covers object-oriented concepts, advanced features, and practical applications in software development.`,
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*y0JUbU3ol5dYsYDyoIxmoA.jpeg' 
    },
    { 
      keyword: 'oops', 
      title: 'Object Oriented Programming Systems (OOPS)', 
      content: `Master Object-Oriented Programming (OOP) with our in-depth course. Gain proficiency in essential concepts such as classes, objects, inheritance, polymorphism, and encapsulation. Learn how to design robust and modular systems using OOP principles.`,
      imageUrl: 'https://media.licdn.com/dms/image/D5612AQF50J9eOqvAPQ/article-cover_image-shrink_720_1280/0/1674911955814?e=1724889600&v=beta&t=CbV2LnHetMFJxw22X5lPQf0nJSUYVHXgC8kUTMJH_mE' 
    },
    { 
      keyword: 'cpp-stl', 
      title: 'C++ STL', 
      content: `Dive into the C++ Standard Template Library (STL) with our comprehensive guide. Discover powerful container classes, algorithms for sorting and searching, and utilities to streamline your C++ programming. Enhance your coding efficiency with STL's reusable components.`,
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*JS6Zv0pRf2aB67VynLfI0g.png' 
    },
  ];
  
  return (
    <Router>
      <div className="app">
        <Sidebar contents={contents} />
        <Routes>
          {contents.map((item) => (
            <Route key={item.keyword} path={`/${item.keyword}`} element={<MainContent title={item.title} content={item.content} imageUrl={item.imageUrl} />} />
          ))}
             <Route exact path="/" element={<Home/>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
