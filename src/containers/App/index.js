import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import NewCardForm from '../NewCardForm';
import KanbanBoard from '../KanbanBoard';
import Card from '../../components/Card';
import Queue from '../InQueue';
import InProgress from '../InProgress';
import Done from '../Done';
import './App.css';

class App extends Component {
  constructor () {
    super();

  }

  render () {
    return (
      <div>
        <div className="kanbanHeader">Kanban</div>
        <NewCardForm />
        <KanbanBoard />
      </div>
    );
  }
}


export default App;



