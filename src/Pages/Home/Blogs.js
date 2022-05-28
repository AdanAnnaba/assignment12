import React from 'react';

const Blogs = () => {
    return (
       <div>
        <div className='bg-green-400'>
            <h1 className='text-3xl text-black text-left ml-4 mt-7'>1. Question: How will you improve the performance of a React Application?</h1>
            <p className='mr-12 ml-8 mt-4 text-justify'>Ans: Using Immutable Data Structures. Function/Stateless Components and React.PureComponent, Using Production Mode Flag in Webpack and Avoid Inline Function Definition in the Render Function.</p>
        </div>
        <div className='bg-green-200'>
            <h1 className='text-3xl text-black text-left ml-4'>2. Question: What are the different ways to manage a state in a React application?</h1>
            <p className='mr-12 ml-8 mt-4 text-justify'>Ans: The state is an object that holds information about a certain component. Plain JavaScript functions don't have the ability to store information. The code within them executes and dissapears once the execution is finished.

            But thanks to state, React functional components can store information even after execution. When we need a component to store or remember something, or to act in a different way depending on the environment, state is what we need to make it work this way.</p>
        </div>
        <div className='bg-green-400'>
            <h1 className='text-3xl text-black text-left ml-4 mt-7'>3. Question: How does prototypical inheritance work?</h1>
            <p className='mr-12 ml-8 mt-4 text-justify'>Ans: Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
        </div>
        <div className='bg-green-200'>
            <h1 className='text-3xl text-black text-left ml-4 mt-7'>4. Question: You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?  </h1>
            <p className='mr-12 ml-8 mt-4 text-justify'>Ans: The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them. It has a property for determining the array length and other properties for use with regular expressions.</p>
        </div>
        <div className='bg-green-400'>
            <h1 className='text-3xl text-black text-left ml-4 mt-7'>5. Question: You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?  </h1>
            <p className='mr-12 ml-8 mt-4 text-justify'>Ans: A unit test is a test that exercises individual software components or methods, also known as "unit of work". Unit tests should only test code within the developer's control. They do not test infrastructure concerns. Infrastructure concerns include interacting with databases, file systems, and network resources. This can help them to stay focused and can also help them to create much better designs.</p>
        </div>
       </div>
    );
};

export default Blogs;