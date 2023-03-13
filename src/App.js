import './App.css';
import Menu from './Menu/Menu';

function App() {
    const tables = [
        'Courses', 'Students'
    ];
    return (
        <div className='app'>
            <Menu tables={tables}/>
        </div>
    );
}

export default App;
