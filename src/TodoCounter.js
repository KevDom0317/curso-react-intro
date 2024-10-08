import './TodoCounter.css';

function TodoCounter({Total, Complete}){
return (
    <h1 className='TodoCounter'>
    Haz completado {Complete} de {Total} TODOs
    </h1>
);
}
export {TodoCounter};