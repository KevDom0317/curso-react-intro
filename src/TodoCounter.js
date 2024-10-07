import './TodoCounter.css';

function TodoCounter({Total, Complete}){
return (
    <h1>
    Haz completado {Complete} de {Total} TODOs
    </h1>
);
}
export {TodoCounter};