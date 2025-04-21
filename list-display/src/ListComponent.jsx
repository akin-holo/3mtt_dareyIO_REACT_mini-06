import './App.css'

const ListComponent = ({data}) => {
   return ( 
      <div>
         <div className='list-container'>
            {data.map((info) => (
               <ul key={info.id}>
                  <li>{info.title}</li>
               </ul>
            ))}
         </div>
      </div>
    
    );
}
 
export default ListComponent;