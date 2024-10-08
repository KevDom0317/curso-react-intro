import './TodoCounter.css';

function TodoCounter({Total, Complete}){
    if (Complete==Total) {
        return(
            <h1 className='TodoCounter'>
            Felicidades!!! Completaste todos los TODOs
        </h1>
        );
    }
    return (
    <h1 className='TodoCounter'>
    Haz completado {Complete} de {Total} TODOs
    </h1>
);
}
export {TodoCounter};