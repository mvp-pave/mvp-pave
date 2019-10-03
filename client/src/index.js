import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './components/App.js';
=======
import FakeApp from './components/FakeApp.js';
// import $ from 'jquery';
// import List from './components/List.jsx';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       items: []
//     }
//   }

//   componentDidMount() {
//     $.ajax({
//       url: '/items', 
//       success: (data) => {
//         this.setState({
//           items: data
//         })
//       },
//       error: (err) => {
//         console.log('err', err);
//       }
//     });
//   }

//   render () {
//     return (<div>
//       <h1>Item List</h1>
//       <List items={this.state.items}/>
//     </div>)
//   }
// }
>>>>>>> 722ac0a167733655c90aa628475cba36006535f6

ReactDOM.render(<FakeApp />, document.getElementById('app'));