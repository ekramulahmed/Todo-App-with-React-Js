import React from 'react';
import './Steves.css';

const Steves = ({steves, deleteSteve}) => {

    // ***************** First Way Way *****************
    const steveList = steves.map(steve => {
        if (steve.age > 40) {
        return (
            <div className="steve" key={steve.id}>
                <div>Name: { steve.name }</div>
                <div>Age: { steve.age }</div>
                <div>Belt: { steve.belt }</div>
                <button onClick={() => {deleteSteve(steve.id)}}>Delete Steve</button>
            </div>
            )
        }
        else {
            return null
        }
       
    })

    return (
        <div className="steve-list">
            { steveList }
        </div>
    )

    // ***************** Second Way *****************
    // const steveList = steve.map(steve => {
    //     return steve.age > 40 ? (
    //         <div className="steve" key={steve.id}>
    //             <div>Name: { steve.name }</div>
    //             <div>Age: { steve.age }</div>
    //             <div>Belt: { steve.belt }</div>
    //         </div>
    //     ) : null;
    // });

    // *************** Third way *********************
    // return (
    //     <div className="steve-list">
    //         {
    //             steve.map(steve => {  
    //                 return steve.age > 40 ? (
    //                     <div className="steve" key={steve.id}>
    //                         <div>Name: { steve.name }</div>
    //                         <div>Age: { steve.age }</div>
    //                         <div>Belt: { steve.belt }</div>
    //                     </div>
    //                 ) : null
    //             })
    //         }
    //     </div>
    // );          // End return

}   // End First const 

export default Steves;