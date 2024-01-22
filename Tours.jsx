import Card from './Card';
import './Tours.css';

function Tours({tours,removeTour}) {
    return(
        <div className='container'>
            <div className='heading'>
                <h2>Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card  {...tour} removeTour={removeTour}></Card>
                    })
                 }
                
            </div>
        </div>
    );

}

export default Tours;
