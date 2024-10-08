import './CreateTodoBTN.css'

function CreateTodoBTN(){
    return (
        <button className='CreateTodoBTN'
        onClick={
            () => alert('Le diste click') }> + </button>
    );
    }
    export {CreateTodoBTN};