import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type userDataType = {
  id: string
  name: string
}
export type massagesDataType = {
  id: string
  message: string
}
export type postDataType = {
  id: string
  message: string
}


const usersData: userDataType[] = [
  { id: "1", name: "Dima" },
  { id: "2", name: "Masha" },
  { id: "3", name: "Petya" },
  { id: "4", name: "Nastya" },
  { id: "5", name: "Sasha" },
]

const massagesData: massagesDataType[] = [
  { id: "1", message: "Hi, how are you" },
  { id: "2", message: "Hi" },
  { id: "1", message: "Hi, how are you" },
  { id: "2", message: "Hi" },
  { id: "1", message: "Hi, how are you" },
  { id: "2", message: "Hi" },

]

const postsData = [
  { id: "1", message: "Hi!" },
  { id: "2", message: "My new account" },
]

ReactDOM.render(
  <App usersData={usersData}
    massagesData={massagesData}
    postsData={postsData}
  />,
  document.getElementById('root')
);